import axios from 'axios';

const URL = 'http://localhost:3000';

export const getTasks = async () => {
  const resp = await axios.get(`${URL}/getTasks`);
  return resp;
};

export const getStatus = async () => {
  const resp = await axios.get(`${URL}/getStatus`);
  return resp;
};

export const createTask = async (name, message) => {
  const body = {
    name,
    message,
  };
  const resp = await axios.post(`${URL}/createTask`, body);
  return resp;
};

export const editTask = async (id, name, message) => {
  const body = {
    name,
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
  const resp = await axios.delete(`${URL}/deleteTask/${id}`);
  return resp;
};
