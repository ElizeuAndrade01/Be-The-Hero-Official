const connection = require("../database/connection");
const generateUniqueID = require("../utils/generateUniqueID");

module.exports = {
  async index(req, res) {
    const ongs = await connection("ongs").select("*");

    return res.json(ongs);
  },

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const ongs = await connection("ongs")
      .where("id", ong_id)
      .select("id")
      .first();

    if (ongs.id !== ong_id) {
      return res.status(401).json({ error: "Operation not permitted" });
    }

    await connection("ongs")
      .where("id", ong_id)
      .delete();

    return res.status(204).send();
  },



  async store(req, res) {
    const { name, email, password, whatsapp, city, uf } = req.body;

    const id = generateUniqueID();

    await connection("ongs").insert({
      id,
      name,
      email,
      password,
      whatsapp,
      city,
      uf
    });

    return res.json({ id });
  }
};