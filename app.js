const express = require('express');
const app = express();
const port = 3000; // Puedes cambiar el número de puerto si lo deseas

// Configuración para servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Ruta de ejemplo
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`La aplicación está corriendo en http://localhost:${port}`);
});
