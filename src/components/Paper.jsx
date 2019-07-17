import React from 'react';
import { Responsive, WidthProvider } from "react-grid-layout";

import { withStyles } from "../lib/withStyles";
import { Styles } from "../styles/paper";

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const intialProps = {
    rowHeight: 30,
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    initialLayout: { lg: [] },
    onLayoutChange: (layout, layouts) => true
}
class Component extends React.Component {
    render() {
        const { klass, layouts, Structure } = this.props;
        return (
            <div className={klass.root}>
                <ResponsiveReactGridLayout {...intialProps} layouts={{ lg: layouts }} style={{ height: "100%", margin: 20 }}>
                    {Structure}
                </ResponsiveReactGridLayout>
            </div>
        );
    }
}

export const Paper = withStyles(Styles)(Component)