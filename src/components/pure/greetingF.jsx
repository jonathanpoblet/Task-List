import React, {useState}  from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    //useState : nos permite crear un estado para las funciones
    //Variable, metodo, valor inicial
    const [age, setage] = useState(20);

    const birthday = () => {
        //actualiza el state
        setage(age + 1)
    }

    return (
        <div>
            <h1>
                ¡Hola {props.name}!
            </h1>
            <h2>
                Tu edad es de {age}
            </h2>
            <div>
                <button onClick={birthday}>
                    Cumplir años
                </button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
