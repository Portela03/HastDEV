const jwt = require("jsonwebtoken");
const pino = require("pino")();

 function createRefreshToken(user) {
  const refreshToken = jwt.sign({ userId: user.id }, process.env.REFRESH_SECRET, {
    expiresIn: "7d",  
  });
  return refreshToken;
}

 function checkRefreshToken(req, res, next) {
  const refreshToken = req.body.refreshToken;

  if (!refreshToken) {
    pino.error("Acesso negado: Token não fornecido");
    return res.status(401).json({ error: "Acesso negado: Token não fornecido" });
  }

  jwt.verify(refreshToken, process.env.REFRESH_SECRET, (err, decoded) => {
    if (err) {
      pino.error("Token inválido");
      return res.status(403).json({ error: "Token inválido" });
    }
    req.userId = decoded.userId;
    next();
  });
}

module.exports = {
  createRefreshToken,
  checkRefreshToken,
};
