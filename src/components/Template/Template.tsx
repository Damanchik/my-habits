import React, { PropsWithChildren } from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';
import Drawer from '../Drawer';
import Logo from '../Logo';
import TemporaryAppBarAppBar from '../TemporaryAppBar';
import MainMenu from '../MainMenu/MainMenu';

interface OtherProps {}

type TemplateProps = PropsWithChildren<OtherProps>;

const Template = ({ children }: TemplateProps) => {
  const drawerWidth = 240;
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <>
      <TemporaryAppBarAppBar />
      <Drawer>
        <Logo />
        {<MainMenu />}
      </Drawer>
      <main
        style={{
          marginLeft: isXs ? 0 : drawerWidth,
          marginTop: isXs ? theme.mixins.toolbar.height : 0,
        }}
      >
        {children}
      </main>
    </>
  );
};

export default Template;
