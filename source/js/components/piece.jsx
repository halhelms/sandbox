'use strict'
let React = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;

// STORES
// let Store = require('../../stores/Store');
// ACTIONS
// let Actions = require('../../actions/Actions');
// REACT COMPONENTS


let Piece = React.createClass({
path: '',

propTypes: {

},

getInitialState() {
  return {};
},

getDefaultProps() {
  return {};
},

componentWillMount() {
  
},

componentDidMount() {

},

componentDidUnmount() {

},

render() {
  return (
    <div>
    	Hello from Piece
    </div>
  );
}
})

module.exports = Piece;