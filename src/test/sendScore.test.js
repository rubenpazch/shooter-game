import sendScore from '../modules/sendScore';

it('expect post name score return a promise', () => {
  sendScore.postNameScore('Ruben', 10)
    .then((response) => {
      expect(response).resolves.toBe('Leaderboard score created correctly.');
    });
});
