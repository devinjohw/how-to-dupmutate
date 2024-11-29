import { produce } from "immer";

const hobbies = {
  programming: true,
  drawing: false,
  singing: true,
}

// ✅ Better, Intuitive
console.log(produce(hobbies, draft => {
  Object.keys(draft).forEach(key => draft[key] = true)
}));

console.log(hobbies);
