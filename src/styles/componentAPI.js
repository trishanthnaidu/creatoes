import { makeStyles } from '@material-ui/core/styles';

export const Styles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    panelWrapper: {
        boxShadow: "none"
    },
    titleWrapper: {
        padding: 0
    },
    heading: {
        fontSize: theme.typography.pxToRem(13),
        flexBasis: '33.33%',
        flexShrink: 0
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(12)
    },
    panelDetails: {
        padding: "0",
        cursor: "pointer",
        width: "95%"
    },
    optionWrapper: {
        width: "100%"
    },
    Title: {
        fontSize: 22,
        fontWeight: 100
    },
    "cm-Title": {
        fontSize: 40,
        fontWeight: 100,
        fontFamily: "Roboto"
    },
    TextBox: {
        fontSize: 14
    },
    "cm-TextBox": {
        fontSize: 14,
        margin: "0 !important"
    },
    Divider: {
        height: 35,
        width: "85%"
    },
    DividerHr: {
        height: 2,
        margin: "18px 5px"
    },
    Button: {
        "& input": {
            borderBottom: "none",
            fontSize: 20,
            width: 80,
            padding: 0,
            color: "#fff",
            textAlign: "center"
        }
    },
    Dropdown: {
        width: "85%",

        "& input": {
            borderBottom: "none",
            fontSize: 14
        }
    },
    "cm-Button": {
        margin: 20
    },
    icon: {
        fontSize: 30,
        position: "absolute",
        margin: 3,
        left: "89%",

        "&:hover": {
            color: "#327d8e"
        }
    },
    "cm-dropdownContainer": {
        width: '100%',
        maxWidth: 400,
        backgroundColor: theme.palette.background.paper,
        padding: "0 !important",
        border: "solid 1px #eee"
    },
    "cm-dropdownNested": {
        paddingLeft: theme.spacing(4),
    },
}))