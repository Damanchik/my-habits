import React from 'react';
import MuiLink from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  to: string;
  label: string;
}

const Link = ({ label, to }: LinkProps) => {
  return (
    <MuiLink component={RouterLink} to={to} color="inherit">
      {label}
    </MuiLink>
  );
};

export default Link;
