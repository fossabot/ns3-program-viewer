/***
 * Offset 0x10
 */
exports.categoryMap = new Map([
    [0x00, "Acoustic"],
    [0x01, "Bass"],
    [0x02, "Wind"],
    //[0x03, ''],
    [0x04, "Fantasy"],
    [0x05, "FX"],
    [0x06, "Lead"],
    [0x07, "Organ"],
    [0x08, "Pad"],
    //[0x09, ''],
    [0x0a, "Pluck"],
    [0x0b, "String"],
    [0x0c, "Synth"],
    [0x0d, "Vocal"],
    [0x0e, "User"],
    //[0x0F, ''],
    //[0x10, ''],
    [0x11, "None"],
    //[0x12, ''],
    //[0x13, ''],
    //[0x14, ''],
    [0x15, "Grand"],
    [0x16, "Upright"],
    [0x17, "EPiano1"],
    [0x18, "EPiano2"],
    //[0x19, ''],
    //[0x1A, ''],
    [0x1b, "Clavinet"],
    [0x1c, "Harpsi"],
    //[0x1D, ''],
    [0x1e, "Arpeggio"],
    //[0x1F, ''],
    [0xff, "Undefined"],
]);

/***
 * Panel Enable Matrix
 * @type {Map<number, string>}
 */
exports.panelEnabledMap = new Map([
    [0, "A only"],
    [1, "B only"],
    [2, "A & B"],
]);

/***
 * Keyboard Zone Values
 * @type {Map<number, string>}
 */
exports.kbZoneMap = new Map([
    [0, "O---"],
    [1, "-O--"],
    [2, "--O-"],
    [3, "---O"],
    [4, "OO--"],
    [5, "-OO-"],
    [6, "--OO"],
    [7, "OOO-"],
    [8, "-OOO"],
    [9, "OOOO"],
]);

/***
 * Split Note Values
 * @type {Map<number, string>}
 */
exports.splitNoteMap = new Map([
    [0, "F2"],
    [1, "C3"],
    [2, "F3"],
    [3, "C4"],
    [4, "F4"],
    [5, "C5"],
    [6, "F5"],
    [7, "C6"],
    [8, "F6"],
    [9, "C7"],
]);

/***
 * Split Width Values
 * @type {Map<number, string>}
 */
exports.splitWidthMap = new Map([
    [0, "1"],
    [1, "6"],
    [2, "12"],
]);

/***
 * Transpose Values
 * @type {Map<number, string>}
 */
exports.transposeMap = new Map([
    [0, "-6 semi"],
    [1, "-5 semi"],
    [2, "-4 semi"],
    [3, "-3 semi"],
    [4, "-2 semi"],
    [5, "-1 semi"],
    [6, "0 semi"],
    [7, "+1 semi"],
    [8, "+2 semi"],
    [9, "+3 semi"],
    [10, "+4 semi"],
    [11, "+5 semi"],
    [12, "+6 semi"],
]);

/***
 * Piano Types
 * @type {Map<number, string>}
 */
exports.pianoTypeMap = new Map([
    [0, "Grand"],
    [1, "Upright"],
    [2, "Electric"],
    [3, "Clav"],
    [4, "Digital"],
    [5, "Misc"],
]);

/***
 * Piano Timbre Values
 * @type {Map<number, string[]>}
 */
exports.pianoTimbreMap = new Map([
    //  Grand,     Upright,  Electric, Clav,             Digital,  Misc
    [0, ["None",   "None",   "None",   "None",           "None",   "None"]],
    [1, ["Soft",   "Soft",   "Soft",   "Soft",           "Soft",   "Soft"]],
    [2, ["Mid",    "Mid",    "Mid",    "Treble",         "Mid",    "Mid"]],
    [3, ["Bright", "Bright", "Bright", "Soft+Treble",    "Bright", "Bright"]],
    [4, ["None",   "None",   "Dyno1",  "Brilliant",      "None",   "None"]],
    [5, ["None",   "None",   "Dyno2",  "Soft+Brill",     "None",   "None"]],
    [6, ["None",   "None",   "None",   "Treble+Brill",   "None",   "None"]],
    [7, ["None",   "None",   "None",   "Soft+Trb+Brill", "None",   "None"]],
]);

/***
 * Piano Keyboard Touch Mode Values
 * @type {Map<number, string>}
 */
exports.pianoKbTouchMap = new Map([
    [0, "Normal"],
    [1, "1"],
    [2, "2"],
    [3, "3"],
]);

/***
 * Piano Layer Detune Values
 * @type {Map<number, string>}
 */
exports.pianoLayerDetuneMap = new Map([
    [0, "Off"],
    [1, "1"],
    [2, "2"],
    [3, "3"],
]);

/***
 * Organ Types
 * @type {Map<number, string>}
 */
exports.organTypeMap = new Map([
    [0x00, "B3"],
    [0x01, "Vox"],
    [0x02, "Farfisa"],
    [0x03, "Pipe1"],
    [0x04, "Pipe2"],
]);

/***
 * Organ Vibrato Modes
 * @type {Map<number, string>}
 */
exports.organVibratoModeMap = new Map([
    [0, "V1"],
    [1, "C1"],
    [2, "V2"],
    [3, "C2"],
    [4, "V3"],
    [5, "C3"],
]);

/***
 * Effect Source Values
 * @type {Map<number, string>}
 */
exports.effectSourceMap = new Map([
    [0x00, "Organ"],
    [0x01, "Piano"],
    [0x02, "Synth"],
]);

/***
 * Synth Voice Values
 * @type {Map<number, string>}
 */
exports.synthVoiceMap = new Map([
    [0, "Poly"],
    [1, "Legato"],
    [2, "Mono"],
]);

/***
 * Synth Unison Values
 * @type {Map<number, string>}
 */
exports.synthUnisonMap = new Map([
    [0, "Off"],
    [1, "1"],
    [2, "2"],
    [3, "3"],
]);

/***
 * Synth Vibrato Values
 * @type {Map<number, string>}
 */
exports.synthVibratoMap = new Map([
    [0, "Off"],
    [1, "Delay 1"],
    [2, "Delay 2"],
    [3, "Delay 3"],
    [4, "Wheel"],
    [5, "After Touch"],
]);

/***
 * Synth Oscillator Types
 * @type {Map<number, string>}
 */
exports.synthOscillatorTypeMap = new Map([
    [0, "Classic"],
    [1, "Wave"],
    [2, "Formant"],
    [3, "Super"],
    [4, "Sample"],
]);

/***
 * Synth Oscillator 1 Classic Wave Types
 * @type {Map<number, string>}
 */
