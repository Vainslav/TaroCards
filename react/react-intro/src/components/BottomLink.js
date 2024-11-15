import React from 'react';
import { useNavigate } from 'react-router-dom';

function BottomLink({ label, path }){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
    };

    return (
        <button onClick={handleClick} style={styles.button}>
            {label}
        </button>
    );
};

const styles = {
    button: {
        margin: '10px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

export default BottomLink;