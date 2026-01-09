import {decodeString, encoder} from "../src/encoder.ts";

describe('encoder', () => {
    test('encodes', () => {
        const encodedString = encoder("Hello World!");
        expect(encodedString).toBe("SGVsbG8gV29ybGQh");
    })

    test('decodes', () => {
        const decodedString = decodeString("SGVsbG8gV29ybGQh");
        expect(decodedString).toBe("Hello World!");
    })
})