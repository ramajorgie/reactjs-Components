import React from "react";
import Heder from "./Heder";
import List from "./List";
// import PropTypes from 'prop-types'


class App extends React.Component {

    state ={
        judul : 'ini pertama ditampilkan'
    }

    eventCLick = () =>{
        this.setState({
            judul : this.state.judul
        })
        this.setState({
            judul:''
        })
    }
    ubahText = (e) =>{
        this.setState({
            judul : e.target.value
        })

    }
  render() {
    return (
      <div>
        <Heder />
        <List name="ini props dari APP 1" name2="ini props dari APP 2" />
        <p>{this.state.judul}</p>
        <button onClick={this.eventCLick}>Tekan</button>
        <input value={this.state.judul} onChange={this.ubahText}/>
      </div>
    );
  }
}

export default App;
