import React from 'react';
import BottomLink from './BottomLink';

function Header() {
    return (
        <div style={styles.header}>
            <BottomLink label="Home" path="/" />
            <BottomLink label="Teams" path="/teams" />
            <BottomLink label="Candidates" path="/candidates" />
            <BottomLink label="Reports" path="/reports" />
        </div>
    );
};

const styles = {
    header: {
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: '#f8f9fa',
        padding: '10px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-around',
    },
};

export default Header;