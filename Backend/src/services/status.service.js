const Status = require('../models/status.model');

const getAll = async () => {
  const data = await Status.getAll();
  return data;
};

module.exports = {
  getAll,
};
