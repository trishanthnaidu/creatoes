import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


import { Styles } from "../styles/creatoesApp";
import { withStyles } from '../lib/withStyles';
import { SidePanel } from './SidePanel';
import { Playground } from "./Playground";


const Header = ({ klass }) => {
    return (
        <div className={klass.root}>
            <AppBar position="static">
                <Toolbar className={klass.toolbar} variant="dense">
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