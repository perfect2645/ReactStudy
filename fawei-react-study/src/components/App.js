import React from 'react';
import Logs from './logs/Logs';
import './App.css';
import LogsForm from './logsForm/LogsForm';

const App = () => {
    return (
        <div className="app">
            <LogsForm />
            <Logs />
        </div>

    );
};

export default App;