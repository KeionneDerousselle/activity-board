import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Form, InputNumber, Button, Divider, Select, DatePicker } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const Option = Select.Option;

const Div = styled.div({
  display: 'flex',
  justifyContent: 'flex-end'
});

const dateFormat = 'MM/DD/YYYY';

class ArchiveForm extends React.Component {
  state = {
    inputDate: true,
    timePeriod: 'days',
    timePeriodAmount: 0,
    untilDate: ''
  };

  handleArchiveTypeChange = archiveType => this.setState({ inputDate: archiveType === 'until' });

  handleUntilDateChange = (dateAsMoment, dateString) => {
    const selectedArchiveDate = moment(dateString, dateFormat);
    // const archiveoffset = selectedArchiveDate.utcOffset();
    const startOfArchiveDate = selectedArchiveDate.startOf('day');

    // const now = moment().utcOffset(archiveoffset);

    // console.log(`is same or after: ${selectedArchiveDate.isSameOrAfter(now, 'day')}`);
    // console.log(`${selectedArchiveDate.toString()}`);
    // console.log(`${startOfArchiveDate.toString()}`);

    // if(then.isBefore(now, 'day')) ...validation error...can only pick today or later
    // if(then.isBefore(now, 'day')) ... remove from suggestions and dashboard
    // if(then.isSame(now, 'day')) ... display on dashboard, add back to suggestions

    this.setState({ untilDate: startOfArchiveDate });
  }

  handleForTimePeriodChange = value => this.setState({ timePeriod: value });

  handleForTimePeriodAmountChange = value => this.setState({ timePeriodAmount: value });

  handleOnSubmit = () => {
    const { inputDate, untilDate, timePeriod, timePeriodAmount } = this.state;
    const { onSubmit } = this.props;
    const displayFormat = 'dddd, MMM Do YYYY';

    let archivalDate = inputDate ? untilDate : this.getArchivalDate();
    const displayDate = archivalDate.format(displayFormat);
    let archivedUntilText = inputDate ? `until ${displayDate}` : `for ${timePeriodAmount} ${timePeriod}`;
    
    onSubmit(archivalDate, archivedUntilText, displayDate);
  }

  getArchivalDate = () => {
    const { timePeriod, timePeriodAmount } = this.state;
    const now = moment().startOf('day');
    const archivalDate = now.add(timePeriodAmount, timePeriod);
    return archivalDate;
  }

  render() {
    const { inputDate } = this.state;
    const { saving } = this.props;

    const untilContent =
      <FormItem>
        <DatePicker onChange={this.handleUntilDateChange} format={dateFormat} />
      </FormItem>;

    const forContent =
      <Fragment>
        <FormItem>
          <InputNumber min={1} onChange={this.handleForTimePeriodAmountChange} />
        </FormItem>
        <FormItem>
          <Select defaultValue="days" onChange={this.handleForTimePeriodChange}>
            <Option value="days">day(s)</Option>
            <Option value="weeks">week(s)</Option>
            <Option value="months">month(s)</Option>
          </Select>
        </FormItem>
      </Fragment>;

    return (
      <Form layout="inline">
        <FormItem colon={false} label="Archive this activity">
          <Select defaultValue="until" onChange={this.handleArchiveTypeChange}>
            <Option value="until">until</Option>
            <Option value="for">for</Option>
          </Select>
        </FormItem>
        {inputDate ? untilContent : forContent}
        <Divider />
        <Div>
          <Button
            type="primary"
            onClick={this.handleOnSubmit}
            loading={saving}
          >
            Submit
          </Button>
        </Div>
      </Form>
    );
  }
}

ArchiveForm.propTypes = {
  activity: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

const WrappedForm = Form.create()(ArchiveForm);

export default WrappedForm;
