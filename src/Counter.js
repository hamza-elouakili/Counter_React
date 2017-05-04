import React from 'react';
import styled from 'styled-components';

/**
 * A counter button: tap the button to increase the count.
 */

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Button = styled.button`  
  color: palevioletred;
`;


class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
 
  render() {
    return (
      <Button
        onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}
      >
        Count: {this.state.count}
      </Button>
    );
  }
}
export default Counter;