import React, { Component } from 'react';
import { Container } from 'reactstrap';

class Books extends Component {

rendererList(){
  const { books } = this.props;

  return books && books.map( book => {
    const { _id, name, author, description, range } = book;
    return (
      <React.Fragment key={_id}> 
        <div>
          <p>{name}</p>
          <p>{author}</p>
          <p>{description}</p>
          <p>{range}</p>
        </div>
        <hr/>
        <br/>
      </React.Fragment> 
    )
  })
}

  render() {
    return (
      <Container> 
        <br/>
        {this.rendererList()}
      </Container>
    );
  }
}

export default Books;