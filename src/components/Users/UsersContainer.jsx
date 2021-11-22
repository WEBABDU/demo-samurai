import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  requestUsers,
} from "../../redux/users-reducer";
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getIsFollowingProgress } from "../../redux/users-selectors";
import Preloder from "../cammon/Preloader/Preloader";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloder /> : null}

        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChanged={this.onPageChanged}
          isFollowingProgress={this.props.isFollowingProgress}
        />
      </>
    );
  }
}

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     isFollowingProgress: state.usersPage.isFollowingProgress,
//   };
// };
let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isFollowingProgress: getIsFollowingProgress(state),
  };
};

export default compose(
  
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    requestUsers,
  })
)(UsersContainer)



