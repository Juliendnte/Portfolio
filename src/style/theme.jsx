import { ThemeProvider } from 'styled-components';
import PropTypes from "prop-types";

import theme from "./default";
import GlobalStyles from './Global';

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
    </ThemeProvider>
);

Theme.propTypes = {
    children: PropTypes.node.isRequired,
};


export default Theme;