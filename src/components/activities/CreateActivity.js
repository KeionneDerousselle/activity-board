import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActivityPageLayout } from '../layout';
import EditActivity from './EditActivity';

const title = 'Create An Activity';

class CreateActivity extends React.Component {
  render() {
    const { tags } = this.props;

    const tagsObj = tags.items.reduce((result, item) => {
      result[item.id] = item.name;
      return result;
    }, {});

    return (
      <ActivityPageLayout
        title={title}
        content={
          <EditActivity
            tags={tagsObj}
          />
        }
      />
    );
  }
}

CreateActivity.propTypes = {
  tags: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  tags: state.tags
});

export default connect(mapStateToProps)(CreateActivity);
