import React from 'react';

const Button = ({label, onClick, value, size}) => {
    return (
            <div 
                onClick={onClick} 
                className="Button" 
                data-size={size} 
                data-value={value}
            >
                {label}
            </div>
            );
}

export default Button;