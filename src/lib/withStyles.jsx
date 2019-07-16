import React from 'react';

export const withStyles = styles => WrappedComponent => () => <WrappedComponent klass={styles()} />