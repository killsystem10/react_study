import React from 'react';

function Clock(props) {
    return (
        <div>
            <h1>안녕</h1>
            <h2>현재 시간: {new Date().toLocateTimeString()}</h2>
        </div>
    )
}

export default Clock;