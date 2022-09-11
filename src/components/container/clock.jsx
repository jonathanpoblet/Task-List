import React, {useState,useEffect} from 'react';

const Clock = () => {

    const actualHour = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martin',
        apellido: 'San José'            
    };

    const [date,setDate] = useState(actualHour);



    useEffect(()=>{
        const intervalo = setInterval(()=>{
            cambiarEdad();
        },1000)
        return () => {
            clearInterval(intervalo);
        };
    });

    function cambiarEdad(){
        return setDate(
            {
                fecha:date.fecha,
                edad: date.edad + 1,
                nombre:date.nombre,
                apellido:date.apellido
            }
        )
    }



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
