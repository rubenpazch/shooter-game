export const projectModule = (() => {
  const suma = (a, b) => a + b;
  const resta = (a, b) => a - b;

  return {
    suma,
    resta,
  };
})();

export default projectModule;