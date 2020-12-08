module.exports = function Hydrogen(string) {
  if (typeof string !== "string") throw new TypeError("Hydrogen wants a string!");
  return string.replace(/\s/g, "");
};