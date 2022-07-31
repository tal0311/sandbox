// const state = {
//   filterBY: {
//     byTag: []
//   }
// };

// filter(state);
// function filter({ filterBY }) {
//   const { byTags } = filterBY;
//   if (byTags && byTags.length) {
//     console.log("byTag", byTags);
//     filteredGigs = filteredGigs.filter((gig) =>
//       byTags.filter((tag, idx) => {
//         console.log("tag", tag, "idx", idx);
//         console.log("gig.tags", gig.tags);
//         return gig.tags.includes(tag);
//       })
//     );
//   }
// }

const nums = [1, 1, 1, 2, 2, 2, 3, 3, 4, 8];
const newNums = new Set([...nums]);
console.log(newNums);
