import React, { Fragment } from 'react';
import Divider from '@material-ui/core/Divider';

import { Styles } from '../styles/sidePanel';
import { withStyles } from '../lib/withStyles';
import { ComponentAPI } from "../components/ComponentAPI";

const Component = ({ klass }) => {
    return (
        <Fragment>
            <div className={klass.container}>
                <div className={klass.title}>Components</div>
                <Divider />
                <ComponentAPI />
            </div>
        </Fragment>
    )
}

export const SidePanel = withStyles(Styles)(Component);