const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

let apiScores;

export const addGame = async () => {
  const data = { name: 'David lyangenda' };
  const result = await fetch(`${baseURL}/games/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  await result.json();
};

export const getScores = async () => {
  const result = await fetch(`${baseURL}/games/4boN7Tt9TTqKP3HPBeU1/scores`);
  apiScores = await result.json();
  return apiScores;
};

export const addScore = async (user, score) => {
  const data = { user, score };
  const result = await fetch(`${baseURL}/games/4boN7Tt9TTqKP3HPBeU1/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return result.json();
};
