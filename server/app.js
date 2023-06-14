const express = require("express");
const { Agent } = require("./model");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/agents", async (req, res, next) => {
  const agents = await Agent.findAll();
  return res.json(agents);
});


app.post("/agent", async (req, res, next) => {
  try {
    const newAgent = JSON.parse(JSON.stringify(req.body), (_, value) => {
      return value ? value : null;
    });

    const agent = await Agent.create(newAgent);

    return res.status(201).json(agent);
  } catch (error) {
    return next(error);
  }
});

app.patch("/agent/:id", async (req, res, next) => {
  try {
    const agent = await Agent.findByPk(req.params.id);
    const review = req.body.review;

    const updatedReview = Agent.update(
      {
        ...agent,
        reviews: `${
          agent?.reviews ? `${agent?.reviews}, ${review}` : `${review}`
        } `,
      },
      {
        where: { id: req.params.id },
      }
    );
    return res.status(201).json(updatedReview);
  } catch (error) {
    return next(error);
  }
});

module.exports = app;
