import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ButtonDropdown from '../../src/common/ButtonDropdown'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const dropdownItems = [
  {
    name: 'Item 1',
    value: 'item-1'
  },
  {
    name: 'Item 2',
    value: 'item-2'
  },
  {
    name: 'Item 3',
    value: 'item-3'
  }
];

storiesOf('Button Dropdown', module)
  .add('with items', () => 
    <ButtonDropdown name="sample-dropdown" 
      dropdownItems={dropdownItems} 
      onItemSelected={action('item selected')}
    />);
