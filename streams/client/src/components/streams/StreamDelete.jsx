import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Modal from "../Modal";
import history from "../../history";
import {deleteStream, fetchStream} from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    const streamId = this.props.match.params.id;
    this.props.fetchStream(streamId);
  }

  deleteStream = () => {
    this.props.deleteStream(this.props.stream.id);
  };

  renderActions() {
    return (
      <>
        <button onClick={this.deleteStream} className="ui primary button">Delete</button>
        <Link to='/' className="ui button">Cancel</Link>
      </>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?"
    }
    return `Are you sure you want to delete this stream title: ${this.props.stream.title}?`
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    )
  }
}

const mapStateToProps = (state, props) => {
  const streamId = props.match.params.id;
  return { stream: state.streams[streamId] }
};

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);