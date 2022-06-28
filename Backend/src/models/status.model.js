const connection = require('./connection');

const getAll = async () => {
  const [resp] = await connection.execute('SELECT * FROM Task_Status');
  return resp;
};

module.exports = {
  getAll,
};
