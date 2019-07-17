import React from 'react';
import ReactDOM from 'react-dom';
import { CreatoesApp } from './components/CreatoesApp';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#3f9fb5"
        }
    }
})

const App = () => (
    <MuiThemeProvider theme={theme}>
        <CreatoesApp />
    </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('creatoesAppRoot'));
