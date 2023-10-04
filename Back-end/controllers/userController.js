const pino = require("pino")();
const db = require("../Db"); 

async function getUserById(req, res) {
  const id = req.params.id;

  try {
    db.query("SELECT * FROM users WHERE userid = ?", [id], (err, userResult) => {
      if (err) {
        pino.error("Erro ao consultar o banco de dados:", err);
        return res.status(500).json({ error: "Erro interno do servidor" });
      }

      if (userResult.length === 0) {
        pino.info("Usuário não encontrado");
        return res.status(404).json({ error: "Usuário não encontrado" });
      }
    
      if (userResult[0].userid != id) {
        pino.error("Acesso negado: ID de usuário inválido");
        return res
          .status(403)
          .json({ error: "Acesso negado: ID de usuário inválido" });
      }else{
        res.status(200).json({ user: userResult[0] });
      }

  
    });
  } catch (err) {
    pino.error("Erro ao buscar usuário:", err);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}

module.exports = {
  getUserById,
};
