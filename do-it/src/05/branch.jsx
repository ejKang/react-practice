import React from 'react';
import branch from 'recompose/branch';
function isLoading(props) {
  return props.isLoading;
}

function LoadingButton(props) {
  return <Button disabled> Loading.. </Button>;
}

export default branch(isLoading, () => LoadingButton)(Button);

export const BB = branch(
  ({ isLoading }) => isLoading,
  () => () => <Button disabled> Loading.. </Button>,
)(Button);
