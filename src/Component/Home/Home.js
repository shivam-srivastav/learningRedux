import React from 'react';
import { Dropdown } from 'semantic-ui-react'
// import './Home.scss'

// const options = [
//   { key: 'angular', text: 'Angular', value: 'angular' },
//   { key: 'css', text: 'CSS', value: 'css' },
//   { key: 'design', text: 'Graphic Design', value: 'design' },
//   { key: 'ember', text: 'Ember', value: 'ember' },
//   { key: 'html', text: 'HTML', value: 'html' },
//   { key: 'ia', text: 'Information Architecture', value: 'ia' },
//   { key: 'javascript', text: 'Javascript', value: 'javascript' },
// ]



class Home extends React.Component {
    constructor(props) {
        super(props);
       this.state = {
                     arr:["C++","Java","Python"],
                     //states for inserting the key, value, and text in Option for Dropdown
                     //extract the values from input...
                     value: '',
                     key: '',
                     text: '', 
                    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Option=this.Option.bind(this);
  }

  handleChange(event) {
      //here we concatinate the array like this because push function is not work in 
      this.setState({value: event.target.value});
}

handleSubmit(event) {
    event.preventDefault();
    //here we concatinate the array like this because push function is not work in Setstate
    var joined = this.state.arr.concat(this.state.value);
    this.setState({arr:joined});
    
  }

  //Make a function in such a way that return Option like array or object which is invoke in Dropdown 
  Option = ()=>{
    return(
        this.state.arr.map(n=>{
            return(
                { key: n, text: n, value: n }
            )
        })
    )
 }
 
  render() {
      return (
          <div className="Home">
               <form onSubmit={this.handleSubmit}>
                   <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>>
                   

            <Dropdown placeholder='Skills' fluid multiple selection options={this.Option() } />
            </div>
        );
    }
}

export default Home;