exports.synthOscillator1ClassicWaveTypeMap = new Map([
    [0, "Sine"],
    [1, "Triangle"],
    [2, "Saw"],
    [3, "Square"],
    [4, "Pulse 33"],
    [5, "Pulse 10"],
    [6, "ESaw"],
    [7, "ESquare"],
]);

/***
 * Synth Oscillator 1 Wave Wave Types
 * @type {Map<number, string>}
 */
exports.synthOscillator1WaveWaveTypeMap = new Map([
    [0, "Wave 2nd Harm"],
    [1, "Wave 3rd Harm"],
    [2, "Wave 4th Harm"],
    [3, "Wave 5th Harm"],
    [4, "Wave 6th Harm"],
    [5, "Wave 7th Harm"],
    [6, "Wave 8th Harm"],
    [7, "Wave Organ 1"],
    [8, "Wave Organ 2"],
    [9, "Wave Principal"],
    [10, "Wave Flute 1"],
    [11, "Wave Flute 2"],
    [12, "Wave Clarinet 1"],
    [13, "Wave Clarinet 2"],
    [14, "Wave Alto Sax"],
    [15, "Wave Tenor Sax"],
    [16, "Wave 2nd Spectra"],
    [17, "Wave 3rd Spectra"],
    [18, "Wave 4th Spectra"],
    [19, "Wave 5th Spectra"],
    [20, "Wave 6th Spectra"],
    [21, "Wave 7th Spectra"],
    [22, "Wave 8th Spectra"],
    [23, "Wave Saw Random"],
    [24, "Wave Saw Bright"],
    [25, "Wave Sqr Bright"],
    [26, "Wave Saw NoFund"],
    [27, "Wave EPiano 1"],
    [28, "Wave EPiano 2"],
    [29, "Wave EPiano 3"],
    [30, "Wave DX 1"],
    [31, "Wave DX 2"],
    [32, "Wave Full Tines"],
    [33, "Wave Ac Piano"],
    [34, "Wave Ice 1"],
    [35, "Wave Ice 2"],
    [36, "Wave Clavinet 1"],
    [37, "Wave Clavinet 2"],
    [38, "Wave Clavinet 3"],
    [39, "Wave Triplets"],
    [40, "Wave Bell"],
    [41, "Wave Bar 1"],
    [42, "Wave Bar 2"],
    [43, "Wave Tines"],
    [44, "Wave Marimba"],
    [45, "Wave Tubular Bells"],
]);

/***
 * Synth Oscillator 1 Formant Wave Types
 * @type {Map<number, string>}
 */
exports.synthOscillator1FormantWaveTypeMap = new Map([
    [0, "Format Wave Aaa"],
    [1, "Format Wave Eee"],
    [2, "Format Wave Iii"],
    [3, "Format Wave Ooo"],
    [4, "Format Wave Uuu"],
    [5, "Format Wave Yyy"],
    [6, "Format Wave AO"],
    [7, "Format Wave AE"],
    [8, "Format Wave OE"],
]);

/***
 * Synth Oscillator 1 Super Wave Wave Types
 * @type {Map<number, string>}
 */
exports.synthOscillator1SuperWaveTypeMap = new Map([
    [0, "Super Wave Saw"],
    [1, "Super Wave Saw 2"],
    [2, "Super Wave Square"],
    [3, "Super Wave Square 2"],
    [4, "Super Wave Bright"],
    [5, "Super Wave Bright 2"],
    [6, "Super Wave Strings"],
    [7, "Super Wave Organ"],
]);

/***
 * Volume dB Values
 * @type {Map<number, string>}
 */
exports.dBMap = new Map([
    [0, "Off"],
    [1, "-84.2 dB"],
    [2, "-72.1 dB"],
    [3, "-65.1 dB"],
    [4, "-60.1 dB"],
    [5, "-56.2 dB"],
    [6, "-53.0 dB"],
    [7, "-50.3 dB"],
    [8, "-48.0 dB"],
    [9, "-46.0 dB"],
    [10, "-44.2 dB"],
    [11, "-42.5 dB"],
    [12, "-41.0 dB"],
    [13, "-39.6 dB"],
    [14, "-38.3 dB"],
    [15, "-37.1 dB"],
    [16, "-36.0 dB"],
    [17, "-34.9 dB"],
    [18, "-33.9 dB"],
    [19, "-33.0 dB"],
    [20, "-32.1 dB"],
    [21, "-31.1 dB"],
    [22, "-30.5 dB"],
    [23, "-29.7 dB"],
    [24, "-28.9 dB"],
    [25, "-28.2 dB"],
    [26, "-27.6 dB"],
    [27, "-26.9 dB"],
    [28, "-26.3 dB"],
    [29, "-25.7 dB"],
    [30, "-25.1 dB"],
    [31, "-24.5 dB"],
    [32, "-23.9 dB"],
    [33, "-23.4 dB"],
    [34, "-22.9 dB"],
    [35, "-22.4 dB"],
    [36, "-21.9 dB"],
    [37, "-21.4 dB"],
    [38, "-21.0 dB"],
    [39, "-20.5 dB"],
    [40, "-20.1 dB"],
    [41, "-19.6 dB"],
    [42, "-19.2 dB"],
    [43, "-18.8 dB"],
    [44, "-18.4 dB"],
    [45, "-18.0 dB"],
    [46, "-17.6 dB"],
    [47, "-17.3 dB"],
    [48, "-16.9 dB"],
    [49, "-16.5 dB"],
    [50, "-16.2 dB"],
    [51, "-15.8 dB"],
    [52, "-15.5 dB"],
    [53, "-15.2 dB"],
    [54, "-14.9 dB"],
    [55, "-14.5 dB"],
    [56, "-14.2 dB"],
    [57, "-13.9 dB"],
    [58, "-13.6 dB"],
    [59, "-13.3 dB"],
    [60, "-13.0 dB"],
    [61, "-12.7 dB"],
    [62, "-12.5 dB"],
    [63, "-12.2 dB"],
    [64, "-11.9 dB"],
    [65, "-11.6 dB"],
    [66, "-11.4 dB"],
    [67, "-11.1 dB"],
    [68, "-10.9 dB"],
    [69, "-10.6 dB"],
    [70, "-10.3 dB"],
    [71, "-10.1 dB"],
    [72, "-9.9 dB"],
    [73, "-9.6 dB"],
    [74, "-9.4 dB"],
    [75, "-9.1 dB"],
    [76, "-8.9 dB"],
    [77, "-8.7 dB"],
    [78, "-8.5 dB"],
    [79, "-8.2 dB"],
    [80, "-8.0 dB"],
    [81, "-7.8 dB"],
    [82, "-7.6 dB"],
    [83, "-7.4 dB"],
    [84, "-7.2 dB"],
    [85, "-7.0 dB"],
    [86, "-6.8 dB"],
    [87, "-6.6 dB"],
    [88, "-6.4 dB"],
    [89, "-6.2 dB"],
    [90, "-6.0 dB"],
    [91, "-5.8 dB"],
    [92, "-5.6 dB"],
    [93, "-5.4 dB"],
    [94, "-5.2 dB"],
    [95, "-5.0 dB"],
    [96, "-4.9 dB"],
    [97, "-4.7 dB"],
    [98, "-4.5 dB"],
    [99, "-4.3 dB"],
    [100, "-4.2 dB"],
    [101, "-4.0 dB"],
    [102, "-3.8 dB"],
    [103, "-3.6 dB"],
    [104, "-3.5 dB"],
    [105, "-3.3 dB"],
    [106, "-3.1 dB"],
    [107, "-3.0 dB"],
    [108, "-2.8 dB"],
    [109, "-2.7 dB"],
    [110, "-2.5 dB"],
    [111, "-2.3 dB"],
    [112, "-2.2 dB"],
    [113, "-2.0 dB"],
    [114, "-1.9 dB"],
    [115, "-1.7 dB"],
    [116, "-1.6 dB"],
    [117, "-1.4 dB"],
    [118, "-1.3 dB"],
    [119, "-1.1 dB"],
    [120, "-1.0 dB"],
    [121, "-0.8 dB"],
    [122, "-0.7 dB"],
    [123, "-0.6 dB"],
    [124, "-0.4 dB"],
    [125, "-0.3 dB"],
    [126, "-0.1 dB"],
    [127, "0.0 dB"],
]);

