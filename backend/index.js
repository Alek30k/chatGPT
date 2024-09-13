import express from "express";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.listen(port, () => {
  connect();
  console.log("Server running on 3000");
});
