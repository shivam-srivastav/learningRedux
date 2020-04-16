import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle, addClick } from "../../js/action/action";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article)),
    addClick: click => dispatch(addClick(click))

  };
}


const mapStateToProps = state => {
    return {click:state.click}
};
class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleClick(){
    const {click} = this.state;
    this.props.addClick({click})
 }

  handleSubmit(event) {
    event.preventDefault();
    const { title,click } = this.state;
    this.props.addArticle({ title });
    this.props.addClick({click})
    this.setState({ title: "", });

  }
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      <div onClick={this.handleClick}>
          Click : {this.props.click}
      </div>
      </form>
    );
  }
}

const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedForm);
export default Form;