const app = require('./src/config/custom-express');

app.listen(3000 , function() {
  console.log(`Servidor Rodando na porta 3000`);
});

//Metodo http sem Express

// const http    = require('http');
// const servidor = http.createServer((req,resp)=> {

// Rotas sem Template Engine
//   let html = '';
//   if(req.url == '/') {
//     html = `
    // <html>
    //   <head>
    //     <meta charset="utf-8"
    //   </head>
    //   <body>
    //     <h1> Casa do Código </h1>
    //   </body>
    // </html>
//     `;
//   } else if (req.url == '/livros'){
//     html = `
//     <html>
//       <head>
//         <meta charset="utf-8"
//       </head>
//       <body>
//         <h1> Listas de Livros </h1>
//       </body>
//     </html>
//     `;
//   }
//   resp.end(html);
// });
// servidor.listen(3000);