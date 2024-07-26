const { Item } = require("../../db/models");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const data = await Item.findAll();
    res.status(200).json(data);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Item.findAll({ where: { id: id } });
    res.status(200).json(data);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;