import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

import { Styles } from "../styles/creatoesApp";
import { withStyles } from '../lib/withStyles';
import { SidePanel } from './SidePanel';
import { Playground } from "./Playground";


const Header = ({ klass }) => {
    const logo = "M3 5v6h5L7 7l4 1V3H5c-1.1 0-2 .9-2 2zm5 8H3v6c0 1.1.9 2 2 2h6v-5l-4 1 1-4zm9 4l-4-1v5h6c1.1 0 2-.9 2-2v-6h-5l1 4zm2-14h-6v5l4-1-1 4h5V5c0-1.1-.9-2-2-2z";
    return (
        <div className={klass.root}>
            <AppBar position="static" className={klass.appBar}>
                <Toolbar className={klass.toolbar} variant="dense">
                    <IconButton aria-label="Delete">
                        <SvgIcon>
                            <path d={logo} fill="#fff" />
                        </SvgIcon>
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Creatoes
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

const Body = ({ klass, children }) => <div className={klass.body}>{children}</div>

const Component = props => (
    <Fragment>
        <Header {...props} />
        <Body {...props}>
            <SidePanel {...props} />
            <Playground />
        </Body>
    </Fragment>
)

export const CreatoesApp = withStyles(Styles)(Component);