/* eslint-disable prettier/prettier */
const express = require("express");
const Client = require("../models/client");
const router = new express.Router();

//*create new client
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

//*get all clients
router.get("/api/clients", async (req, res) => {
  try {
    const clients = await Client.find({});
    if (!clients) {
      res.status(404).send();
    }
    res.status(200).send(clients);
  } catch (e) {
    res.status(500).send();
  }
});

//*get client by oib
router.get("/api/clients/:oib", async (req, res) => {
  try {
    const client = await Client.findOne({ oib: req.params.oib });
    if (!client) {
      res.status(404).send();
    }
    res.status(200).send(client);
  } catch (e) {
    res.status(500).send();
  }
});

//*update client
router.patch("/api/clients/:oib", async (req, res) => {
  const updates = Object.keys(req.body);
  /*   const allowedUpdates = ["contact", "address", "name", "idType"]
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if (!isValidOperation) {
      return res.status(400).send({ error: "Invalid updates!" })
  } */

  try {
    const client = await Client.findOne({ oib: req.params.oib });
    if (!client) {
      res.status(404).send();
    }

    updates.forEach((update) => {
      client[update] = req.body[update];
    });

    await client.save();
    res.send(client);
  } catch (e) {
    res.status(500).send();
  }
});

//*delete client
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
