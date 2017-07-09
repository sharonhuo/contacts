import React, { Component } from 'react';

class ListContacts extends Component {


  render() {
    console.log('this.props', this.props);
    return (
      <div>
        <ol className='contact-list'>
        </ol>
      </div>
    )
  }
}

export default ListContacts
