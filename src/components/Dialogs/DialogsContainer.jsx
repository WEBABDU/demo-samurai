import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedurect } from "../../hoc/withAuthRedirect.js";
import { addMessageActionCreator } from "../../redux/dialogs_reducer.js";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    OnAddMessage: (newMessageBody) =>
      dispatch(addMessageActionCreator(newMessageBody)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedurect
)(Dialogs);
