const express = require("express");
const app = express();
const path = require("path")



//para que la carpeta sea pública
app.use(express.static(path.join(__dirname, "/public")));


//permite enviar un archivo HTML
app.get("/",  (req, res)=> {
 res.sendFile(path.join(__dirname, "/views/home.html"))
});


app.get("/formulario",  (req, res)=> {
  res.sendFile(path.join(__dirname, "/views/formulario.html"))
});


app.get("/login",  (req, res)=> {
  res.sendFile(path.join(__dirname, "/views/login.html"))
});

app.listen(process.env.PORT || 3010, function() {
  console.log("Servidor corriendo en el puerto 3010");
});


//ruta de servidor
//app.listen(3010, function() {    
//    console.log("Servidor corriendo");
//});
  