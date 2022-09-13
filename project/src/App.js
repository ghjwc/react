// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Nav(props) {
  let lis = [];

  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
    <a href={'/read/' + t.id} id={t.id} onClick={(e) => {
      e.preventDefault();
      props.onChangeMode(Number(e.target.id));
    }
  }>{t.title}</a></li>);
  }

  return <header>
  <ul>
    {lis.unshift(<div key={}></div>)}
    {lis}
  </ul>
</header>
}

function Article(props) {
  return <article>
    <h1>{props.title}</h1>
    {props.body}
  </article>
}

function App() {
  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);

  const topics = [
    {id:1, title:"ABOUT"},
    {id:2, title:"SKILLS"},
    {id:3, title:"PROJECT"},
    {id:4, title:"CONTACT"}
  ];

  let content = null;

  if (mode === 'WELCOME') {
    content = <Article title="WELCOME" body="hello, WEB"></Article>
  } else if (mode === 'READ') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      console.log(topics[i].id, id);
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }

  return (
    
    <div>
      
      <Nav logo="MY PORTFOLIO" topics={topics} onChangeMode={(id) => {
        alert(id);
        setMode('READ');
        setId();
      }}></Nav>

      <Nav topics={topics} onChangeMode={(_id) => {
        alert(id);
        setMode('WELCOME');
        setId(_id);
      }}></Nav>

      {content}
    </div>
  );
}

export default App;
