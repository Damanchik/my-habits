import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  registrationBackground: {
    height: 'calc(100% - 64px)',
    backgroundSize: 'cover',
  },
  formStyle: {
    background: 'none',
    width: 'auto',
    height: '60vh',
    minHeight: '550px',
  },
  gridStyle: {
    height: '100%',
    width: '100%',
  },
  boxStyle: {
    background: 'none',
    width: '290px',
    height: '70px',
  },
  textFieldStyle: {
    width: '290px',
  },
  errorStyle: {
    color: 'red',
  },
});

export default useStyles;
