import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activedEdit = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivedEdit = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatusProfile(this.state.status);
  };

  onChangeStatus = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }

   
  }

  render() {
   

    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activedEdit}>
              {this.props.status || "--------"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onChangeStatus}
              autoFocus
              onBlur={this.deactivedEdit}
              value={this.state.status}
              type="text"
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
