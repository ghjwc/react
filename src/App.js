import logo from './logo.svg';
// import './App.css';
import { Component } from 'react';

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class TOC extends Component {
  render() {
    // var list = [
    //   <li><a href="1.html">HTML</a></li>,
    //   <li><a href="2.html">CSS</a></li>,
    //   <li><a href="3.html">JavaScript</a></li>
    // ];
    var list = [];
    var i = 0;
    while (i < this.props.data.length) {
      var data = this.props.data[i];
      list.push(
        <li key={data.id}>
          <a href={data.id + '.html'} onClick={function(ev) {
            ev.preventDefault();
          }}>
            {data.title}
          </a>
        </li>
      );
      i = i + 1;
    }
    return (
      <nav>
        <ol>
          {list}
        </ol>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

class App extends Component {
  state = {
    selected_content_id: 1,
    contents: [
      {id: 1, title: 'HTML', desc: 'HTML is for information'},
      {id: 2, title: 'CSS', desc: 'CSS is for design'},
      {id: 3, title: 'JavaScript', desc: 'JavaScript is for interaction'}
    ]
  }

  getSelectedContent() {
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (this.state.selected_content_id === data.id) {
        return data;
      }
      i = i + 1;
    }
  }

  render() {
    var content = this.getSelectedContent();
    console.log(content);
    return (
      <div className="App">

        <Subject title="WEB" sub="World Wide Web"></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content data={this.getSelectedContent()}></Content>
      </div>
    );
  }
}

export default App;
