'use strict'
let React = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;

// STORES

// ACTIONS
// let Actions = require('../../actions/Actions');
// REACT COMPONENTS
let Piece = require('./piece.jsx');


let Test = React.createClass({
    propTypes: {

    },

    getInitialState() {
      return {

      };
    },

    getDefaultProps() {
      return {
        pieces: [1,2,3],
        onDeletePiece2: true
      };
    },

    componentWillMount() {

    },

    componentDidMount() {

    },

    componentDidUnmount() {

    },

    render() {
      var pieces;

      if (this.props.pieces && this.props.onDeletePiece2) {
        var that = this;
      var pieces = that.props.pieces.map( function(piece, i) {
        return (
          <Piece pieceData={piece} onDeletePiece3={that.props.onDeletePiece2} key={i}/>
        )
      })
    }

      return (
        <div>
          {pieces}
        </div>
      );
    }
})

module.exports = Test;