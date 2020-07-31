const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const yup = require("yup");
const monk = require("monk");

const app = express();
app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "cdg.sh-shorten urls",
  });
});
const schema = yup.object().shape({
  slug: yup
    .string()
    .trim()
    .matches(/^[\w\-]+$/i),
  url: yup.string().trim().url().required(),
});

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
