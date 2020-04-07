const connection = require("../database/connection");

module.exports = {
  async store(req, res) {
    const { id } = req.body;
    const { password } = req.body;

    const ong = await connection("ongs")
      .where("id", id)
      .where("password", password)
      .select("name")
      .first();

    if (!ong) {
      return res.status(400).json({ error: "Ong not found" });
    }

    return res.json(ong);
  }
};