import axios from "axios";

export const BASE_URL = "http://localhost:5000";

export const getJobs = async (limit, skip, q) => {
  const response = await axios.get(
    `${BASE_URL}/api/jobs?limit=${limit}&skip=${skip}&q=${q}`
  );
  return response.data;
};

export const getJob = async (_id) => {
  const response = await axios.get(`${BASE_URL}/api/jobs/${_id}`);
  return response.data;
};
