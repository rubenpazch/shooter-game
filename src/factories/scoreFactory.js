const scoreFactory = (score = null) => {
  const setScore = pScore => {
    score = pScore;
  };
  const getScore = () => score;

  return { setScore, getScore };
};

export default scoreFactory;