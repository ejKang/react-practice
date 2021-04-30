import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import InputWithStyle from '../04/InputWithStyle';

storiesOf('InputWithStyle', module)
  .add('기본 설정', () => <InputWithStyle name="dd"></InputWithStyle>)
  .add('label example', () => <InputWithStyle name="name" label="Label :"></InputWithStyle>)
  .add('value example', () => (
    <InputWithStyle name="na" label="Label :" value="DoIt"></InputWithStyle>
  ))
  .add('errorMessage', () => (
    <InputWithStyle name="ss" label="Label: " errorMessage="EEERRROOOORRRRR"></InputWithStyle>
  ));
