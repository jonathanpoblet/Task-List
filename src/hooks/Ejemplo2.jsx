import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1)
    }

    function incrementar2() {
        setContador2(contador2 + 1)
    }

    //Se ejecuta cada vez que se cambia cualquier estado.
    useEffect(() => {
        console.log('Cambio en el estado del componente');
        console.log('Mostrando referencia a elemento del DOM:');
        console.log(miRef);
    });

    //Se ejecuta solo cuando cambia el estado del contador 1
    useEffect(() => {
        console.log('Cambio en el estado del contador 1');
        console.log('Mostrando referencia a elemento del DOM:');
        console.log(miRef);
    }, [contador1]);

    //Se ejecuta solo cuando cambie el estado contador1 o contador 2
    useEffect(() => {
        console.log('Cambio en el estado del contador 1 o contador 2');
        console.log('Mostrando referencia a elemento del DOM:');
        console.log(miRef);
    }, [contador1,contador2]);

    return (
        <div>
            <h1>
                Ejemplo useState, useRef, useEffect
            </h1>
            <h2>
                Contador 1: {contador1}
            </h2>
            <h2>
                Contador 2: {contador2}
            </h2>
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            <div>
                <button onClick={incrementar1}>
                    Incrementar1
                </button>
                <button onClick={incrementar2}>
                    Incrementar2
                </button>
            </div>
        </div>
    );
}

export default Ejemplo2;
