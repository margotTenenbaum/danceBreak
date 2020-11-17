import React from 'react';
import { button } from '../style.js';

const Form = (props) => (
  <div>
  <h3>Find your favorite artist's most danceable track</h3>
  <form id='artist'>
  <input type='text' data-testid='formInput' id='artistInput' onChange={props.captureInput}></input>
  <button data-testid='searchButton' form='artist' onClick={props.search} style={button}>Let's Dance!</button>
  </form>
</div>
)

export default Form;