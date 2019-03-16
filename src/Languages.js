import React, { Component } from "React";
import { connect } from "react-redux";
import {
  updateLanguages,
  updateConditionalModifiers, 
} from "./js/actions/languagesActions";

const mapDispatchToProps = dispatch => {
  return {
    updateLanguages: languages => dispatch(updateLanguages(languages)),
    updateConditionalModifiers: conditionalModifiers => dispatch(updateConditionalModifiers(conditionalModifiers)), 
  };
};
const mapStateToProps = state => {
  return {
    languages: state.languages.languages,
    conditionalModifiers: state.languages.conditionalModifiers
  };
};
class Languages extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Languages stackable grid row">
       <div className="conditionalModifiers Input">
       <strong>Conditional Modifiers:</strong>
          <textarea className="conditionalModifiersInput" rows="2"cols="50" value={this.props.conditionalModifiers} onChange={this.props.updateConditionalModifiers} />

       </div>
        <div className="languages Input">
          <strong>Languages:</strong><br/>
          <textarea className="languagesInput" rows="3"cols="50" value={this.props.languages} onChange={this.props.updateLanguages} />
        
       </div>
      </div>
       )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Languages)