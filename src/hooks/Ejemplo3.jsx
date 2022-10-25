import React, { useState, useContext } from 'react';

const miContexto = React.createContext(null)

const Componente1 = () => {


    const state = useContext(miContexto)

    return (
        <div>
            <h1>
                El Token es: {state.token}
            </h1>
            <Componente2></Componente2>
        </div>
    );
}



const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>
                La sesión es: {state.sesion}
            </h2>
        </div>
    );
}



const ComponenteConContexto = () => {

    const estadoInicial = {
        token: '1234567',
        sesion: 1,
    }

    const [sesionData, setSesionData] = useState(estadoInicial);

    function actualizarSesion() {
        setSesionData({
            token: 'jwt123456789',
            sesion: sesionData.sesion + 1,
        });
    }

    return (
        <miContexto.Provider value={sesionData}>
            <h1>Ejemplo de useState y useContext</h1>
            <Componente1>
            </Componente1>
            <button onClick={actualizarSesion}>Actualizar Sesion</button>
        </miContexto.Provider>
    );
}

export default ComponenteConContexto;


