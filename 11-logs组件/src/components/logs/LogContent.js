import React from 'react';
import './LogContent.css';

const LogContent = (props) => {
    return (
        <div className='logContent'>
            <h3>{props.content.desc}</h3>
            <h4>{props.content.duration}</h4>
        </div>
    );
};

export default LogContent;