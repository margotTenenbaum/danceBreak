import React from 'react';

const Form = (props) => (
  <div>
  <h3>Find your favorite artist's most danceable track</h3>
  <form id='artist'>
  <input type='text' id='artistInput' onChange={props.captureInput}></input>
  <button data-testid='searchButton' form='artist' onClick={props.search}>Let's Dance</button>
  </form>
</div>
)

export default Form;