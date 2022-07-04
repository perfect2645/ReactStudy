// react项目入口
import ReactDOM from 'react-dom/client';

const App = <div>
    <h1>这是一个react项目</h1>
    <p>
        我终于有了第一个react项目
    </p>
</div>

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(App);

//npx react-scripts run build
//npx react-scripts start