import { projectModule } from './sum';

test('sumar 1 + 2 es igual a 3', () => {
  expect(projectModule.suma(1, 2)).toBe(3);
});