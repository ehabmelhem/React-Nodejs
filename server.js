const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(express.static("app/build"));
app.get("/check-server", (req, res) => {
  res.send({ messege: "this is from server" });
});
const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("listen on port: ", port);
});
