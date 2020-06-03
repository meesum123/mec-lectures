import React, { Component } from 'react';

class Course extends React.Component {
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
        {id: '1', name: 'CSE 101'},
        {id: '2', name: 'CE 101'},
        {id: '3', name: 'EEE 101'},
        {id: '4', name: 'ME s101'}
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
        <select onChange={this.props.changeCourse}>
          {optionsList}
        </select>
      </div>
    );
  }
}

export default Course;