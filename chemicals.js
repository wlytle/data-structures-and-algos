// A laboratory is testing how atoms react in ionic state during nuclear fusion. They introduce different elements with Hydrogen in high temperature and pressurized chamber. Due to unknown reason the chamber lost its power and the elements in it started precipitating
// Given the number of atoms of Carbon [C],Hydrogen[H] and Oxygen[O] in the chamber. Calculate how many molecules of Water [H2O], Carbon Dioxide [CO2] and Methane [CH4] will be produced following the order of reaction affinity below

function burner(c, h, o) {
  const hydPairs = Math.floor(h / 2);
  const water = Math.min(hydPairs, o);
  o -= water;
  h -= 2 * water;
  const oPairs = Math.floor(o / 2);
  const co2 = Math.min(oPairs, c);
  o -= co2 * 2;
  c -= co2;
  const hQuad = Math.floor(h / 4);
  const methane = Math.min(hQuad, c);

  return [water, co2, methane];
}

console.log(burner(45, 11, 100));
console.log(burner(0, 0, 354));
console.log(burner(1, 346, 0));
console.log(burner(215, 41, 82100));
console.log(burner(113, 0, 52));

// const { assert } = require("chai");

// describe("Fixed tests", () => {
//   it("burner(45, 11, 100)", () =>
//     assert.deepStrictEqual(burner(45, 11, 100), [5, 45, 0]));
//   it("burner(354, 1023230, 0)", () =>
//     assert.deepStrictEqual(burner(354, 1023230, 0), [0, 0, 354]));
//   it("burner(939, 3, 694)", () =>
//     assert.deepStrictEqual(burner(939, 3, 694), [1, 346, 0]));
//   it("burner(215, 41, 82100)", () =>
//     assert.deepStrictEqual(burner(215, 41, 82100), [20, 215, 0]));
//   it("burner(113, 0, 52)", () =>
//     assert.deepStrictEqual(burner(113, 0, 52), [0, 26, 0]));
// });
