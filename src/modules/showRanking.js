const showRanking = (() => {
  async function getAllScores() {
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/WxgWXnTlpUEBzwAvQ8FQ/scores/';
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  }
  return {
    getAllScores,
  };
})();

module.exports = showRanking;