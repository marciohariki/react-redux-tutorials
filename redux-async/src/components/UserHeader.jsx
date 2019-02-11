import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
  render() {
    const {user} = this.props;
    if (!user) {
      return null;
    }

    return <div>{ user.name }</div>
  }
}

const mapStateToProps = (state, props) => {
  const user = state.users.find((user) => user.id === props.userId);
  return {user};
};

export default connect(mapStateToProps)(UserHeader);