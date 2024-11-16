import React from 'react';
import TeamGetter from './components/TeamGetter';
function TeamPage() {
    return (
        <div style={styles.container}>
            <TeamGetter />
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
export default TeamPage