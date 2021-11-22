import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedurect } from "../../hoc/withAuthRedirect";
import {
  getProfile,
  getStatusProfile,
  updateStatusProfile,
} from "../../redux/profile_reducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUser;
      if(!userId){
        this.props.history.push('/login')
      }
    }
    this.props.getProfile(userId);
    this.props.getStatusProfile(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatusProfile={updateStatusProfile}
      />
    );
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUser: state.auth.userId,
  isAuth: state.auth.isAuth
});

export default compose(
  withAuthRedurect,
  withRouter,
  connect(mapStateToProps, {
    getProfile,
    getStatusProfile,
    updateStatusProfile,
  })
)(ProfileContainer);
