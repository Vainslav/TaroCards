import React from 'react';


function WelcomePage() {
    return (
        <div style={styles.container}>
            <h1>Добро пожаловать на нашу страницу!</h1>
            <p>Выберите один из вариантов в верхнем меню.</p>
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
export default WelcomePage