/***
 * Synth Octave Shift Values
 * @type {Map<number, string>}
 */
exports.synthOctaveShiftMap = new Map([
    [1, "-1"],
    [2, "0"],
    [3, "1"],
]);

/***
 * Synth Pitch Shift Range
 * @type {Map<number, string>}
 */
exports.synthPitchShiftRangeMap = new Map([
    [0, "±1 semi"], // macos: shift + option + =
    [1, "±2 semi"],
    [2, "±3 semi"],
    [3, "±4 semi"],
    [4, "±5 semi"],
    [5, "±7 semi"],
    [6, "±10 semi"],
    [7, "±12 semi"],
    [8, "+2/-12 semi"],
    [9, "+2/-24 semi"],
]);

/***
 * Synth LFO Wave Types
 * @type {Map<number, string>}
 */
exports.synthLfoWaveMap = new Map([
    [0, "Triangle"],
    [1, "Saw"],
    [2, "Neg Saw"],
    [3, "Square"],
    [4, "S/H"],
]);

/***
 * LFO Rate Values
 * @type {Map<number, string>}
 */
exports.synthLfoRateMap = new Map([
    [0, "0.03 Hz"],
    [1, "0.03 Hz"],
    [2, "0.03 Hz"],
    [3, "0.04 Hz"],
    [4, "0.04 Hz"],
    [5, "0.04 Hz"],
    [6, "0.05 Hz"],
    [7, "0.05 Hz"],
    [8, "0.05 Hz"],
    [9, "0.06 Hz"],
    [10, "0.06 Hz"],
    [11, "0.07 Hz"],
    [12, "0.07 Hz"],
    [13, "0.08 Hz"],
    [14, "0.09 Hz"],
    [15, "0.09 Hz"],
    [16, "0.10 Hz"],
    [17, "0.11 Hz"],
    [18, "0.12 Hz"],
    [19, "0.13 Hz"],
    [20, "0.14 Hz"],
    [21, "0.15 Hz"],
    [22, "0.16 Hz"],
    [23, "0.17 Hz"],
    [24, "0.19 Hz"],
    [25, "0.20 Hz"],
    [26, "0.22 Hz"],
    [27, "0.24 Hz"],
    [28, "0.26 Hz"],
    [29, "0.28 Hz"],
    [30, "0.30 Hz"],
    [31, "0.32 Hz"],
    [32, "0.35 Hz"],
    [33, "0.38 Hz"],
    [34, "0.41 Hz"],
    [35, "0.44 Hz"],
    [36, "0.47 Hz"],
    [37, "0.51 Hz"],
    [38, "0.55 Hz"],
    [39, "0.60 Hz"],
    [40, "0.64 Hz"],
    [41, "0.70 Hz"],
    [42, "0.75 Hz"],
    [43, "0.81 Hz"],
    [44, "0.88 Hz"],
    [45, "0.95 Hz"],
    [46, "1.0 Hz"],
    [47, "1.1 Hz"],
    [48, "1.2 Hz"],
    [49, "1.3 Hz"],
    [50, "1.4 Hz"],
    [51, "1.5 Hz"],
    [52, "1.6 Hz"],
    [53, "1.8 Hz"],
    [54, "1.9 Hz"],
    [55, "2.0 Hz"],
    [56, "2.2 Hz"],
    [57, "2.4 Hz"],
    [58, "2.6 Hz"],
    [59, "2.8 Hz"],
    [60, "3.0 Hz"],
    [61, "3.2 Hz"],
    [62, "3.5 Hz"],
    [63, "3.8 Hz"],
    [64, "4.1 Hz"],
    [65, "4.4 Hz"],
    [66, "4.8 Hz"],
    [67, "5.2 Hz"],
    [68, "5.6 Hz"],
    [69, "6.0 Hz"],
    [70, "6.5 Hz"],
    [71, "7.0 Hz"],
    [72, "7.6 Hz"],
    [73, "8.2 Hz"],
    [74, "8.8 Hz"],
    [75, "9.5 Hz"],
    [76, "10 Hz"],
    [77, "11 Hz"],
    [78, "12 Hz"],
    [79, "13 Hz"],
    [80, "14 Hz"],
    [81, "15 Hz"],
    [82, "16 Hz"],
    [83, "18 Hz"],
    [84, "19 Hz"],
    [85, "21 Hz"],
    [86, "22 Hz"],
    [87, "24 Hz"],
    [88, "26 Hz"],
    [89, "28 Hz"],
    [90, "30 Hz"],
    [91, "33 Hz"],
    [92, "35 Hz"],
    [93, "38 Hz"],
    [94, "41 Hz"],
    [95, "45 Hz"],
    [96, "48 Hz"],
    [97, "52 Hz"],
    [98, "56 Hz"],
    [99, "61 Hz"],
    [100, "65 Hz"],
    [101, "71 Hz"],
    [102, "76 Hz"],
    [103, "82 Hz"],
    [104, "89 Hz"],
    [105, "96 Hz"],
    [106, "104 Hz"],
    [107, "112 Hz"],
    [108, "121 Hz"],
    [109, "131 Hz"],
    [110, "141 Hz"],
    [111, "153 Hz"],
    [112, "165 Hz"],
    [113, "178 Hz"],
    [114, "192 Hz"],
    [115, "208 Hz"],
    [116, "224 Hz"],
    [117, "242 Hz"],
    [118, "262 Hz"],
    [119, "283 Hz"],
    [120, "305 Hz"],
    [121, "330 Hz"],
    [122, "356 Hz"],
    [123, "385 Hz"],
    [124, "415 Hz"],
    [125, "449 Hz"],
    [126, "484 Hz"],
    [127, "523 Hz"],
]);

