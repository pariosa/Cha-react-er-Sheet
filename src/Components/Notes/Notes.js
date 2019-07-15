import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateNotes, 
} from "../../js/actions/notesActions";

const mapDispatchToProps = { 
    updateNotes
};

const mapStateToProps = state => {
  return {
    notes: state.notes.notes, 
  };
};
class Notes extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() { 
    const{ 
      notes,
      updateNotes, 
    } = this.props; 
    return (
      <div className="Notes stackable grid row"> 
        <div className="notes Input">
          <strong>Additional Notes:</strong>
          <br />
          <textarea className="notesInput" rows="50" cols="100" value={notes} onChange={updateNotes} />
        </div>
      </div>
       )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Notes)