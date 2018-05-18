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

const dateFormat = 'MM/DD/YYYY';

class ArchiveForm extends React.Component {
  handleUntilDateChange = (dateAsMoment) => {
    const { onChange } = this.props;
    // const archiveoffset = selectedArchiveDate.utcOffset();
    onChange('date', dateAsMoment);
    // const now = moment().utcOffset(archiveoffset);

    // console.log(`is same or after: ${selectedArchiveDate.isSameOrAfter(now, 'day')}`);
    // console.log(`${selectedArchiveDate.toString()}`);
    // console.log(`${startOfArchiveDate.toString()}`);

    // if(then.isBefore(now, 'day')) ...validation error...can only pick today or later
    // if(then.isBefore(now, 'day')) ... remove from suggestions and dashboard
    // if(then.isSame(now, 'day')) ... display on dashboard, add back to suggestions
  }

  render() {
    const { saving, onChange, archive, onSubmit } = this.props;

    const untilContent =
      <FormItem>
        <DatePicker 
          value={archive.date}
          onChange={this.handleUntilDateChange} 
          format={dateFormat} 
        />
      </FormItem>;

    const forContent =
      <Fragment>
        <FormItem>
          <InputNumber 
            min={1}
            value={archive.timePeriodAmount}
            onChange={value => onChange('timePeriodAmount', value)} 
          />
        </FormItem>
        <FormItem>
          <Select value={archive.timePeriod} onChange={value => onChange('timePeriod', value)}>
            <Option value="days">day(s)</Option>
            <Option value="weeks">week(s)</Option>
            <Option value="months">month(s)</Option>
          </Select>
        </FormItem>
      </Fragment>;

    return (
      <Form layout="inline">
        <FormItem colon={false} label="Archive this activity">
          <Select value={archive.type} onChange={value => onChange('type', value)}>
            <Option value="until">until</Option>
            <Option value="for">for</Option>
          </Select>
        </FormItem>
        {archive.type === 'until' ? untilContent : forContent}
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
  archive: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

const WrappedForm = Form.create()(ArchiveForm);

export default WrappedForm;
