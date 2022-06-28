const app = require('./app');
require('dotenv').config();

app.listen(process.env.PORT, () => {
  console.log(`funcionando na porta ${process.env.PORT}`);
});
