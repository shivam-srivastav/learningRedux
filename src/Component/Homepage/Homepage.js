import React from 'react';
import List from '../List/List.js'
import Form from '../Form/Form.js'
class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (<div>
            <h2>Articles</h2>
              <List />
              <div>
                <h2>Add a new article</h2>
                    <Form />
              </div>
          </div>
        );
    }
}

export default Homepage;