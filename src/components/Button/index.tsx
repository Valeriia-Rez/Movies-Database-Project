import React from 'react';


interface IButtonProps{
    buttonName: string,
    //onClick(): void
}

const Button = ({buttonName}: IButtonProps) => {
    return (
        <button type="button" className="button">{buttonName}</button>
    )
}

export default Button;