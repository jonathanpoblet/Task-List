import React, {useState,useEffect} from 'react';

const Clock = () => {

    const actualHour = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martin',
        apellido: 'San José'            
    }

    const [date,setDate] = useState(actualHour);

 
    function cambiarEdad(){
        setDate(
            {
                fecha:new Date(),
                edad: date.edad ++,
                nombre:'Martin',
                apellido: 'San José'
            }
        )
    }

    let intervalo = setInterval (
        () => cambiarEdad(), 1000
     );

    useEffect(() => {
            console.log("Cambio el intervalo");
    }, []);

    useEffect(() => {
        return () => {
            clearInterval(intervalo);
        };
    },[]);



    return (
        <div>
            <h2>
                Hora Actual: {date.fecha.toLocaleTimeString()}
            </h2>
            <h3>
                {date.nombre} {date.apellido}
            </h3>

            <h1>Edad: {date.edad}</h1>
        </div>
    );
}

export default Clock;
