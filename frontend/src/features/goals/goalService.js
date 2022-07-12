import axios from "axios";
const API_URL = "/api/goals/";
//create new Goal

const createUserGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, goalData, config);
  return response.data;
};
//get user goals
const getUserGoal = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};
const updateUserGoal = async (goalId, updateData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(API_URL + goalId, updateData, config);
  return response.data;
};

// Delete user goal
const deleteUserGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + goalId, config);

  return response.data;
};
const goalService = {
  createUserGoal,
  getUserGoal,
  deleteUserGoal,
  updateUserGoal,
};
export default goalService;
