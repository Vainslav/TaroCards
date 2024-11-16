import React from 'react';
import CandidateForm from './components/CandidateForm';

function CandidatePage() {
    function handleClick() {
        
    };
    return (
        <div style={styles.container}>
            <button onClick={handleClick}>Начать собеседование</button>
            <CandidateForm />
        </div>
    )
}
const styles = {
    container: {
        position:"absolute",
        width:"100%",
        top:"50%",
        textAlign: 'center'
    },
};
export default CandidatePage