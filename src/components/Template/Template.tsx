import React, { PropsWithChildren } from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';
import Drawer from '../Drawer';
import Logo from '../Logo';
import TemporaryAppBarAppBar from '../TemporaryAppBar';

interface OtherProps {}

type TemplateProps = PropsWithChildren<OtherProps>;

const Template = ({ children }: TemplateProps) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const drawerWidth = 240;

  return (
    <>
      <TemporaryAppBarAppBar />
      <Drawer>
        <Logo />

        {/*<MainMenu  Здесь и будет твой сайдбар, и задай ширину 240 у Drawer через classes/>*/}
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
