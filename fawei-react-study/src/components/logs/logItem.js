import React from 'react';
import './LogItem.css';
import Card from '../../UI/Card';
import Calendar from '../calendar/Calendar';
import LogContent from './LogContent';

const logItem = () => {
    return (
        <Card className="logItem">
            <Calendar />
            <LogContent />
        </Card>
    );
};

export default logItem;