/***
 * LFO Rate Master Clock Division Values
 * @type {Map<number, string>}
 */
exports.synthLfoRateMasterClockDivisionMap = new Map([
    [0, "4/1"],
    [1, "4/1"],
    [2, "4/1"],
    [3, "4/1"],
    [4, "4/1"],
    [5, "4/1"],
    [6, "4/1"],
    [7, "4/1"],
    [8, "4/1T"],
    [9, "4/1T"],
    [10, "4/1T"],
    [11, "4/1T"],
    [12, "4/1T"],
    [13, "4/1T"],
    [14, "4/1T"],
    [15, "4/1T"],
    [16, "2/1"],
    [17, "2/1"],
    [18, "2/1"],
    [19, "2/1"],
    [20, "2/1"],
    [21, "2/1"],
    [22, "2/1"],
    [23, "2/1T"],
    [24, "2/1T"],
    [25, "2/1T"],
    [26, "2/1T"],
    [27, "2/1T"],
    [28, "2/1T"],
    [29, "2/1T"],
    [30, "2/1T"],
    [31, "1/1"],
    [32, "1/1"],
    [33, "1/1"],
    [34, "1/1"],
    [35, "1/1"],
    [36, "1/1"],
    [37, "1/1"],
    [38, "1/1T"],
    [39, "1/1T"],
    [40, "1/1T"],
    [41, "1/1T"],
    [42, "1/1T"],
    [43, "1/1T"],
    [44, "1/1T"],
    [45, "1/1T"],
    [46, "1/2"],
    [47, "1/2"],
    [48, "1/2"],
    [49, "1/2"],
    [50, "1/2"],
    [51, "1/2"],
    [52, "1/2"],
    [53, "1/2T"],
    [54, "1/2T"],
    [55, "1/2T"],
    [56, "1/2T"],
    [57, "1/2T"],
    [58, "1/2T"],
    [59, "1/2T"],
    [60, "1/2T"],
    [61, "1/4"],
    [62, "1/4"],
    [63, "1/4"],
    [64, "1/4"],
    [65, "1/4"],
    [66, "1/4"],
    [67, "1/4"],
    [68, "1/4T"],
    [69, "1/4T"],
    [70, "1/4T"],
    [71, "1/4T"],
    [72, "1/4T"],
    [73, "1/4T"],
    [74, "1/4T"],
    [75, "1/4T"],
    [76, "1/8"],
    [77, "1/8"],
    [78, "1/8"],
    [79, "1/8"],
    [80, "1/8"],
    [81, "1/8"],
    [82, "1/8"],
    [83, "1/8T"],
    [84, "1/8T"],
    [85, "1/8T"],
    [86, "1/8T"],
    [87, "1/8T"],
    [88, "1/8T"],
    [89, "1/8T"],
    [90, "1/8T"],
    [91, "1/16"],
    [92, "1/16"],
    [93, "1/16"],
    [94, "1/16"],
    [95, "1/16"],
    [96, "1/16"],
    [97, "1/16"],
    [98, "1/16T"],
    [99, "1/16T"],
    [100, "1/16T"],
    [101, "1/16T"],
    [102, "1/16T"],
    [103, "1/16T"],
    [104, "1/16T"],
    [105, "1/16T"],
    [106, "1/32"],
    [107, "1/32"],
    [108, "1/32"],
    [109, "1/32"],
    [110, "1/32"],
    [111, "1/32"],
    [112, "1/32"],
    [113, "1/32T"],
    [114, "1/32T"],
    [115, "1/32T"],
    [116, "1/32T"],
    [117, "1/32T"],
    [118, "1/32T"],
    [119, "1/32T"],
    [120, "1/32T"],
    [121, "1/64"],
    [122, "1/64"],
    [123, "1/64"],
    [124, "1/64"],
    [125, "1/64"],
    [126, "1/64"],
    [127, "1/64"],
]);

/***
 * Synth Envelope Attack Values
 * @type {Map<number, string>}
 */
