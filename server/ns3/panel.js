const { getMorph } = require("./morph");
const { getEffect2 } = require("./effects");
const { getEffect1 } = require("./effects");
const { getRotarySpeakerEffect } = require("./effects");
const { getSynth } = require("./synth");
const { getPiano } = require("./piano");
const { getOrgan } = require("./organ");

/***
 * returns a complete Panel section
 * @param buffer Input file buffer
 * @param id 0 = Panel A, 1 = Pane B
 * @returns {{organ: {volume: {midi: *, label: unknown}, preset2: string, pitchStick: boolean, kbZone: unknown, preset1: string, sustainPedal: boolean, percussion: {volumeSoft: boolean, harmonicThird: boolean, decayFast: boolean, enabled: boolean}, type: unknown, octaveShift: number, enabled: boolean, live: boolean, vibrato: {mode: unknown, enabled: boolean}}, synth: {voice: unknown, oscillators: {control: {midi: number, label: string}, fastAttack: boolean, pitch: {midi: number, label: string}, type: unknown, waveForm1: string, config: unknown, modulations: {lfoAmount: {midi: number, label: string}, modEnvAmount: {midi: number, label: string}}}, unison: unknown, arpeggiator: {kbSync: boolean, rate: {midi: number, label: unknown}, masterClock: boolean, pattern: unknown, range: unknown, enabled: boolean}, kbZone: unknown, sustainPedal: boolean, keyboardHold: boolean, octaveShift: unknown, enabled: boolean, volume: {midi: *, label: unknown}, filter: {highPassCutoffFrequency: {midi: number, label: unknown}, cutoffFrequency: {midi: number, label: unknown}, type: unknown, drive: unknown, resonance: {midi: number, label: string}, kbTrack: unknown, modulations: {lfoAmount: {midi: number, label: string}, velAmount: {midi: number, label: string}, modEnvAmount: {midi: number, label: string}}}, pitchStick: boolean, lfo: {rate: {midi: number, label: unknown}, masterClock: boolean, wave: unknown}, glide: string, envelopes: {modulation: {attack: {midi: number, label: unknown}, release: {midi: number, label: (string|*)}, decay: {midi: number, label: (string|*)}, velocity: boolean}, amplifier: {attack: {midi: number, label: unknown}, release: {midi: number, label: (string|*)}, decay: {midi: number, label: (string|*)}, velocity: unknown}}, vibrato: unknown}, piano: {kbTouch: unknown, kbZone: unknown, softRelease: boolean, sustainPedal: boolean, type: unknown, octaveShift: number, enabled: boolean, volume: {midi: *, label: unknown}, timbre: unknown, pitchStick: boolean, stringResonance: boolean, model: number, pedalNoise: boolean, layerDetune: unknown}, effects: {effect1: {amount: {midi: number, label: string}, rate: {midi: number, label: unknown}, masterClock: boolean, source: unknown, type: unknown, enabled: boolean}, effect2: {amount: {midi: number, label: string}, rate: {midi: number, label: string}, source: unknown, type: unknown, enabled: boolean}, rotarySpeaker: {stopMode: boolean, source: unknown, drive: string, enabled: boolean, speed: unknown}}, enabled: boolean}}
 */
exports.getPanel = function (buffer, id) {
    const panelOffset31 = buffer.readUInt8(0x31);

    // Panel enabled flag is offset 0x31 (b5 & b6)
    // 0 = A only
    // 1 = B only
    // 2 = A & B
    // Panel selected flag is offset 0x31 (b7);
    // A = 0, B = 1 (not used here)

    const panelEnabledFlag = (panelOffset31 & 0x60) >> 5;
    const panelEnabled =
        id === 0 ? panelEnabledFlag === 0 || panelEnabledFlag === 2 : panelEnabledFlag === 1 || panelEnabledFlag === 2;

    // all hardcoded offset are for Panel A, offset value is for Panel B

    const panelOffset = id * 263;

    return {
        enabled: panelEnabled,
        organ: getOrgan(buffer, panelOffset),
        piano: getPiano(buffer, panelOffset),
        synth: getSynth(buffer, panelOffset),
        effects: {
            rotarySpeaker: getRotarySpeakerEffect(buffer, panelOffset),
            effect1: getEffect1(buffer, panelOffset),
            effect2: getEffect2(buffer, panelOffset),
            // delay: {},
            // ampSimEq: {},
            // compressor: {},
            // reverb: {}
        },
        morph: getMorph(buffer, panelOffset),
    };
};