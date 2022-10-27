import React, { useState } from 'react';

const Square = () => {

    const [color1, setColor1] = useState(0);
    const [color2, setColor2] = useState(0);
    const [color3, setColor3] = useState(0);

    function randomColors () {
        const num1 = Math.floor(Math.random() * 255);
        const num2 = Math.floor(Math.random() * 255);
        const num3 = Math.floor(Math.random() * 255);
        setColor1(num1);
        setColor2(num2);
        setColor3(num3);
    }

    return (
        <div>
            <p>Click the square for a random number</p>
            <div style={
                { 
                width: 250,
                height: 250, 
                backgroundColor: 'rgb(' + color1 +  ',' + color2 + ',' + color3 + ')'  
                }
            }
                onClick={randomColors}>
            </div>
            <p>rgb({color1},{color2},{color3})</p>
        </div>
    );
}

export default Square;
