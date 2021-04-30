import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from '../03-8-9-10/Input';

storiesOf('Input', module)
  .add('기본 설정', () => <Input name={'Naaa'} />)
  .add('Label 예제', () => <Input name={'sss'} label={'Name : '}></Input>)
  .add('OnChange 예제', () => <Input name="nnn" onChange={action('onChange 이벤트 발생')}></Input>);
