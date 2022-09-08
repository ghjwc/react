import React from 'react';

function My() {
    return (
        <h1>My first React!</h1>
    );
}

class HelloMessage extends React.Component {
    render() { //class 생성 시에는 render가 필요
      return (
        <div>
          {console.log(this)}
          {console.log(this.props)}
          {console.log(this.props.age)}
          Hello {this.props.name} {this.props.age}살!
        </div>
      );
    }
}

export class Timer extends React.Component {
  constructor(props) {
    super(props); //고정
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() { //component가 삽입될 때 자동으로 실행
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() { //component가 삭제될 때 자동으로 실행
    clearInterval(this.interval);
  }

  render() { //state, pops의 값이 변하면 render는 자동으로 실행
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}


// export default My;
export default HelloMessage;