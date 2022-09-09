import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {
    
    //Propiedades
    constructor(props){
        super(props);
        //Valor privado 
        this.state = {
            age : 20,
            frase:"Este es mi primer hola mundo en React!"
        }
    }

    render() {
        return (
            <div>
                <h1>
                    ¡Hola {this.props.name}!
                </h1>
                <h2>
                    Tu edad es de {this.state.age}
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
                <h2>
                    {this.state.frase}
                </h2>
            </div>
        );
    }

    birthday = () =>{
        this.setState((prevState) => (
            {
                age : prevState.age + 1
            }
        ))
    }

}

//Especificamos el tipo de dato de los props
Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;
