const messageModel = require("../models/messageModel");

function chatController(io, socket) {
  console.log("Usuário Conectado");

  socket.on("disconnect", () => {
    console.log("Usuário Desconectado");
  });

  socket.on("chat message", (msg) => {
    messageModel.saveMessage(msg);
    io.emit("chat message", msg);
  });
}

module.exports = chatController;
