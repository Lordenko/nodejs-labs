import { delay } from "./utils/delay.js";
import { fetchUserProfiles } from "./utils/fetchUserProfiles.js";
import { processInBatches, processor } from "./utils/processInBatches.js";
import { fastOperation, raceWithTimeout, slowOperation } from "./utils/raceWithTimeout.js";
import { exampleOperation, retryOperation } from "./utils/retryOperation.js";

const main = async (): Promise<void> => {
    console.log('=== Тест 1: Паралельне завантаження ===');
    console.time('fetchUserProfiles');
    const profiles = await fetchUserProfiles({ userIds: ['1', '2', '3', '4', '5'] });
    console.timeEnd('fetchUserProfiles');
    console.log(`Завантажено ${profiles.length} профілів`)

    console.log('\n=== Тест 2: Retry механізм ===');
    const result = await retryOperation({ operation: exampleOperation })
    console.log(result);

    console.log('\n=== Тест 3: Batch обробка ===');
    const items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const processed = await processInBatches({ batchSize: 3, items, processor })
    console.log('Оброблено:', processed)

    console.log('\n=== Тест 4: Timeout ===');
    const result1 = await raceWithTimeout({ promise: fastOperation, timeoutMs: 100 })
        .catch((err) => err.messaage)
    console.log(result1);
    const result2 = await raceWithTimeout({ promise: slowOperation, timeoutMs: 100 })
        .catch((err) => err.message)
    console.log(result2);
}

await main()