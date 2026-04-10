import { delay } from "./utils/delay.js";
import { fetchUserProfiles } from "./utils/fetchUserProfiles.js";

// console.log('Початок');
// await delay({ ms: 5000 });
// console.log('Готово');

const data = await fetchUserProfiles({ userIds: ['1', '2', '3'] })
console.log(data);
