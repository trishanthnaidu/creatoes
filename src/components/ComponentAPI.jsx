import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Styles } from "../styles/componentAPI";
import { withStyles } from '../lib/withStyles';

const panelRows = [{
    title: "Title",
    body: "Loren Ipsum"
}, {
    title: "TextBox",
    body: "Loren Ipsum"
}, {
    title: "Label",
    body: "Loren Ipsum"
}, {
    title: "Button",
    body: "Loren Ipsum"
}, {
    title: "Dropdown",
    body: "Loren Ipsum"
}, {
    title: "List",
    body: "Loren Ipsum"
}, {
    title: "Checkbox",
    body: "Loren Ipsum"
}, {
    title: "Radio",
    body: "Loren Ipsum"
}];

const AccordianPanel = ({ expanded, setExpanded, handleChange, klass, panel, itr }) => (
    <ExpansionPanel expanded={expanded === `panel${itr}`} onChange={handleChange(`panel${itr}`)} className={klass.panelWrapper}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={klass.titleWrapper}>
            <Typography className={klass.heading}>{panel.title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Typography>{panel.body}</Typography>
        </ExpansionPanelDetails>
    </ExpansionPanel>
)

const Component = ({ klass }) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const props = { expanded, setExpanded, handleChange, klass }
    const Rows = panelRows.map((row, itr) => <AccordianPanel {...props} panel={row} key={itr} itr={itr} />)
    return (
        <div className={klass.root}>
            {Rows}
        </div>
    );
}

export const ComponentAPI = withStyles(Styles)(Component);