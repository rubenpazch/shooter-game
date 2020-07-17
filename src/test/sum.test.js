import { projectModule } from './sum';

test('sumar 1 + 2 es igual a 3', () => {
  expect(projectModule.suma(1, 2)).toBe(3);
});

test('resta 1 - 2 es igual a -1', () => {
  expect(projectModule.resta(1, 2)).toBe(-1);
});