exports.synthEnvAttackMap = new Map([
    [0, "0.5 ms"],
    [1, "0.6 ms"],
    [2, "0.7 ms"],
    [3, "0.9 ms"],
    [4, "1.1 ms"],
    [5, "1.3 ms"],
    [6, "1.5 ms"],
    [7, "1.8 ms"],
    [8, "2.1 ms"],
    [9, "2.5 ms"],
    [10, "3.0 ms"],
    [11, "3.5 ms"],
    [12, "4.0 ms"],
    [13, "4.7 ms"],
    [14, "5.5 ms"],
    [15, "6.3 ms"],
    [16, "7.3 ms"],
    [17, "8.4 ms"],
    [18, "9.7 ms"],
    [19, "11 ms"],
    [20, "13 ms"],
    [21, "14 ms"],
    [22, "16 ms"],
    [23, "19 ms"],
    [24, "21 ms"],
    [25, "24 ms"],
    [26, "27 ms"],
    [27, "31 ms"],
    [28, "34 ms"],
    [29, "39 ms"],
    [30, "43 ms"],
    [31, "49 ms"],
    [32, "54 ms"],
    [33, "61 ms"],
    [34, "68 ms"],
    [35, "75 ms"],
    [36, "84 ms"],
    [37, "93 ms"],
    [38, "103 ms"],
    [39, "114 ms"],
    [40, "126 ms"],
    [41, "139 ms"],
    [42, "153 ms"],
    [43, "169 ms"],
    [44, "186 ms"],
    [45, "204 ms"],
    [46, "224 ms"],
    [47, "246 ms"],
    [48, "269 ms"],
    [49, "295 ms"],
    [50, "322 ms"],
    [51, "352 ms"],
    [52, "384 ms"],
    [53, "419 ms"],
    [54, "456 ms"],
    [55, "496 ms"],
    [56, "540 ms"],
    [57, "586 ms"],
    [58, "636 ms"],
    [59, "690 ms"],
    [60, "748 ms"],
    [61, "810 ms"],
    [62, "876 ms"],
    [63, "947 ms"],
    [64, "1.02 s"],
    [65, "1.10 s"],
    [66, "1.19 s"],
    [67, "1.28 s"],
    [68, "1.38 s"],
    [69, "1.49 s"],
    [70, "1.60 s"],
    [71, "1.72 s"],
    [72, "1.85 s"],
    [73, "1.99 s"],
    [74, "2.13 s"],
    [75, "2.28 s"],
    [76, "2.45 s"],
    [77, "2.62 s"],
    [78, "2.81 s"],
    [79, "3.00 s"],
    [80, "3.21 s"],
    [81, "3.43 s"],
    [82, "3.66 s"],
    [83, "3.91 s"],
    [84, "4.17 s"],
    [85, "4.45 s"],
    [86, "4.74 s"],
    [87, "5.05 s"],
    [88, "5.37 s"],
    [89, "5.72 s"],
    [90, "6.08 s"],
    [91, "6.47 s"],
    [92, "6.87 s"],
    [93, "7.30 s"],
    [94, "7.75 s"],
    [95, "8.22 s"],
    [96, "8.72 s"],
    [97, "9.25 s"],
    [98, "9.80 s"],
    [99, "10 s"],
    [100, "11 s"],
    [101, "12 s"],
    [102, "12 s"],
    [103, "13 s"],
    [104, "14 s"],
    [105, "15 s"],
    [106, "15 s"],
    [107, "16 s"],
    [108, "17 s"],
    [109, "18 s"],
    [110, "19 s"],
    [111, "20 s"],
    [112, "21 s"],
    [113, "22 s"],
    [114, "24 s"],
    [115, "25 s"],
    [116, "26 s"],
    [117, "27 s"],
    [118, "29 s"],
    [119, "30 s"],
    [120, "32 s"],
    [121, "34 s"],
    [122, "35 s"],
    [123, "37 s"],
    [124, "39 s"],
    [125, "41 s"],
    [126, "43 s"],
    [127, "45 s"],
]);

/***
 * Synth Envelope Decay or Release Values
 * @type {Map<number, string>}
 */
exports.synthEnvDecayOrReleaseMap = new Map([
    [0, "3.0 ms"],
    [1, "3.5 ms"],
    [2, "4.0 ms"],
    [3, "4.6 ms"],
    [4, "5.3 ms"],
    [5, "6.0 ms"],
    [6, "6.9 ms"],
    [7, "7.9 ms"],
    [8, "9.0 ms"],
    [9, "10 ms"],
    [10, "12 ms"],
    [11, "13 ms"],
    [12, "15 ms"],
    [13, "17 ms"],
    [14, "19 ms"],
    [15, "21 ms"],
    [16, "23 ms"],
    [17, "26 ms"],
    [18, "29 ms"],
    [19, "33 ms"],
    [20, "36 ms"],
    [21, "41 ms"],
    [22, "45 ms"],
    [23, "50 ms"],
    [24, "55 ms"],
    [25, "61 ms"],
    [26, "68 ms"],
    [27, "75 ms"],
    [28, "82 ms"],
    [29, "91 ms"],
    [30, "100 ms"],
    [31, "110 ms"],
    [32, "120 ms"],
    [33, "132 ms"],
    [34, "144 ms"],
    [35, "158 ms"],
    [36, "173 ms"],
    [37, "188 ms"],
    [38, "206 ms"],
    [39, "224 ms"],
    [40, "244 ms"],
    [41, "265 ms"],
    [42, "288 ms"],
    [43, "313 ms"],
    [44, "340 ms"],
    [45, "368 ms"],
    [46, "399 ms"],
    [47, "432 ms"],
    [48, "467 ms"],
    [49, "505 ms"],
    [50, "545 ms"],
    [51, "588 ms"],
    [52, "634 ms"],
    [53, "683 ms"],
    [54, "736 ms"],
    [55, "792 ms"],
    [56, "851 ms"],
    [57, "915 ms"],
    [58, "983 ms"],
    [59, "1.05 s"],
    [60, "1.13 s"],
    [61, "1.21 s"],
    [62, "1.30 s"],
    [63, "1.39 s"],
    [64, "1.49 s"],
    [65, "1.59 s"],
    [66, "1.70 s"],
    [67, "1.82 s"],
    [68, "1.94 s"],
    [69, "2.07 s"],
    [70, "2.21 s"],
    [71, "2.36 s"],
    [72, "2.51 s"],
    [73, "2.67 s"],
    [74, "2.85 s"],
    [75, "3.03 s"],
    [76, "3.22 s"],
    [77, "3.42 s"],
    [78, "3.64 s"],
    [79, "3.86 s"],
    [80, "4.10 s"],
    [81, "4.35 s"],
    [82, "4.61 s"],
    [83, "4.89 s"],
    [84, "5.18 s"],
    [85, "5.49 s"],
    [86, "5.81 s"],
    [87, "6.15 s"],
    [88, "6.50 s"],
    [89, "6.88 s"],
    [90, "7.27 s"],
    [91, "7.68 s"],
    [92, "8.11 s"],
    [93, "8.57 s"],
    [94, "9.04 s"],
    [95, "9.54 s"],
    [96, "10 s"],
    [97, "11 s"],
    [98, "11 s"],
    [99, "12 s"],
    [100, "12 s"],
    [101, "13 s"],
    [102, "14 s"],
    [103, "14 s"],
    [104, "15 s"],
    [105, "16 s"],
    [106, "17 s"],
    [107, "18 s"],
    [108, "19 s"],
    [109, "20 s"],
    [110, "20 s"],
    [111, "22 s"],
    [112, "23 s"],
    [113, "24 s"],
    [114, "25 s"],
    [115, "26 s"],
    [116, "27 s"],
    [117, "29 s"],
    [118, "30 s"],
    [119, "31 s"],
    [120, "33 s"],
    [121, "34 s"],
    [122, "36 s"],
    [123, "38 s"],
    [124, "39 s"],
    [125, "41 s"],
    [126, "43 s"],
    [127, "45 s"],
]);


/***
 * Synth Amp Envelope Velocity Values
 * @type {Map<number, string>}
 */
