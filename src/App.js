//zaimportowanie arkuszu stylów, są to style globalne
//konflikt nazw
import './App.css';
import React from 'react';
import Text from './Text';
import 'bootstrap/dist/css/bootstrap.min.css';

//biblioteka bootstrapa
//npm install bootstrap

//preprocesor Sass

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive:false,
      underline:false
    }
  }

  handleClick=()=>{
    this.setState({
      isActive:!this.state.isActive,
      underline:!this.state.underline
    })
  }

  render() { 

    //to jest stylowanie lokalne
    const btn_off = {
      border:'4px solid black', 
      padding:'10px 20px',
      fontFamily:'arial',
      fontSize:30,
      display:'block',
      margin:'20px auto',
      backgroundColor:'white',
    }
    const btn_on = {
      border:'4px solid black', 
      padding:'10px 20px',
      fontFamily:'arial',
      fontSize:30,
      display:'block',
      margin:'20px auto',
      backgroundColor:'green',
      color:'white'
    }

    let styles = this.state.isActive ?  btn_off : btn_on; 

    const text = "Witaj na stronie!"

    let classes="";
    if(this.state.underline){
      classes+=" line";
    }

    if(text.length > 12){
      classes+=" big";
    }

    // style z tablicy - trzeba użyć joina
    const classesTab = ['one'];

    if(this.state.underline){
      classesTab.push('line')
    }

    if(text.length > 20){
      classesTab.push('big')
    }

    return (<div>
      <h1>Stylowanie lokalne</h1>
      <button 
      onClick={this.handleClick} 
      style={styles}>
        {this.state.isActive?"Wyłącz":"Włącz"}
        </button>

        <h1>Stylowanie globalne</h1>
        <div className="app">
          <h1 className={classes}>Styl pobierany z arkusza</h1>
          <h1 className={classes}>Zależny od długości tekstu</h1>
          <h1 className={classesTab.join(" ")}>Z tablicy</h1>
          <Text></Text>
        </div>
    </div>  );
  }
}
 
export default App;