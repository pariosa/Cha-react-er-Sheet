import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateLanguages,
  updateConditionalModifiers, 
} from "../../js/actions/languagesActions";

const mapDispatchToProps = { 
    updateLanguages,
    updateConditionalModifiers 
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
    this.props = props;
  }

  render() {
    
    const{
      conditionalModifiers,
      languages,
      updateLanguages,
      updateConditionalModifiers
    } = this.props;

    return (
      <div className="Languages stackable grid row">
        <div className="conditionalModifiers Input">
          <strong>Conditional Modifiers:</strong>
          <textarea className="conditionalModifiersInput" rows="2" cols="50" value={conditionalModifiers} onChange={updateConditionalModifiers} />
        </div>
        <div className="languages Input">
          <strong>Languages:</strong>
          <br />
          <textarea className="languagesInput" rows="3" cols="50" value={languages} onChange={updateLanguages} />
        </div>
      </div>
       )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Languages)