const express = require("express");
const Client = require("../models/client");
const router = new express.Router();

//create new client
router.post("/api/clients", async (req, res) => {
  const client = new Client({
    ...req.body,
  });

  try {
    await client.save();
    res.status(201).send(client);
  } catch (e) {
    res.status(400).send(e);
  }

  console.log(req.body);
});

//delete client
router.delete("/api/clients/:oib", async (req, res) => {
  try {
    const client = await Client.findOneAndDelete({ oib: req.params.oib });

    if (!client) {
      res.status(404).send();
    }

    res.send(client);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
