import React from 'react';

import { storiesOf } from '@storybook/react';
import { FilterBar } from '../../src/components';

storiesOf('Filter Bar', module)
  .add('basic', () => <FilterBar />);
