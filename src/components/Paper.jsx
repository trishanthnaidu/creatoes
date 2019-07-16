import React from 'react';
import { withStyles } from "../lib/withStyles";
import { Styles } from "../styles/paper";

const Component = ({ klass }) => (
    <div className={klass.root}></div>
)

export const Paper = withStyles(Styles)(Component)