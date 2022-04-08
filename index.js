const express = require("express");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(routes);

const port = 8000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
