import React from 'react';
import { connect } from 'react-redux';
import Synth from './synth';
import { keyPressed, keyReleased } from '../../actions/notes_actions.js';

const mapStateToProps = ({ notes }) => ({
  notes: notes
});


const mapDispatchToProps = dispatch => ({
  keyPressed: key => dispatch(keyPressed(key)),
  keyReleased: key => dispatch(keyReleased(key))
});


const SynthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Synth);

export default SynthContainer;
