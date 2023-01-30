const express = require('express');
const request = require("request");
const exphbs = require("express-handlebars");
const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine","handlebars");



// Middleware
app.use((req, res, next) => {
  const mensaje = `Request a ${req.baseUrl} ${Date.now()}`
  console.log(mensaje);
  next()
})


app.get('/', (req, res) => {
  res.json({
    status: 200,
    message: 'Este request/response está OK'
   })
})

app.get('/tiempo', (req, res)=>{
  request("https://www.el-tiempo.net/api/json/v2/provincias/50/municipios/50297", (err, response, body)=>{
      if (!err){
          const data = JSON.parse(body);
          res.render("tiempo",{ 
            layout:"main",
            data: data,

          });
        } else {
          console.log('error');
        }
  })
});



const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});