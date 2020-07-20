import showRanking from '../modules/showRanking';

test('expect get all score return a promise', () => {
  showRanking.getAllScores()
    .then((response) => {
      expect(response).resolves.toBe('return a promise');
    });
});
