import React, { Component } from 'react';

class Branch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      colours: {}
    };
  }

  componentDidMount() {
    this.setState({
      options: [
        {id: '0', name: 'All'},
        {id: '1', name: 'Civil Engg.'},
        {id: '2', name: 'Computer Science Engg.'},
        {id: '3', name: 'Electronics and Electrical Engg.'},
        {id: '4', name: 'Mechanical Engg.'}
      ]
    });
  }


  render () {
    const { options } = this.state;

    let optionsList = options.length > 0
    	&& options.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.name}</option>
      )
    }, this);

    return (
      <div>
        <select onChange={this.props.changeBranch}>
          {optionsList}
        </select>
      </div>
    );
  }
}

export default Branch;