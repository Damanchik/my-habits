import React from 'react';
import MuiLink from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  to: string;
  label: string;
}

const styles = {
  color: 'white',
};

const Link = ({ label, to }: LinkProps) => {
  return (
    <MuiLink component={RouterLink} to={to} style={styles}>
      {label}
    </MuiLink>
  );
};

export default Link;
