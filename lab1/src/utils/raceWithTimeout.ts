import { delay } from "./delay.js";

interface RaceWithTimeoutParams {
    promise: () => Promise<unknown>,
    timeoutMs: number
}

export const fastOperation = async (): Promise<string> => delay({ ms: 50 }).then(() => 'Готово');
export const slowOperation = async (): Promise<string> => delay({ ms: 200 }).then(() => 'Готово');

export const raceWithTimeout = async (params: RaceWithTimeoutParams): Promise<unknown> => {
    const { promise, timeoutMs } = params

    const timeOutPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error(`Operation timed out after ${timeoutMs}ms`))
        }, timeoutMs)
    })

    return Promise.race([promise(), timeOutPromise])
}