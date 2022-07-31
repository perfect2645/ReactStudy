import './Logs.css';
import LogItem from './LogItem';
import Card from '../../UI/Card';

const Logs = () => {

    const dayStamp = 24*60*60*1000;

    const logsData = [
        {
            id:"001",
            date:new Date(),
            content: {
                desc:"学习React",
                duration:"30分钟",
            }
        },
        {
            id:"002",
            date:new Date(Date.now() + dayStamp),
            content: {
                desc:"学习Angular",
                duration:"50分钟",
            }
        }
    ]

    const items = logsData.map(data => <LogItem key={data.id} logsData={data}></LogItem>)

    return (
        <Card className='logs'>
            {items}
        </Card>
    );
};

export default Logs;