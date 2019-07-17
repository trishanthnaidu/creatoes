import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';

import { appState } from 'rootz';
import { publish } from 'react-rootz'

import { Styles } from "../styles/componentAPI";
import { withStyles } from '../lib/withStyles';
import { StructMappings } from './StructureMaps';


let textInput = {
    "Title": "",
    "TextBox": ""
}
const onChange = evt => { textInput[evt.target.id] = evt.target }

const panelRows = [{
    type: "Title",
    body: klass => <Input className={klass.Title} id="Title" onChange={onChange} placeholder="Create Your Title Here" />
}, {
    type: "TextBox",
    body: klass => <Input className={klass.TextBox} id="TextBox" onChange={onChange} placeholder="Input Label" />
}, {
    type: "Divider",
    body: klass => <div className={klass.Divider}><Divider className={klass.DividerHr} /></div>
}, {
    type: "Button",
    body: klass => <Button variant="contained" color="primary"><Input className={klass.Button} id="Button" onChange={onChange} placeholder="Text" /></Button>
}, {
    type: "Dropdown",
    body: klass => <Input className={klass.Dropdown} id="Dropdown" onChange={onChange} placeholder="Name, option1, option2, ..." />
}, {
    type: "Checkbox",
    body: klass => <><Checkbox checked={true} value="checkedB" color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} /><Input className={klass.TextBox} id="Checkbox" onChange={onChange} placeholder="Checkbox Text" /></>
}, {
    type: "Radio",
    body: klass => <><Radio checked={true} value="checkedB" color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} /><Input className={klass.TextBox} id="Radio" onChange={onChange} placeholder="Radio Text" /></>
}];

const AccordianPanel = ({ expanded, setExpanded, handleChange, klass, panel, itr }) => (
    <ExpansionPanel expanded={expanded === `panel${itr}`} onChange={handleChange(`panel${itr}`)} className={klass.panelWrapper}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={klass.titleWrapper}>
            <Typography className={klass.heading}>{panel.type}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={klass.panelDetails}>
            <div className={klass.optionWrapper}>{panel.body(klass, panel.T)}</div>
            <Icon
                className={klass.icon}
                color="primary"
                onClick={evt => { onAddClick(panel.type, (textInput.hasOwnProperty(panel.type) && textInput[panel.type].value), klass); textInput.innerHTML = "" }}
            >add_circle
            </Icon>
        </ExpansionPanelDetails>
    </ExpansionPanel>
)

const onAddClick = (type, textInput = null, klass) => {
    const playgroundState = appState.get("$Playground");
    const structMaps = StructMappings(type, klass);
    const layouts = [...playgroundState.layouts, structMaps.layouts];
    const index = layouts[layouts.length - 1].i = (layouts.length - 1).toString();
    const newStructure = (
        <div key={index}>
            <structMaps.components content={textInput} />
        </div>
    )
    const Structure = [...playgroundState.Structure, newStructure];

    appState.set("$Playground", {
        layouts,
        Structure
    })
    publish("$Playground");
}

const Component = ({ klass }) => {
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = panel => (event, isExpanded) => { setExpanded(isExpanded ? panel : false); };
    const props = { expanded, setExpanded, handleChange, klass }
    const Rows = panelRows.map((row, itr) => <AccordianPanel {...props} panel={row} key={itr} itr={itr} />)
    return (
        <div className={klass.root}>
            {Rows}
        </div>
    );
}

export const ComponentAPI = withStyles(Styles)(Component);