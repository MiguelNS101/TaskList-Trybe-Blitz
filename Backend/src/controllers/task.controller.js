const Task = require('../services/task.service');

const getTasks = async (_req, res) => {
  const data = await Task.getAll();
  return res.status(200).json(data);
};

const createTask = async (req, res) => {
  const { name, message } = req.body;
  const data = await Task.createTask(name, message);
  return res.status(201).json(data);
};

const editTask = async (req, res) => {
  const { name, message } = req.body;
  const { id } = req.params;
  const data = await Task.update(id, name, message);
  if (data === false) return res.status(404).json({ message: 'Task not found' });
  return res.status(200).json(data);
};

const editStatus = async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  const data = await Task.updateStatus(id, status);
  if (data === false) return res.status(404).json({ message: 'Task not found' });
  return res.status(200).json(data);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const data = await Task.deleteById(id);
  if (data === false) return res.status(404).json({ message: 'Task not found' });
  return res.status(204).json();
};

module.exports = {
  getTasks,
  createTask,
  editTask,
  editStatus,
  deleteTask,
};
