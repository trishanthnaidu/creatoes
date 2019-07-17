import React from 'react';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';

const Klass = (klass, type) => {
    return klass["cm-" + type]
}

const Dropdown = ({ content, klass }) => {
    const [open, setOpen] = React.useState(false);
    function handleClick() { setOpen(!open); }
    content = content.split(",");
    const name = content.splice(0, 1);
    const options = content.map(option => (
        <ListItem button className={klass["cm-dropdownNested"]}>
            <ListItemText primary={option} />
        </ListItem>
    ))
    return (
        <List component="nav" className={klass["cm-dropdownContainer"]}>
            <ListItem button onClick={handleClick}>
                <ListItemText primary={name} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {options}
                </List>
            </Collapse>
        </List>
    )
}

export const StructMappings = (type, klass) => {
    switch (type) {
        case "Title": {
            return {
                layouts: { "x": 0, "y": 0, "w": 3, "h": 1.5, "i": "0", "static": false },
                components: ({ content }) => <label className={Klass(klass, type)}>{content}</label>
            }
        }
        case "TextBox": {
            return {
                layouts: { "x": 0, "y": 0, "w": 2, "h": 2, "i": "0", "static": false },
                components: ({ content }) => <TextField className={Klass(klass, type)} label={content} margin="normal" />
            }
        }
        case "Divider": {
            return {
                layouts: { "x": 0, "y": 0, "w": 9, "h": 1, "i": "0", "static": false },
                components: ({ content }) => <Divider />
            }
        }
        case "Button": {
            return {
                layouts: { "x": 0, "y": 0, "w": 1, "h": 2, "i": "0", "static": false },
                components: ({ content }) => <Button className={Klass(klass, type)} variant="contained" color="primary">{content}</Button>
            }
        }
        case "Dropdown": {
            return {
                layouts: { "x": 0, "y": 0, "w": 2, "h": 2, "i": "0", "static": false },
                components: ({ content }) => <><Dropdown klass={klass} content={content} /></>
            }
        }
        case "Checkbox": {
            return {
                layouts: { "x": 0, "y": 0, "w": 2, "h": 1, "i": "0", "static": false },
                components: ({ content }) => <><FormControlLabel className={Klass(klass, type)} control={<Checkbox value="checkedC" />} label={content} /></>
            }
        }
        case "Radio": {
            return {
                layouts: { "x": 0, "y": 0, "w": 2, "h": 1, "i": "0", "static": false },
                components: ({ content }) => <><FormControlLabel className={Klass(klass, type)} control={<Radio value="checkedC" />} label={content} /></>
            }
        }
        default: { return }
    }
}