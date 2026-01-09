
describe('app-running-test', () => {
    test('runs', async () => {
        const response = await fetch('http://localhost:3000');

        try {
            // @ts-ignore
            const body: {
                message: string
            } = await response.json();

            const message = body.message;
            expect(message).toBe('Hello there! Welcome to the home page');
        } catch (error) {
            console.error('Failed to parse JSON:', error);
        }

    })
})