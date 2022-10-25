import React, { useRef} from 'react';

const Child = ({ name, showMessage}) => {

    const messageRef = useRef('')

    function pressButton() {
        alert(`Default text`);
    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`);
    }


    return (
        <div>
            <p onMouseOver={() => console.log('On Mouse Over')}>Child component</p>
            <button onClick={() => console.log('Pressed Buton 1')}>
                Boton 1
            </button>
            <button onClick={pressButton}>
                Boton 2
            </button>
            <button onClick={() => pressButtonParams('Hello')}>
                Boton 3
            </button>
            <input 
                ref={messageRef}
                placeholder='Insert a text' 
                onFocus={() => console.log('Input Focused')}
                onChange={(e) => console.log('Input changed', e.target.value)}
                onCopy={() => console.log('Copied text from Input')}
            />
            <button onClick={() => showMessage('Hello ' + messageRef.current.value)}>
                Send message
            </button>
        </div>
    );
}

export default Child;
