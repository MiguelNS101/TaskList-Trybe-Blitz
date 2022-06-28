const connection = require('./connection');

const getAll = async () => {
  const [resp] = await connection.execute('SELECT * FROM Tasks');
  return resp;
};

const getAllStatus = async () => {
  const [resp] = await connection.execute(
    `
      SELECT T.task_id, T.task_name, T.task_message, T.task_date, s.status_name
      FROM Tasks AS T
      INNER JOIN Task_Status AS s 
      ON s.status_id = T.task_status_id
      ORDER BY task_id;`,
  );
  return resp;
};

const findById = async (taskId) => {
  const query = 'SELECT * FROM Tasks WHERE task_id=?';

  const [resp] = await connection.execute(query, [taskId]);
  return resp;
};

const createTask = async (taskName, taskMessage) => {
  const query = `
    INSERT INTO Tasks (task_name, task_message) VALUES (?, ?)
    `;

  await connection.execute(query, [taskName, taskMessage]);
};

const editTask = async (taskId, taskName, taskMessage) => {
  const query = `
    UPDATE Tasks SET task_name=?, task_message=? WHERE task_id=?
    `;

  await connection.execute(query, [taskName, taskMessage, taskId]);
};

const editStatus = async (statusId, taskId) => {
  const query = `
    UPDATE Tasks SET task_status_id=? WHERE task_id=?
      `;

  await connection.execute(query, [statusId, taskId]);
};

const deleteTask = async (taskId) => {
  const query = `
  DELETE FROM Tasks WHERE task_id=?
    `;

  await connection.execute(query, [taskId]);
};

module.exports = {
  getAll,
  getAllStatus,
  findById,
  createTask,
  editTask,
  editStatus,
  deleteTask,
};
