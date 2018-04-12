import React, { PureComponent } from 'react';
import { Form, FormGroup, FormText, Label, Input } from 'reactstrap';

class FilterBar extends PureComponent {
  render() {
    return (
      <Form className="border-right w-25 ml-2">
        <FormGroup>
          <legend>Rating</legend>
        </FormGroup>
        <FormGroup check>

          <Label check>
            <Input type="checkbox" />{' '}
            5 Stars
          </Label>
        </FormGroup>
      </Form>
    );
  }
}

export default FilterBar;
