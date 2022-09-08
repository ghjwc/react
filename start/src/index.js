import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HelloMessage, {Timer} from './My';
import TodoApp from './TodoApp';
import MarkdownEditor from './Remarkable';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <App />
    {/* <HelloMessage name="홍길동" age="28" />
    <Timer />
    <TodoApp />
    <MarkdownEditor /> */}
  </Fragment>
  
);
