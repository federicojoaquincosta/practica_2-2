const mysql = require("mysql2")
require("dotenv").config();
const config = {
    host: process.env.HOST_DB,
    database: process.env.NAME_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB
}
 
const connection = mysql.createConnection(config)
 
connection.connect(function(error) {
    if (error) throw(error);
    console.log("Connected!");
});

connection.query("SELECT * FROM platos", function(error, registros){
    if (error) {
        throw error;
    }
    console.log("Mostrando registros \n", registros);
});
/*
connection.query("INSERT INTO platos(nombre, precio, con_oferta) VALUES ('Ensalad Cesar', 800, FALSE)", function(error, resultado){
    if (error) {
        throw error;
    }
    console.log("Insertando registro nuevo  \n", resultado);
});
*/
/*
connection.query("UPDATE platos SET con_oferta = FALSE WHERE con_oferta = TRUE", function(error, resultado){
    if (error) {
        throw error;
    }
    console.log("Cambiando valor de oferta  \n", resultado);
});
*/
/*
connection.query("DELETE FROM platos WHERE id_plato = 2", function(error, resultado){
    if (error) {
        throw error;
    }
    console.log("Borrando plato 2  \n", resultado);
});
*/


connection.end(function(error){
    if (error) {
        return console.log("error:" + error.message);
    }

    console.log("conexion finalizada!");
})