exports.synthAmpEnvelopeVelocityMap = new Map([
    [0, "Off"],
    [1, "1"],
    [2, "2"],
    [3, "3"],
]);

/***
 * Synth Oscillator Types
 * @type {Map<number, string>}
 */
exports.synthOscillatorsTypeMap = new Map([
    [0, "None"],
    [1, "1 Pitch"],
    [2, "2 Shape"],
    [3, "3 Sync"],
    [4, "4 Detune"],
    [5, "5 MixSin"],
    [6, "6 MixTri"],
    [7, "7 MixSaw"],
    [8, "8 MixSqr"],
    [9, "9 MixBell"],
    [10, "10 MixNs1"],
    [11, "11 MixNs2"],
    [12, "12 FM1"],
    [13, "13 FM2"],
    [14, "14 RM"],
]);

/***
 * Synth Filter Types
 * @type {Map<number, string>}
 */
exports.synthFilterTypeMap = new Map([
    [0, "LP12"],
    [1, "LP24"],
    [2, "Mini Moog"],
    [3, "LP+HP"],
    [4, "BP24"],
    [5, "HP24"],
]);

/***
 * Synth Filter Keyboard Tracking Values
 * @type {Map<number, string>}
 */
exports.synthFilterKbTrackMap = new Map([
    [0, "Off"],
    [1, "1/3"],
    [2, "2/3"],
    [3, "1"],
]);

/***
 * Synth Filter Drive Values
 * @type {Map<number, string>}
 */
exports.synthFilterDriveMap = new Map([
    [0, "Off"],
    [1, "1"],
    [2, "2"],
    [3, "3"],
]);

/***
 * Synth Filter Cutoff Frequency Values
 * @type {Map<number, string>}
 */
exports.synthFilterCutoffFrequencyMap = new Map([
    [0, "14 Hz"],
    [1, "15 Hz"],
    [2, "15 Hz"],
    [3, "16 Hz"],
    [4, "17 Hz"],
    [5, "18 Hz"],
    [6, "19 Hz"],
    [7, "21 Hz"],
    [8, "22 Hz"],
    [9, "23 Hz"],
    [10, "24 Hz"],
    [11, "26 Hz"],
    [12, "28 Hz"],
    [13, "29 Hz"],
    [14, "31 Hz"],
    [15, "33 Hz"],
    [16, "35 Hz"],
    [17, "37 Hz"],
    [18, "39 Hz"],
    [19, "41 Hz"],
    [20, "44 Hz"],
    [21, "46 Hz"],
    [22, "49 Hz"],
    [23, "52 Hz"],
    [24, "55 Hz"],
    [25, "58 Hz"],
    [26, "62 Hz"],
    [27, "65 Hz"],
    [28, "69 Hz"],
    [29, "73 Hz"],
    [30, "78 Hz"],
    [31, "82 Hz"],
    [32, "87 Hz"],
    [33, "92 Hz"],
    [34, "98 Hz"],
    [35, "104 Hz"],
    [36, "110 Hz"],
    [37, "117 Hz"],
    [38, "123 Hz"],
    [39, "131 Hz"],
    [40, "139 Hz"],
    [41, "147 Hz"],
    [42, "156 Hz"],
    [43, "165 Hz"],
    [44, "175 Hz"],
    [45, "185 Hz"],
    [46, "196 Hz"],
    [47, "208 Hz"],
    [48, "220 Hz"],
    [49, "233 Hz"],
    [50, "247 Hz"],
    [51, "262 Hz"],
    [52, "277 Hz"],
    [53, "294 Hz"],
    [54, "311 Hz"],
    [55, "330 Hz"],
    [56, "349 Hz"],
    [57, "370 Hz"],
    [58, "392 Hz"],
    [59, "415 Hz"],
    [60, "440 Hz"],
    [61, "466 Hz"],
    [62, "494 Hz"],
    [63, "523 Hz"],
    [64, "554 Hz"],
    [65, "587 Hz"],
    [66, "622 Hz"],
    [67, "659 Hz"],
    [68, "698 Hz"],
    [69, "740 Hz"],
    [70, "784 Hz"],
    [71, "831 Hz"],
    [72, "880 Hz"],
    [73, "932 Hz"],
    [74, "988 Hz"],
    [75, "1.0 kHz"],
    [76, "1.1 kHz"],
    [77, "1.2 kHz"],
    [78, "1.2 kHz"],
    [79, "1.3 kHz"],
    [80, "1.4 kHz"],
    [81, "1.5 kHz"],
    [82, "1.6 kHz"],
    [83, "1.7 kHz"],
    [84, "1.8 kHz"],
    [85, "1.9 kHz"],
    [86, "2.0 kHz"],
    [87, "2.1 kHz"],
    [88, "2.2 kHz"],
    [89, "2.3 kHz"],
    [90, "2.5 kHz"],
    [91, "2.6 kHz"],
    [92, "2.8 kHz"],
    [93, "3.0 kHz"],
    [94, "3.1 kHz"],
    [95, "3.3 kHz"],
    [96, "3.5 kHz"],
    [97, "3.7 kHz"],
    [98, "4.0 kHz"],
    [99, "4.2 kHz"],
    [100, "4.4 kHz"],
    [101, "4.7 kHz"],
    [102, "5.0 kHz"],
    [103, "5.3 kHz"],
    [104, "5.6 kHz"],
    [105, "5.9 kHz"],
    [106, "6.3 kHz"],
    [107, "6.6 kHz"],
    [108, "7.0 kHz"],
    [109, "7.5 kHz"],
    [110, "7.9 kHz"],
    [111, "8.4 kHz"],
    [112, "8.9 kHz"],
    [113, "9.4 kHz"],
    [114, "10 kHz"],
    [115, "11 kHz"],
    [116, "11 kHz"],
    [117, "12 kHz"],
    [118, "13 kHz"],
    [119, "13 kHz"],
    [120, "14 kHz"],
    [121, "15 kHz"],
    [122, "16 kHz"],
    [123, "17 kHz"],
    [124, "18 kHz"],
    [125, "19 kHz"],
    [126, "20 kHz"],
    [127, "21 kHz"],
]);

/***
 * Synth Arpeggiator Range Values
 * @type {Map<number, string>}
 */
exports.arpeggiatorRangeMap = new Map([
    [0, "1 Octave"],
    [1, "2 Octaves"],
    [2, "3 Octaves"],
    [3, "4 Octaves"],
]);

/***
 * Synth Arpeggiator Pattern Values
 * @type {Map<number, string>}
 */
exports.arpeggiatorPatternMap = new Map([
    [0, "Up"],
    [1, "Down"],
    [2, "Up/Down"],
    [3, "Random"],
]);

