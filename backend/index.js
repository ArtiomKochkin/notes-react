const express = require("express");
const cors = require("cors");

const dbRouter = require("./src/db");

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }))
app.use('/api', dbRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});