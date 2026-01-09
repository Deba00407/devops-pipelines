type EncodingMethod = 'base64' | 'hex' | 'caesar' | 'reverse';

function encodeString(input: string, method: EncodingMethod = 'base64', shift: number = 3): string {
    switch (method) {
        case 'base64':
            return btoa(input);

        case 'hex':
            return Array.from(input)
                .map(char => char.charCodeAt(0).toString(16).padStart(2, '0'))
                .join('');

        case 'caesar':
            return input
                .split('')
                .map(char => {
                    if (char.match(/[a-z]/i)) {
                        const code = char.charCodeAt(0);
                        const isUpperCase = code >= 65 && code <= 90;
                        const base = isUpperCase ? 65 : 97;
                        return String.fromCharCode(((code - base + shift) % 26) + base);
                    }
                    return char;
                })
                .join('');

        case 'reverse':
            return input.split('').reverse().join('');

        default:
            return input;
    }
}

function encoder(input: string, method: EncodingMethod = 'base64', shift: number = 3): string {
    return encodeString(input, method, shift);
}

function decodeString(encoded: string): string {
    return atob(encoded);
}

export {
    encoder, decodeString
};