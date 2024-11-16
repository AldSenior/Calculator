import React, { useState } from 'react';
import './Calculator.css'; // Стили остаются прежними

const Calculator = () => {
    const [input, setInput] = useState('');

    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '3', '2', '1', '-',
        '0', '.', '=', '+'
    ];

    const isOperator = (char) => {
        return ['+', '-', '*', '/', '='].includes(char);
    };

    const appendToDisplay = (value) => {
        const lastChar = input[input.length - 1];


        if (isOperator(value) && isOperator(lastChar)) {
            return;
        }

        setInput((prevInput) => prevInput + value);
    };

    const clearDisplay = () => {
        setInput('');
    };

    const calculateResult = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            alert('Ошибка в расчетах');
            clearDisplay();
        }
    };

    const handleButtonClick = (buttonValue) => {
        if (buttonValue === '=') {
            calculateResult();
        }else {
            appendToDisplay(buttonValue);
        }
    };

    return (
        <div className="calculator">
            <div className="Pole">
                <input type="text" value={input} disabled />
            </div>

            <div className="buttons">
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        onClick={() => handleButtonClick(button)}
                        className={isNaN(Number(button)) ? 'operation' : ''}
                    >
                        {button}
                    </button>
                ))}
            </div>
            <button onClick={clearDisplay} style={{
                width: '100%',
                marginBottom: '8px',
            }}>C</button>
        </div>
    );
};

export default Calculator;
