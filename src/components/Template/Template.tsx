import React, { PropsWithChildren } from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';
import Drawer from '../Drawer';
import Logo from '../Logo';
import TemporaryAppBarAppBar from '../TemporaryAppBar';
import UseStyles from './Template.style';

interface OtherProps {}

type TemplateProps = PropsWithChildren<OtherProps>;

const Template = ({ children }: TemplateProps) => {
  const drawerWidth = 240;
  const classes = UseStyles();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));

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

/*
<List className={classes.list}>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography>Задания</Typography>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AssignmentTurnedInIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography>Успехи</Typography>
          </ListItemText>
        </ListItem>
      </List>
      <Divider />
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        wrap="wrap"
        className={classes.gridAvatar}
      >
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Input
            name="avatar-upload"
            className={classes.input}
            id="avatar-upload"
            type="file"
          />
          <label htmlFor="avatar-upload">
            <MenuItem onClick={handleClose}>Сменить аватар</MenuItem>
          </label>
          <MenuItem onClick={handleClose}>Выйти из аккаунта</MenuItem>
        </Menu>
        <IconButton onClick={handleClick}>
          <Avatar className={classes.avatar} />
        </IconButton>
        <Typography
          variant="body1"
          align="center"
          className={classes.typography}
        >
          Фёдор
        </Typography>
 */
