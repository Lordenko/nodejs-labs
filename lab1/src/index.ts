import { delay } from "./utils/delay.js";
import { fetchUserProfiles } from "./utils/fetchUserProfiles.js";
import { exampleOperation, retryOperation } from "./utils/retryOperation.js";

// console.log('Початок');
// await delay({ ms: 5000 });
// console.log('Готово');

// const data = await fetchUserProfiles({ userIds: ['1', '2', '3'] })
// console.log(data);

const result = await retryOperation({ operation: exampleOperation })
console.log(result);
