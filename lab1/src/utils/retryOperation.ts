import { delay } from "./delay.js";

interface RetryOperationParams {
    operation: () => Promise<unknown>,
    maxRetries?: number
}

let attempts = 0;
export const exampleOperation = async (): Promise<string> => {
    attempts++;
    if (attempts < 3) {
        throw new Error('Тимчасова помилка');
    }
    return 'Успіх!';
};

export const retryOperation = async (params: RetryOperationParams): Promise<unknown> => {
    const { operation, maxRetries = 3 } = params
    let lastError: unknown

    for (let i = 1; maxRetries >= i; i++) {
        console.log(`Спроба #${i}`);

        try {
            return await operation()
        } catch (err) {
            lastError = err
            if (i < maxRetries) {
                await delay({ ms: 100 })
            }
        }
    }

    return lastError
}