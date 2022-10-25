import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    const [age, setAge] = useState(20);

    const birthday = () => {
        setAge(age + 1)
    }


    return (
            <div>
                <h1>
                    Hola { props.name }!
                </h1>
                <h2>
                    Tu edad es de: { age }
                </h2>
                <div>
                    <button onClick={birthday}>
                        Birthday
                    </button>
                </div>
            </div>
    );
};


GreetingF.propTypes = {

};


export default GreetingF;
