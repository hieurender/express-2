const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.send("Hello there 2!"));
app.get("/envs", (req, res) => res.send(`SECRET: ${process.env['SECRET']}; SECRET_2: ${process.env['SECRET_2']}`));

console.log('yoo');


[3001, 8080, 9000].forEach((p, i) => {
  app.listen(p, () => console.log(`Example app ${i} listening on port ${p}!`));
});
