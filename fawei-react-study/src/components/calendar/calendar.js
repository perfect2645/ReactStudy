import React from 'react';
import './Calendar.css';

const Calendar = (props) => {
    
    const month = props.calendar.toLocaleString('zh-CN', {month:'long'});
    const day = props.calendar.getDate();

    return (
        <div className='calendar'>
            <div className='month'>{month}</div>
            <div className='day'>{day}</div>
        </div>
    );
};

export default Calendar;