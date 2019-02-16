import React from 'react';
import { connect } from 'react-redux';
import {editStream, fetchStream} from "../../actions";
import StreamForm from "./StreamForm";
import * as _ from "lodash";

class StreamEdit extends React.Component {
  componentDidMount() {
    const streamId = this.props.match.params.id;
    this.props.fetchStream(streamId);
  }

  onSubmit = formValues => {
    const streamId = this.props.match.params.id;
    this.props.editStream(streamId, formValues)
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
};

const mapStateToProps = (state, props) => {
  const streamId = props.match.params.id;
  return { stream: state.streams[streamId] }
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);