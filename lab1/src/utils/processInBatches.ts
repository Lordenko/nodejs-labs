import { delay } from "./delay.js";

interface ProcessInBatchesParams {
    items: number[],
    batchSize: number,
    processor: (params: ProcessorParams) => Promise<number[]>
}

interface ProcessorParams {
    batch: number[]
}

export const processor = async (params: ProcessorParams): Promise<number[]> => {
    const { batch } = params

    await delay({ ms: 500 });
    return batch.map(n => n * 2);
};

export const processInBatches = async (params: ProcessInBatchesParams) => {
    const { batchSize, items, processor } = params

    const totalBatchs: number = Math.ceil(items.length / batchSize)
    const result: number[] = []
    for (let i = 1; i <= totalBatchs; i++) {
        console.log(`Обробка партії ${i}/${totalBatchs}...`)
        const batch = items.slice(i, i + batchSize)
        const resultBatch = await processor({ batch })
        result.push(...resultBatch)
    }

    return result
}   