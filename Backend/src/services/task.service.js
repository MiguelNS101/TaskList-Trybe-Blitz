const Task = require('../models/task.model');

const getAll = async () => {
  const data = await Task.getAllStatus();
  return data;
};

const createTask = async (name, message) => {
  const data = await Task.createTask(name, message);
  return data;
};

const update = async (id, name, message) => {
  const find = await Task.findById();
  if (find !== undefined) {
    await Task.editTask(id, name, message);
    return true;
  }
  return false;
};

const updateStatus = async (id, status) => {
  const find = await Task.findById();
  if (find !== undefined) {
    await Task.editStatus(id, status);
    return true;
  }
  return false;
};

const deleteById = async (id) => {
  const find = await Task.findById(id);
  if (find !== undefined) {
    await Task.deleteTask(id);
    return true;
  }
  return false;
};
module.exports = {
  getAll,
  createTask,
  update,
  updateStatus,
  deleteById,
};
