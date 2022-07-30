import React from 'react';
import './LogsForm.css';
import Card from '../../UI/Card';

const LogsForm = () => {
    return (
        <Card className='logs-form'>
            <form>
                <article>
                    <label htmlFor="date">日期</label>
                    <input type="date" id="date" />
                </article>
                <article>
                    <label htmlFor="desc">内容</label>
                    <input type="text" id="desc" />
                </article>
                <article>
                    <label htmlFor="duration">时长</label>
                    <input type="text" id="duration" />
                </article>
            </form>
        </Card>
    );
};

export default LogsForm;