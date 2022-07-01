import axios from 'axios';

const URL = 'http://localhost:3000';

export const getTasks = async () => {
  const resp = await axios.get(`${URL}/getTasks`);
  return resp;
};

export const createTask = async (title, message) => {
  const body = {
    title,
    message,
  };
  const resp = await axios.post(`${URL}/createTask`, body);
  return resp;
};

export const editTask = async (id, title, message) => {
  const body = {
    title,
    message,
  };
  const resp = await axios.put(`${URL}/updateTask/${id}`, body);
  return resp;
};

export const editStatus = async (id, status) => {
  const body = {
    status,
  };
  const resp = await axios.put(`${URL}/updateStatus/${id}`, body);
  return resp;
};

export const deleteTask = async (id) => {
  const resp = await axios.destroy(`${URL}/deleteTask/${id}`);
  return resp;
};
