import React, { useState } from 'react';

const Ejemplo1 = () => {

    const valorInicial = 0;

    const personaInicial = {
        nombre: 'Jonathan',
        email: 'jonathan@hotmail.com',
    }
     
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    function incrementarContador() {
        setContador(contador + 1);
    }

    function actualizarPersona() {
        setPersona({
            nombre: 'Dante',
            email: 'dante@hotmail.com',
        })
    }

    return (
        <div>
            <h1>
                Ejemplo de useState
            </h1>
            <h2>
                Contador: {contador}
            </h2>
            <h2>
                Persona
            </h2>
            <h3>
                Nombre: {persona.nombre}
            </h3>
            <h3>
                Email: {persona.email}
            </h3>
            <div>
                <button onClick={incrementarContador}>
                    Incrementar contador
                </button>
                <button onClick={actualizarPersona}>
                    Cambiar persona
                </button>
            </div>
        </div>
    );
}

export default Ejemplo1;
