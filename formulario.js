//incluindo uma biblioteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');
const fs = require('fs');

//definição de endereço/ URL
const hostname = '127.0.0.1'; //LOCALHOST
const port = 3000;

//Implementação da regra de negócio 
const server = http.createServer((req, res) => {
var resposta;
const urlparse = url.parse(req.url, true);
//criar um usuario e atualizar um usuario

  //receber informações do usuário
  const params = queryString.parse(urlparse.search);
console.log(params);
    if(urlparse.pathname == '/')
    {
   
        //salvar as informações
        fs.writeFile('users/'+ params.nome +'.txt', JSON.stringify(params), function (err) {
          if (err) throw err;
          console.log('Saved!');
          resposta = 'Dados Salvos com sucesso';
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.end(resposta );
        });
        
    } 


});

//Execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});