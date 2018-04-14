import React from 'react';

import { storiesOf } from '@storybook/react';
import { FilterBar } from '../../src/components';
import styled, {css} from 'react-emotion'

const Container = styled('div')`
  background:grey;
`

storiesOf('Filter Bar', module)
  .add('basic', () => <Container><FilterBar/></Container>);
