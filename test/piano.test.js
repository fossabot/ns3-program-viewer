// this file is auto-generated with builder.js

const {getNs3TestCase} = require("./helpers");


const root = __dirname + "/Piano/";

describe("/Piano", () => {
    test("panelA.piano.enabled eq false", async () => {
        const file = "panelA.piano.enabled eq false.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.enabled eq true", async () => {
        const file = "panelA.piano.enabled eq true.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelB.piano.enabled eq false", async () => {
        const file = "panelB.piano.enabled eq false.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelB.piano.enabled eq true", async () => {
        const file = "panelB.piano.enabled eq true.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});
