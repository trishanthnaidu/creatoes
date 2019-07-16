import { makeStyles } from '@material-ui/core/styles';

export const Styles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        fontFamily: "Open Sans",
        position: "absolute",
        width: "100%",
        zIndex: 1,
        boxSizing: "border-box"
    },
    body: {
        position: "absolute",
        width: "100%",
        top: "48px",
        height: "95%",
        boxSizing: "border-box",
        display: "flex",
        zIndex: 0
    },
    appBar: {
        backgroundColor: "#3f9fb5"
    }
}))

