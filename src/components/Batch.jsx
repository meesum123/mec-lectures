import React, { Component } from 'react';

class Batch extends React.Component {
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
        {id: '1', name: '2016'},
        {id: '2', name: '2017'},
        {id: '3', name: '2018'},
        {id: '4', name: '2019'}
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
        <select onChange={this.props.changeBatch}>
          {optionsList}
        </select>
      </div>
    );
  }
}

export default Batch;