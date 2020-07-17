const sendScore = (() => {
  async function postNameScore(name, scoreResult) {
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/WxgWXnTlpUEBzwAvQ8FQ/scores/';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: name,
        score: scoreResult,
      }),
    });
    const data = await response.json();
    return data;
  }
  return {
    postNameScore,
  };
})();

module.exports = sendScore;