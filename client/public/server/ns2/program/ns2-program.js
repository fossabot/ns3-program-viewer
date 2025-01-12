const path = require("path");
const mapping = require("./ns2-mapping");
const mapping3 = require("../../ns3/program/ns3-mapping");
const { ns2Reverb } = require("./ns2-fx-reverb");
const { ns2Compressor } = require("./ns2-fx-compressor");
const { zeroPad } = require("../../common/converter");
const { programCategoryMap } = require("../../common/nord-mapping");
const { ns2Slot } = require("./ns2-slot");
const { nordFileExtMap } = require("../../common/nord-mapping");
const { getVersion } = require("../../common/converter");

/***
 * returns Nord Stage 3 program data
 *
 * @param buffer {Buffer}
 * @param filename {string}
 * @returns {{split: *, panelA: *, masterClock: {rate: {value: string}}, panelB: *, name: *, transpose: *, category: *, version: string}}
 */
exports.loadNs2ProgramFile = (buffer, filename) => {
    if (buffer.length > 16) {
        const claviaSignature = buffer.toString("utf8", 0, 4);
        if (claviaSignature !== "CBIN") {
            throw new Error("Invalid Nord file");
        }
        const fileExt = buffer.toString("utf8", 8, 12);
        if (fileExt !== "ns2p") {
            throw new Error(fileExt + " file are not supported, select a valid ns2p file");
        }
    }

    if (buffer.length !== 565 && buffer.length !== 547) {
        throw new Error("Invalid file, unexpected file length");
    }

    // const fileId = buffer.readUInt16BE(0x0e);
    const offset04 = buffer.readUInt8(0x04);
    const offset10 = buffer.readUInt8(0x10);
    const offset14W = buffer.readUInt16LE(0x14);

    const bankValue = buffer.readUInt8(0x0c) & 0x03;
    const locationValue = buffer.readUInt8(0x0e) & 0x7f;
    const locationDigit1 = Math.trunc(locationValue / 5) + 1; // * 10;
    const locationDigit2 = (locationValue % 5) + 1;
    const programLocation = {
        bank: bankValue,
        location: locationValue,
        name: String.fromCharCode(65 + bankValue) + ":" + zeroPad(locationDigit1, 2) + ":" + locationDigit2,
        value: bankValue * 25 + locationValue,
    };
    /**
     * Offset in file: 0x14 and 0x15
     *
     * @example
     * 16-bit integer value in Little Endian format
     * current supported version are 2 to 7
     *
     * @module NS2 File Version
     */
    const majorVersion = offset14W;
    const version = {
        majorVersion: majorVersion,
        minorVersion: 0,
        value: majorVersion.toString(),
    };

    /**
     * Offset in file: 0x04
     *
     * @example
     * 0 = header type 0 - legacy mode no CRC (Byte 0x18 to 0x2B are missing)
     * 1 = header type 1 - default mode with additional bytes 0x18 to 0x2B (20 bytes).
     *
     * @module NS2 File Format
     */
    let versionOffset = 0;
    // offset 0x04 defines the file format, and not the minor version as initially supposed
    if (offset04 !== 1) {
        console.log("Offset 0x04 <> 1 switched to legacy mode");
        versionOffset = -20;
    }

    const offset30 = buffer.readUInt8(0x30 + versionOffset);
    const offset31 = buffer.readUInt8(0x31 + versionOffset);
    const offset31W = buffer.readUInt16BE(0x31 + versionOffset);
    const offset32W = buffer.readUInt16BE(0x32 + versionOffset);
    const offset33W = buffer.readUInt16BE(0x33 + versionOffset);
    const offset38 = buffer.readUInt8(0x38 + versionOffset);
    const offset2e = buffer.readUInt8(0x2e + versionOffset);
    const offset2f = buffer.readUInt8(0x2f + versionOffset);

    /**
     * Offset in file: 0x30 (b5-1)
     *
     * @example
     * Enabled: (b5)
     * Value: (b4-1)
     * #include ns2TransposeMap
     *
     * @module NS2 Transpose
     */

    const transposeEnabled = (offset30 & 0x20) !== 0;
    const transposeValue = (offset30 & 0x1e) >>> 1;
    const transpose = {
        enabled: transposeEnabled,
        value: transposeEnabled ? mapping.ns2TransposeMap.get(transposeValue) : "",
    };

    /**
     * @example
     * 3 SPLIT ZONES
     * Offset in file 0x2f (b3)
     * 0 = OFF
     * 1 = ON
     *
     * 2 SPLIT ZONES
     * Offset in file 0x2f (b2)
     * 0 = OFF
     * 1 = ON
     *
     * SPLIT POINT LOW/ SPLIT POINT DUAL
     * Offset in file 0x2e (b3-0)
     * 0 = F2
     * 1 = C3
     * 2 = F3
     * 3 = C4
     * 4 = F4
     * 5 = C5
     * 6 = F5
     * 7 = C6
     * 8 = F6
     * 9 = C7
     *
     * SPLIT POINT HIGH
     * Offset in file 0x2f (b7-4)
     * 1 = C3
     * 2 = F3
     * 3 = C4
     * 4 = F4
     * 5 = C5
     * 6 = F5
     * 7 = C6
     * 8 = F6
     * 9 = C7
     *
     * @module NS2 Split
     */

    const split3Zones = (offset2f & 0x08) !== 0;
    const split2Zones = (offset2f & 0x04) !== 0;
    const splitLowNote = offset2e & 0x0f;
    const splitHighNote = (offset2f & 0xf0) >>> 4;

    const splitEnabled = split2Zones || split3Zones;
    const split = {
        enabled: splitEnabled,
        low: {
            note: splitEnabled ? mapping.ns2SplitNoteMap.get(splitLowNote) : "--",
        },
        high: {
            note: splitEnabled && split3Zones ? mapping.ns2SplitNoteMap.get(splitHighNote) : "--",
        },
    };

    /**
     * Offset in file: 0x31 (b4-0) 0x32 (b7-5)
     *
     * @example
     * bpm = value + 30
     *
     * @module NS2 Master Clock Rate
     */
    const tempo = ((offset31W & 0x1fe0) >>> 5) + 30;

    const dualKeyboard = {
        /**
         * Offset in file 0x2e (b5)
         *
         * @example
         * 0 = Off
         * 1 = On
         *
         * Note: if Dual Keyboard is On, both panel are enabled.
         *
         * @module NS2 Dual Keyboard
         */
        enabled: (offset2e & 0x20) !== 0,
    };

    const ext = path.extname(filename).substr(1);

    const global = {
        version: version,
        masterClock: {
            rate: {
                value: tempo + " bpm",
            },
            //keyboardSync: '' // this is a global setting
        },
        transpose: transpose,
        split: split,
        dualKeyboard: dualKeyboard,
        //monoOut: '', // this is a global setting
        compressor: ns2Compressor(buffer, versionOffset),
        reverb: ns2Reverb(buffer, versionOffset),
    };

    const ns2 = {
        // program file
        name: filename.replace(/\.[^/.]+$/, ""),
        filename: filename,
        ext: ext,
        description: nordFileExtMap.get(ext),

        // program location
        id: programLocation,

        /**
         * Offset in file: 0x10
         *
         * @example
         * #include programCategoryMap
         * @module NS2 Program Category
         */
        category: programCategoryMap.get(offset10),

        ...global,

        slotA: ns2Slot(buffer, 0, versionOffset, global),
        slotB: ns2Slot(buffer, 1, versionOffset, global),
    };

    // All these settings are common for Slot A & B

    // noinspection JSPrimitiveTypeWrapperUsage
    ns2.slotB.piano.slotDetune.value = ns2.slotA.piano.slotDetune.value;

    ns2.slotB.organ.pitchStick.enabled = ns2.slotA.organ.pitchStick.enabled;
    ns2.slotB.organ.type.value = ns2.slotA.organ.type.value;
    ns2.slotB.organ.preset1.vibrato.enabled = ns2.slotA.organ.preset1.vibrato.enabled;
    ns2.slotB.organ.preset1.vibrato.mode = ns2.slotA.organ.preset1.vibrato.mode;
    ns2.slotB.organ.preset2.vibrato.enabled = ns2.slotA.organ.preset1.vibrato.enabled;

    ns2.slotB.organ.preset1.percussion.volumeSoft.enabled = ns2.slotA.organ.preset1.percussion.volumeSoft.enabled;
    ns2.slotB.organ.preset1.percussion.decayFast.enabled = ns2.slotA.organ.preset1.percussion.decayFast.enabled;
    ns2.slotB.organ.preset1.percussion.harmonicThird.enabled = ns2.slotA.organ.preset1.percussion.harmonicThird.enabled;

    // NS2 User Manual:
    // The percussion can be used on Slot A or on Slot B provided that
    // both slots are not active at the same time in a layer or split key- board configuration.
    // If you use a layer or a split, then percussion will only be available on Slot B.
    //
    // "Jonny B" shows for SlotA Percussion / Decay Fast / Harmonic Third enabled although they are disabled.
    // I played around with these settings and it looks as if these parameters can only be set independently
    // if the Nord is either SlotA enabled or SlotB enabled.
    // As soon as both Slots are enabled or the Nord is in DualKB mode,
    // then I can not change the parameters per Slot anymore.
    // Then SlotB takes precedence, in SlotA the parameters can not be used anymore.

    if ((ns2.slotA.enabled && ns2.slotB.enabled) || ns2.dualKeyboard.enabled) {
       // if (ns2.slotB.organ.preset1.percussion.enabled || ns2.slotB.organ.preset2.percussion.enabled) {
        if (ns2.slotA.organ.enabled && ns2.slotB.organ.enabled) {
            ns2.slotA.organ.preset1.percussion.enabled = false;
            ns2.slotA.organ.preset1.percussion.volumeSoft.enabled = false;
            ns2.slotA.organ.preset1.percussion.decayFast.enabled = false;
            ns2.slotA.organ.preset1.percussion.harmonicThird.enabled = false;
            ns2.slotA.organ.preset2.percussion.enabled = false;
        }
    }

    ns2.slotB.effects.rotarySpeaker = ns2.slotA.effects.rotarySpeaker;

    return ns2;
};
