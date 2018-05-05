import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Form, InputNumber, Button, Divider, Select, DatePicker } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

const Div = styled.div({
  display: 'flex',
  justifyContent: 'flex-end'
});

class ArchiveForm extends React.Component {
  state = {
    inputDate: true,
    timePeriod: 'day',
    timePeriodAmount: 0
  };

  handleArchiveTypeChange = archiveType => this.setState({ inputDate: archiveType === 'until' });

  handleUntilDateChange = value => console.log(value);

  handleForTimePeriodChange = value => console.log(value);

  handleForTimePeriodAmountChange = value => console.log(value);

  render() {
    const { inputDate } = this.state;
    const { onSubmit, saving } = this.props;

    const untilContent =
      <FormItem>
        <DatePicker onChange={this.handleUntilDateChange} />
      </FormItem>;

    const forContent =
      <Fragment>
        <FormItem>
          <InputNumber min={1} onChange={this.handleForTimePeriodAmountChange}/>
        </FormItem>
        <FormItem>
          <Select defaultValue="day" onChange={this.handleForTimePeriodChange}>
            <Option value="day">day(s)</Option>
            <Option value="week">week(s)</Option>
            <Option value="month">month(s)</Option>
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
            onClick={onSubmit}
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
