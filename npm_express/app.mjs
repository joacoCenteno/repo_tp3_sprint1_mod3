import express from 'express';

//Creando una instancia de Express
const app = express();

//Configurando el puerto en el que el servidos escuchará
const PORT = 3000;

//Ruta GET con parámetro de ruta
//Solicitud: http://localhost:3000/user/123
app.get('/user/:id', (req,res)=>{
    const userId = req.params.id;
    console.log(`ID del usuario recibido ${userId}`);
    res.send(`Perfil del usuario con ID: ${userId}`);
});

//PAGINA DE INICIO
app.get('/', (req,res)=>{
    res.send('Pagina de Inicio');
});

//PAGINA DATA
app.get('/data', (req,res)=>{
    res.send('Datos recibidos');
});


//Ruta GET con multiples parámetros 
//Solicitud: http://localhost:3000/product/electronics/456
app.get('/product/:category/:id', (req,res)=>{
    const {category, id} = req.params;
    res.send(`Categoria: ${category}, ID Producto: ${id}`);
});


//Ruta GET con parámetro de consulta
//Solicitud: http://localhost:3000/search?q=javascript
app.get('/search', (req,res)=>{
    const query = req.query.q;
    res.send(`Resultados de busqueda para: ${query}`);
});


//Ruta GET con múltiples parámetros de consulta
//Solicitud: http://localhost:3000/filter?type=book&minPrice=10&maxPrice=50
app.get('/filter', (req,res)=>{
    const {type, minPrice, maxPrice} = req.query;
    res.send(`Filtrar por tipo: ${type}, Rango de precios: ${minPrice} - ${maxPrice}`);
});


//Iniciar el servidor
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en htpps://localhost:${PORT}`);
});