// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import styled from "styled-components";

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
  {<div id="headerLogo">{props.logo}</div>}
  <ul>
    {lis}
  </ul>
</header>
}

function About(props) {
  return <div className='aboutDiv'>
    <div>
      <h1>{props.title}</h1>
      {props.body}
    </div>
  </div>
}

function Top(props) {
  return <div className='topBtn' onClick={() => {
    window.scrollTo({left:0, top:0, behavior:'smooth'});
  }}>
    {props.title}
  </div>
}

const HeaderStyle = styled.div`
  @media (max-width: 40rem) {
    .toggle {
      opacity: ${(props) => (props.userToggled ? '0' : '1')};
      visibility: ${(props) => (props.userToggled ? 'hidden' : 'visible')};
    }
  
    header:first-child > ul {
      opacity: ${(props) => (props.userToggled ? '0' : '1')};
      visibility: ${(props) => (props.userToggled ? 'hidden' : 'visible')};
    }
`

function App() {
  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState('WELCOME');

  const topics = [
    {id:1, title:"ABOUT"},
    {id:2, title:"SKILLS"},
    {id:3, title:"PROJECT"},
    {id:4, title:"CONTACT"}
  ];

  // const [isToggled, setIsToggled] = useState(false);

  let content = null;

  if (mode === 'WELCOME') {
    content = <About title="WELCOME" body="hello, WEB"></About>
  } else if (mode === 'READ') {
    let title, body = null;
    // for (let i = 0; i < topics.length; i++) {
    //   if (topics[i].id === id) {
    //     title = topics[i].title;
    //     body = topics[i].body;
    //   }
    // }
    content = <About title={title} body={body}></About>
  }

  return (
    <div>
      
      <Nav logo="MY PORTFOLIO" topics={topics} onChangeMode={(id) => {
        console.log(id);
        setMode('READ');
      }}></Nav>
      <div className='toggle' onClick={() => {
        
      }}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <Nav topics={topics} onChangeMode={(id) => {
        console.log(id);
        setMode('WELCOME');
      }}></Nav>

      {content}

      <Top title="TOP"></Top>
    </div>
  );
}

export default App;
