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
    }
}))