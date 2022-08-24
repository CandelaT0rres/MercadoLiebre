const express = require("express");
const app = express();
const path = require("path")



//para que la carpeta sea pública
app.use(express.static(path.join(__dirname, "/public")));



//permite enviar un texto HTML

app.get("/hola",  (req, res)=> {
 res.send ("ahora sí entré")
  });

//permite enviar un archivo HTML
app.get("/",  (req, res)=> {
 res.sendFile(path.join(__dirname, "/views/home.html"))
});


//ruta de servidor
app.listen(3010, function() {    
    console.log("Servidor corriendo");
});
  