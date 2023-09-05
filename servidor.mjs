// Importa los módulos necesarios
const http = require('http');
const colors = require('colors');

// Define las constantes para el host y el puerto
const HOST = 'localhost';
const PORT = 8000;

// Crea un servidor HTTP
const server = http.createServer((req, res) => {
  // Configura la respuesta en formato JSON
  res.setHeader('Content-Type', 'application/json');
  
  // Crea un objeto con tu nombre y un mensaje
  const response = {
    nombre: 'Luis Moguea',
    mensaje: '¡Hola desde mi servidor Node.js!'
  };

  // Envía la respuesta como JSON
  res.end(JSON.stringify(response));
});

// Inicia el servidor en el puerto y el host especificados
server.listen(PORT, HOST, () => {
  const mensaje = `El servidor está escuchando en http://${HOST}:${PORT}`;
  console.log(mensaje.green);
});
