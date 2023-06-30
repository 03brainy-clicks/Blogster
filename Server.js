/* This is a basic setup for a Node.js server using the Express framework. */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// chat config
const { Configuration, OpenAIApi } = require("openai");
const config = new Configuration({
  organization: "org-L7OKJESNQOb5KzJp1NABHn2v",
  apiKey: "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",
});
const openai = new OpenAIApi(config);

// server
const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

app.post("/chat", async (req, res, next) => {
  const { prompt } = req.body;
  console.log("chat called ");
  console.log(prompt);
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 512,
    temperature: 0,
    prompt: prompt,
  });

  res.send(completion.data.choices[0].text);
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
