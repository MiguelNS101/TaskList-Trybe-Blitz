const Status = require('../services/status.service');

const getStatus = async (_req, res) => {
  const data = await Status.getAll();
  return res.status(200).json(data);
};

module.exports = {
  getStatus,
};
