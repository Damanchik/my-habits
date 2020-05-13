import React from 'react';
import MuiLink from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  path: string;
  LinkName: string;
}

const styles = {
  color: 'white',
};

/**
 * Компонент для комбинирования react-router и material-ui
 */

const LinkTo = ({ LinkName, path }: LinkProps) => {
  return (
    <MuiLink component={RouterLink} to={path} style={styles}>
      {LinkName}
    </MuiLink>
  );
};

export default LinkTo;
