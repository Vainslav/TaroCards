import React from 'react';
import BottomLink from './BottomLink';

function Header() {
    return (
        <header>
            <BottomLink label="Home" path="/" />
            <BottomLink label="Teams" path="/teams" />
            <BottomLink label="Candidates" path="/candidates" />
            <BottomLink label="Reports" path="/reports" />
        </header>
    );
};


export default Header;