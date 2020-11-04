import React from 'react';
import Button from '../Button';
import Input from '../Input';
import Logo from '../Logo';

const Header = () => {
    return (
        <div>
         <Logo/>
            <h1>FIND YOUR MOVIE</h1>
            <Input/>
            <div>
                <span>SEARCH BY</span>
                <Button buttonName="TITLE"/>
                <Button buttonName="GENRE"/>
                <Button buttonName="SEARCH"/>
            </div>
        </div>
    )
}

export default Header;