/***
 * Synth Arpeggiator Master Clock Division Values
 * @type {Map<number, string>}
 */
exports.synthArpMasterClockDivisionMap = new Map([
    [0, "1/2"],
    [1, "1/2"],
    [2, "1/2"],
    [3, "1/2"],
    [4, "1/2"],
    [5, "1/2"],
    [6, "1/2"],
    [7, "1/2"],
    [8, "1/2"],
    [9, "1/2"],
    [10, "1/2"],
    [11, "1/2"],
    [12, "1/2"],
    [13, "1/2"],
    [14, "1/2"],
    [15, "1/2T"],
    [16, "1/2T"],
    [17, "1/2T"],
    [18, "1/2T"],
    [19, "1/2T"],
    [20, "1/2T"],
    [21, "1/2T"],
    [22, "1/2T"],
    [23, "1/2T"],
    [24, "1/2T"],
    [25, "1/2T"],
    [26, "1/2T"],
    [27, "1/2T"],
    [28, "1/2T"],
    [29, "1/4"],
    [30, "1/4"],
    [31, "1/4"],
    [32, "1/4"],
    [33, "1/4"],
    [34, "1/4"],
    [35, "1/4"],
    [36, "1/4"],
    [37, "1/4"],
    [38, "1/4"],
    [39, "1/4"],
    [40, "1/4"],
    [41, "1/4"],
    [42, "1/4"],
    [43, "1/4T"],
    [44, "1/4T"],
    [45, "1/4T"],
    [46, "1/4T"],
    [47, "1/4T"],
    [48, "1/4T"],
    [49, "1/4T"],
    [50, "1/4T"],
    [51, "1/4T"],
    [52, "1/4T"],
    [53, "1/4T"],
    [54, "1/4T"],
    [55, "1/4T"],
    [56, "1/4T"],
    [57, "1/8"],
    [58, "1/8"],
    [59, "1/8"],
    [60, "1/8"],
    [61, "1/8"],
    [62, "1/8"],
    [63, "1/8"],
    [64, "1/8"],
    [65, "1/8"],
    [66, "1/8"],
    [67, "1/8"],
    [68, "1/8"],
    [69, "1/8"],
    [70, "1/8"],
    [71, "1/8"],
    [72, "1/8T"],
    [73, "1/8T"],
    [74, "1/8T"],
    [75, "1/8T"],
    [76, "1/8T"],
    [77, "1/8T"],
    [78, "1/8T"],
    [79, "1/8T"],
    [80, "1/8T"],
    [81, "1/8T"],
    [82, "1/8T"],
    [83, "1/8T"],
    [84, "1/8T"],
    [85, "1/8T"],
    [86, "1/16"],
    [87, "1/16"],
    [88, "1/16"],
    [89, "1/16"],
    [90, "1/16"],
    [91, "1/16"],
    [92, "1/16"],
    [93, "1/16"],
    [94, "1/16"],
    [95, "1/16"],
    [96, "1/16"],
    [97, "1/16"],
    [98, "1/16"],
    [99, "1/16"],
    [100, "1/16T"],
    [101, "1/16T"],
    [102, "1/16T"],
    [103, "1/16T"],
    [104, "1/16T"],
    [105, "1/16T"],
    [106, "1/16T"],
    [107, "1/16T"],
    [108, "1/16T"],
    [109, "1/16T"],
    [110, "1/16T"],
    [111, "1/16T"],
    [112, "1/16T"],
    [113, "1/16T"],
    [114, "1/32"],
    [115, "1/32"],
    [116, "1/32"],
    [117, "1/32"],
    [118, "1/32"],
    [119, "1/32"],
    [120, "1/32"],
    [121, "1/32"],
    [122, "1/32"],
    [123, "1/32"],
    [124, "1/32"],
    [125, "1/32"],
    [126, "1/32"],
    [127, "1/32"],
]);

/***
 * Synth Arpeggiator Rate Values
 * @type {Map<number, string>}
 */
exports.synthArpRateMap = new Map([
    [0, "16 bpm"],
    [1, "16 bpm"],
    [2, "18 bpm"],
    [3, "20 bpm"],
    [4, "24 bpm"],
    [5, "26 bpm"],
    [6, "28 bpm"],
    [7, "30 bpm"],
    [8, "34 bpm"],
    [9, "36 bpm"],
    [10, "38 bpm"],
    [11, "42 bpm"],
    [12, "44 bpm"],
    [13, "46 bpm"],
    [14, "48 bpm"],
    [15, "50 bpm"],
    [16, "54 bpm"],
    [17, "56 bpm"],
    [18, "58 bpm"],
    [19, "60 bpm"],
    [20, "62 bpm"],
    [21, "64 bpm"],
    [22, "66 bpm"],
    [23, "68 bpm"],
    [24, "70 bpm"],
    [25, "72 bpm"],
    [26, "74 bpm"],
    [27, "76 bpm"],
    [28, "78 bpm"],
    [29, "78 bpm"],
    [30, "80 bpm"],
    [31, "82 bpm"],
    [32, "84 bpm"],
    [33, "86 bpm"],
    [34, "86 bpm"],
    [35, "88 bpm"],
    [36, "90 bpm"],
    [37, "92 bpm"],
    [38, "94 bpm"],
    [39, "94 bpm"],
    [40, "96 bpm"],
    [41, "98 bpm"],
    [42, "100 bpm"],
    [43, "100 bpm"],
    [44, "102 bpm"],
    [45, "104 bpm"],
    [46, "106 bpm"],
    [47, "108 bpm"],
    [48, "108 bpm"],
    [49, "110 bpm"],
    [50, "112 bpm"],
    [51, "114 bpm"],
    [52, "116 bpm"],
    [53, "118 bpm"],
    [54, "120 bpm"],
    [55, "122 bpm"],
    [56, "124 bpm"],
    [57, "126 bpm"],
    [58, "128 bpm"],
    [59, "130 bpm"],
    [60, "132 bpm"],
    [61, "134 bpm"],
    [62, "138 bpm"],
    [63, "140 bpm"],
    [64, "142 bpm"],
    [65, "146 bpm"],
    [66, "148 bpm"],
    [67, "152 bpm"],
    [68, "154 bpm"],
    [69, "158 bpm"],
    [70, "162 bpm"],
    [71, "166 bpm"],
    [72, "170 bpm"],
    [73, "174 bpm"],
    [74, "178 bpm"],
    [75, "182 bpm"],
    [76, "186 bpm"],
    [77, "190 bpm"],
    [78, "196 bpm"],
    [79, "200 bpm"],
    [80, "204 bpm"],
    [81, "210 bpm"],
    [82, "216 bpm"],
    [83, "220 bpm"],
    [84, "226 bpm"],
    [85, "232 bpm"],
    [86, "238 bpm"],
    [87, "244 bpm"],
    [88, "252 bpm"],
    [89, "258 bpm"],
    [90, "266 bpm"],
    [91, "274 bpm"],
    [92, "282 bpm"],
    [93, "290 bpm"],
    [94, "298 bpm"],
    [95, "308 bpm"],
    [96, "318 bpm"],
    [97, "328 bpm"],
    [98, "338 bpm"],
    [99, "350 bpm"],
    [100, "362 bpm"],
    [101, "376 bpm"],
    [102, "392 bpm"],
    [103, "410 bpm"],
    [104, "428 bpm"],
    [105, "450 bpm"],
    [106, "472 bpm"],
    [107, "494 bpm"],
    [108, "520 bpm"],
    [109, "546 bpm"],
    [110, "574 bpm"],
    [111, "602 bpm"],
    [112, "632 bpm"],
    [113, "662 bpm"],
    [114, "696 bpm"],
    [115, "728 bpm"],
    [116, "762 bpm"],
    [117, "798 bpm"],
    [118, "834 bpm"],
    [119, "872 bpm"],
    [120, "910 bpm"],
    [121, "950 bpm"],
    [122, "990 bpm"],
    [123, "Fast 1"],
    [124, "Fast 2"],
    [125, "Fast 3"],
    [126, "Fast 4"],
    [127, "Fast 5"],
]);

