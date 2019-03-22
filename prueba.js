const opciones={
    id:{
        demand: true,
        alias: 'i'
    },
    nombre:{
        demand:true,
        alias: 'n'
    },
    cedula:{
        demand: true,
        alias: 'c'
    },

}

const fs = require('fs');

const argv = require('yargs')
            .command('inscribir', 'inscribir usuario a un curso', opciones).argv

const express = require('express')
const app = express()

var cursos = [
    {
        id: 123,
        nombre: 'requisitos',
        duracion: '32 horas',
        precio: 150000
    },
    {
        id: 345,
        nombre:'calidad',
        duracion: '60 horas',
        precio: 1000
    },
    {
        id: 567,
        nombre:'ingles',
        duracion: '4 horas',
        precio: 500
    }];

if(argv._[0] != 'inscribir')
{  
    for(var i=0;i<cursos.length;i++)
    {
        (function(i) {
        setTimeout(function(){
            console.log('Información curso '+ i + '\n' + 'id: ' + cursos[i].id + '\n' + 'nombre curso: ' 
            + cursos[i].nombre + '\n' + 'duración: ' + cursos[i].duracion + '\n' + 'valor: '+ cursos[i].precio + '\n'); 
        }, i * 2000);
        })(i);    
    }
}
else{
    for(var i=0;i<cursos.length;i++)
    {
        identificador = cursos[i].id;
        if(argv.id == identificador)
        {
            nombreC = cursos[i].nombre;
            duracion = cursos[i].duracion;
            precio = cursos[i].precio;
            
            texto2 = 'el usuario '+ argv.nombre + '\n' +
            'con número de cedula '+ argv.cedula + '\n' + ' se ha inscrito al curso con número de identificación ' + identificador + ' ' +'nombre curso ' + nombreC + ' ' +'con duración de ' + duracion
            + ' ' +'y con un valor de ' + precio;

            /*fs.appendFile('documento.txt', texto2, (err)=>{
                if(err){
                    throw err;
                }
                console.log('Se creo exitosamente el archivo');                
            });
            break;*/
            console.log('Información creada');
            app.get('/', function (req, res) {
                res.send(texto2)
            })

            app.listen(5000)
            
        }
        //console.log('paso por el ciclo ' + ' ' + (i+1) + ' ' +'veces' );
        console.log('El id no existe, por favor intente de nuevo!');
        
    }
    
}  