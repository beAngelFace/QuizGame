const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
const indexRouter = require("./routes/index.routes");
app.use("/api", indexRouter);

app.listen(port, () => {
  console.log(`listen port ${port}`);
});