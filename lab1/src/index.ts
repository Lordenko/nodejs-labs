import { delay } from "./utils/delay.js";
import { fetchUserProfiles } from "./utils/fetchUserProfiles.js";
import { processInBatches, processor } from "./utils/processInBatches.js";
import { exampleOperation, retryOperation } from "./utils/retryOperation.js";

// console.log('Початок');
// await delay({ ms: 5000 });
// console.log('Готово');

// const data = await fetchUserProfiles({ userIds: ['1', '2', '3'] })
// console.log(data);

// const result = await retryOperation({ operation: exampleOperation })
// console.log(result);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const results = await processInBatches({ batchSize: 3, items: numbers, processor })
console.log(results);
