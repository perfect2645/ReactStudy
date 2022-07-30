import './Logs.css';
import LogItem from './LogItem';
import Card from '../../UI/Card';

const Logs = () => {

    const logsData = [
        {
            key:"001",
            date:new Date(2022, 8, 29),
            content: {
                desc:"学习React",
                duration:"30分钟",
            }
        }
    ]

    const items = logsData.map(data => <LogItem logsData={data}></LogItem>)

    return (
        <Card className='logs'>
            {items}
        </Card>
    );
};

export default Logs;