import { makeStyles } from '@material-ui/core/styles';

export const Styles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        fontFamily: "Open Sans",
        position: "absolute",
        width: "100%",
        zIndex: 1
    },
    body: {
        position: "absolute",
        width: "100%",
        top: "50px",
        height: "95%",
        boxSizing: "border-box",
        display: "flex",
        zIndex: 0
    }
}))

