import ReactDom from 'react-dom/client';
import App from './components/App';
import './index.css';

const root = ReactDom.createRoot(document.querySelector('#root'));

root.render(<App />);