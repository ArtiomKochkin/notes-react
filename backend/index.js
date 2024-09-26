const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');

const dbRouter = require("./src/db");
const authRouter = require("./src/auth");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use('/api', dbRouter);
app.use('/api/auth', authRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});