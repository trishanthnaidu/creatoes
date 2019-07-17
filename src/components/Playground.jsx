import React from 'react';
import { withStyles } from "../lib/withStyles";
import { Styles } from "../styles/playground";
import { Paper } from "./Paper";
import { subscribe } from 'react-rootz';
import { appState } from 'rootz';

class Component extends React.Component {
    constructor(props) {
        super(props);
        subscribe({
            name: "Playground",
            scope: this,
            state: {
                layouts: [],
                Structure: []
            }
        })
    }
    render() {
        const { klass } = this.props;
        const $state = appState.get("$Playground");
        return (
            <div className={klass.root}>
                <Paper {...$state} />
            </div>
        )
    }
}

export const Playground = withStyles(Styles)(Component)