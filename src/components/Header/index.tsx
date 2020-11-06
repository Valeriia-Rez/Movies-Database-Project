import React from 'react';
import Button from '../Button';
import Input from '../Input';
import Logo from '../Logo';
import './index.scss';

interface IHeaderProps{
    onClickSearch(): void ,
    searchTerm: string,
    onChange(term: string): void,
    onClickFilterBy(filterBy : string): void,
    filterBy: string
}

const Header = ({onClickSearch, searchTerm, onChange, onClickFilterBy, filterBy}: IHeaderProps) => {
    
    return (
        <div className="header">
            <Logo/>
            <h1>FIND YOUR MOVIE</h1>
            <Input value={searchTerm} onChange={onChange}/>
            <div>
                <span>SEARCH BY</span>
                <Button onClick={() => onClickFilterBy("title")} className= {filterBy === "title" ? "active" : ""} buttonName="TITLE"/>
                <Button onClick={() => onClickFilterBy("genre")} className= {filterBy === "genre" ? "active" : ""} buttonName="GENRE"/>
                <Button buttonName="SEARCH" onClick={onClickSearch}/>
            </div>
        </div>
    )
}

export default Header;