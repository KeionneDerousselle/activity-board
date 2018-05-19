import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveActivity } from '../activities/actions/activity.actions';
import moment from 'moment';
import ArchiveForm from './ArchiveForm';
import { Modal, notification } from 'antd';
const confirm = Modal.confirm;

const initialArchiveState = {
  type: 'until',
  timePeriodAmount: 0,
  timePeriod: 'days',
  date: null
};

class EditArchive extends React.Component {
  static getArchiveState = archivedUntil => ({
    type: initialArchiveState.type,
    timePeriodAmount: initialArchiveState.timePeriodAmount,
    timePeriod: initialArchiveState.timePeriod,
    date: moment(archivedUntil, 'YYYY-MM-DD')
  });

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.activity) {
      const { activity, activity: { archivedUntil } } = nextProps;      
      let newState = {};

      if (prevState.activity !== activity) {
        newState = {
          ...newState,
          activity: activity
        };
      }

      if(prevState.activity.archivedUntil !== archivedUntil) {
        newState = {
          ...newState,
          archive: archivedUntil ? 
            EditArchive.getArchiveState(archivedUntil) :
            initialArchiveState
        };
      }
      return newState;
    } 
    return null;
  }

  constructor(props) {
    super(props);

    const { activity, activity: { archivedUntil} } = props;

    this.state = {
      saving: false,
      activity: activity,
      archive: archivedUntil ? EditArchive.getArchiveState(archivedUntil) : initialArchiveState
    };
  }

  untilDateWasSelected = () => this.state.archive.type === 'until';

  handleOnChange = (name, value) => {
    const { archive } = this.state;
    this.setState({
      archive: {
        ...archive,
        [name]: value
      }
    });
  }

  calculateArchiveDate = () => {
    const { archive: { timePeriod, timePeriodAmount } } = this.state;
    const now = moment().startOf('day');
    const archiveDate = now.add(timePeriodAmount, timePeriod);
    return archiveDate;
  }

  getArchiveDate = untilDateWasSelected => {
    const { archive: { date } } = this.state;
    const archivalDate = untilDateWasSelected ?
      date.startOf('day') :
      this.calculateArchiveDate();
    return archivalDate;
  }

  handleOnSubmit = () => {
    const { archive: { timePeriod, timePeriodAmount } } = this.state;
    const { activity } = this.props;

    const untilDateWasSelected = this.untilDateWasSelected();
    const archiveDate = this.getArchiveDate(untilDateWasSelected);

    const displayFormat = 'dddd, MMM Do YYYY';
    const displayDate = archiveDate.format(displayFormat);
    const archivedUntilText = untilDateWasSelected ? `until ${displayDate}` : `for ${timePeriodAmount} ${timePeriod}`;

    const archiveDateAsString = archiveDate.format();

    this.setState({ saving: true });

    confirm({
      title: 'Are you sure?',
      content: `You are about to archive ${activity.title} ${archivedUntilText}. This means ${activity.title} will not be shown on the activities dashboard or be suggested until ${displayDate}.`,
      okText: 'Yes',
      cancelText: 'No',
      onOk: () => this.archiveActivity(archiveDateAsString),
      onCancel: () => {
        this.setState({
          saving: false,
          archive: initialArchiveState
        });
      },
    });
  }

  redirect = () => {
    const { activity, history } = this.props;
    history.push(`/activity/${activity.id}`);
  }

  archiveActivity = archiveDate => {
    const { activity, saveActivity } = this.props;
    activity.archivedUntil = archiveDate;
    this.setState({ saving: true });

    saveActivity(activity)
      .then(() => this.handleSaveArchiveSuccess())
      .catch(() => this.handleSaveArchiveFailed());
  };

  handleSaveArchiveSuccess = () => {
    const { activity: { title } } = this.props;
    this.setState({ saving: false });
    this.redirect();
    notification.success({
      message: 'Success!',
      description: `${title} was successfully archived.`,
      duration: 4
    });
  };

  handleSaveArchiveFailed = () => {
    this.setState({ saving: false });
    notification.error({
      message: 'Error',
      description: 'This activity could not be archived. Please validate all fields and try again.',
      duration: 4
    });
  };

  render() {
    const { archive, saving } = this.state;

    return (
      <ArchiveForm
        archive={archive}
        onSubmit={this.handleOnSubmit}
        onChange={this.handleOnChange}
        saving={saving}
      />
    );
  }
}

EditArchive.propTypes = {
  activity: PropTypes.object.isRequired,
  saveActivity: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const mapDispatchToProps = {
  saveActivity
};

export default withRouter(connect(null, mapDispatchToProps)(EditArchive));
