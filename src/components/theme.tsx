import { createMuiTheme } from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: '#ffffff',
    },
  },
});

export default theme;
