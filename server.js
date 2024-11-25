// Importa as dependências necessárias para o projeto:
// - express: Framework web para Node.js
// - conectarAoBanco: Função customizada para estabelecer a conexão com o banco de dados (provavelmente definida em dbconfig.js)
import express from "express";
import routes from "./src/config/routes/postRoutes.js";

// Cria uma instância do aplicativo Express.
const app = express();

routes(app);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console quando o servidor estiver ouvindo.
app.listen(3000, () => {
    console.log("Servidor escutando...");
});



// function buscarPostID(id){
//     return posts.findIndex((post) => {
//         return post.id == Number(id)
//     });
// }

// app.get("/posts/:id", (req, res) => {
//     const index = buscarPostID(req.params.id)
//     res.status(200).json(posts[index]);
// });