import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Container, Box } from '../src/';

storiesOf('Box', module)
  .addDecorator(story => (
    <Container>
      {story()}
    </Container>
  ))
  .add('Box', () =>
    <Box>
      A white <b>box</b> to contain other elements.
    </Box>,
  );
