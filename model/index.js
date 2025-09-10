const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/users_db')
  .then(() => console.log('DB Connection OK'))
  .catch((error) => console.log(error));
