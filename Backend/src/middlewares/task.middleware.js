const validateName = async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"title" is required' });
  }
  return next();
};

const validateMessage = async (req, res, next) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ message: '"message" is required' });
  }
  return next();
};

const validateNameLenght = async (req, res, next) => {
  const { name } = req.body;
  if (name.length <= 5) {
    return res.status(422).json({
      message: '"title" length must be at least 5 characters long',
    });
  }
  return next();
};

const validateMessageLenght = async (req, res, next) => {
  const { message } = req.body;
  if (message.length <= 0) {
    return res.status(422).json({
      message: '"message" must be at least 1 characters long',
    });
  }
  return next();
};

module.exports = {
  validateName,
  validateMessage,
  validateNameLenght,
  validateMessageLenght,
};
