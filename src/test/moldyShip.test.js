import Entity from '../objects/Entities';
import MoldyShip from '../objects/MoldyShip';
import SceneMain from '../scenes/SceneMain';

jest.mock('../objects/Entities');
jest.mock('../scenes/SceneMain');

beforeEach(() => {
  Entity.mockClear();
  SceneMain.mockClear();
});

it('We can check if the consumer called the class constructor', () => {
  const scene = new SceneMain();
  // eslint-disable-next-line no-unused-vars
  const moldyShip = new MoldyShip(scene, 100, 100);
  expect(Entity).toHaveBeenCalledTimes(1);
});