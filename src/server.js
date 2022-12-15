const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const DB = process.env.DATABASE_ATLAS;

// const DB_CONNECTION = async () => {
//   try {
//      mongoose.connect(DB);
//     console.log('Connection to DB successful!');
//   } catch (err) {
//     console.log('Connection to DB failed!');
//   }
// };

mongoose
  .connect(process.env.DATABASE_ATLAS)
  .then(() => console.log('Connection to DB successful'))
  .catch((err) => console.log('Connection to DB failed', err));

// DB_CONNECTION();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