/***
 * Rotary Speaker Speed Values
 * @type {Map<number, string>}
 */
exports.rotarySpeakerSpeedMap = new Map([
    [0x00, "Slow/Stop"],
    [0x01, "Fast"],
]);

/***
 * Effect 1 Types
 * @type {Map<number, string>}
 */
exports.effect1TypeMap = new Map([
    [0, "Panning"],
    [1, "Tremolo"],
    [2, "Ring Mod"],
    [3, "Wah-Wah"],
    [4, "Auto-Wah 1"],
    [5, "Auto-Wah 2"],
]);

/***
 * Effect 1 Master Clock Division Values
 * @type {Map<number, string>}
 */
exports.effect1MasterClockDivisionMap = new Map([
    [0, "4/1"],
    [1, "4/1"],
    [2, "4/1"],
    [3, "4/1"],
    [4, "4/1"],
    [5, "4/1"],
    [6, "4/1"],
    [7, "4/1"],
    [8, "4/1"],
    [9, "4/1T"],
    [10, "4/1T"],
    [11, "4/1T"],
    [12, "4/1T"],
    [13, "4/1T"],
    [14, "4/1T"],
    [15, "4/1T"],
    [16, "4/1T"],
    [17, "4/1T"],
    [18, "2/1"],
    [19, "2/1"],
    [20, "2/1"],
    [21, "2/1"],
    [22, "2/1"],
    [23, "2/1"],
    [24, "2/1"],
    [25, "2/1"],
    [26, "2/1T"],
    [27, "2/1T"],
    [28, "2/1T"],
    [29, "2/1T"],
    [30, "2/1T"],
    [31, "2/1T"],
    [32, "2/1T"],
    [33, "2/1T"],
    [34, "2/1T"],
    [35, "1/1"],
    [36, "1/1"],
    [37, "1/1"],
    [38, "1/1"],
    [39, "1/1"],
    [40, "1/1"],
    [41, "1/1"],
    [42, "1/1"],
    [43, "1/1T"],
    [44, "1/1T"],
    [45, "1/1T"],
    [46, "1/1T"],
    [47, "1/1T"],
    [48, "1/1T"],
    [49, "1/1T"],
    [50, "1/1T"],
    [51, "1/1T"],
    [52, "1/2"],
    [53, "1/2"],
    [54, "1/2"],
    [55, "1/2"],
    [56, "1/2"],
    [57, "1/2"],
    [58, "1/2"],
    [59, "1/2"],
    [60, "1/2T"],
    [61, "1/2T"],
    [62, "1/2T"],
    [63, "1/2T"],
    [64, "1/2T"],
    [65, "1/2T"],
    [66, "1/2T"],
    [67, "1/2T"],
    [68, "1/2T"],
    [69, "1/4"],
    [70, "1/4"],
    [71, "1/4"],
    [72, "1/4"],
    [73, "1/4"],
    [74, "1/4"],
    [75, "1/4"],
    [76, "1/4"],
    [77, "1/4T"],
    [78, "1/4T"],
    [79, "1/4T"],
    [80, "1/4T"],
    [81, "1/4T"],
    [82, "1/4T"],
    [83, "1/4T"],
    [84, "1/4T"],
    [85, "1/4T"],
    [86, "1/8"],
    [87, "1/8"],
    [88, "1/8"],
    [89, "1/8"],
    [90, "1/8"],
    [91, "1/8"],
    [92, "1/8"],
    [93, "1/8"],
    [94, "1/8T"],
    [95, "1/8T"],
    [96, "1/8T"],
    [97, "1/8T"],
    [98, "1/8T"],
    [99, "1/8T"],
    [100, "1/8T"],
    [101, "1/8T"],
    [102, "1/8T"],
    [103, "1/16"],
    [104, "1/16"],
    [105, "1/16"],
    [106, "1/16"],
    [107, "1/16"],
    [108, "1/16"],
    [109, "1/16"],
    [110, "1/16"],
    [111, "1/16T"],
    [112, "1/16T"],
    [113, "1/16T"],
    [114, "1/16T"],
    [115, "1/16T"],
    [116, "1/16T"],
    [117, "1/16T"],
    [118, "1/16T"],
    [119, "1/16T"],
    [120, "1/32"],
    [121, "1/32"],
    [122, "1/32"],
    [123, "1/32"],
    [124, "1/32"],
    [125, "1/32"],
    [126, "1/32"],
    [127, "1/32"],
]);

/***
 * Effect 2 Types
 * @type {Map<number, string>}
 */
exports.effect2TypeMap = new Map([
    [0, "Phaser 1"],
    [1, "Phaser 2"],
    [2, "Flanger"],
    [3, "Vibe"],
    [4, "Chorus 1"],
    [5, "Chorus 2"],
]);

/***
 * Extern Control Types
 * @type {Map<number, string>}
 */
exports.externControlMap = new Map([
    [0, "Midi CC"],
    [1, "Program"],
    [2, "Volume"],
]);
