import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles, click: state.click };
};

const ConnectedList = ({ articles, click }) => (
  <div>
      <ul>
        {articles.map(el => (
        <li key={el.id}>{el.title}</li>
        ))}
     </ul>
    {click}
  </div>
  
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;