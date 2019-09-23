import { compose, withStateHandlers } from 'recompose';

export const withInputParameters = compose(
    withStateHandlers(),
);
