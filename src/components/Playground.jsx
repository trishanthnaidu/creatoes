import React from 'react';
import { withStyles } from "../lib/withStyles";
import { Styles } from "../styles/playground";
import { Paper } from "./Paper";

const Component = ({ klass }) => (
    <div className={klass.root}>
        <Paper />
    </div>
)

export const Playground = withStyles(Styles)(Component)