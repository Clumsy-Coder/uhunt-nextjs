import React, { useState } from 'react';
import Link from 'next/link';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import StarIcon from '@material-ui/icons/Star';
import InfoIcon from '@material-ui/icons/Info';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    list: {
      width: 250,
    },
  }),
);

const appDrawerLinks = [
  {
    linkName: 'Home',
    url: '/',
    icon: <HomeIcon />,
  },
  {
    linkName: 'Favorites',
    url: '/favorites',
    icon: <StarIcon />,
  },
  // {
  //   linkName: 'Competitive programming',
  //   url: '/competitive-programming',
  //   icon: <BookIcon />,
  // },
  {
    linkName: 'About',
    url: '/about',
    icon: <InfoIcon />,
  },
];

const AppHeaderBar: React.FC = () => {
  const classes = useStyles();
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => setDrawerIsOpen(true);
  const closeDrawer = () => setDrawerIsOpen(false);

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            onClick={openDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            uHunt
          </Typography>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer open={drawerIsOpen} onOpen={openDrawer} onClose={closeDrawer}>
        <List>
          {appDrawerLinks.map(({ linkName, url, icon }) => (
            // using Material-UI ListItem as button to navigate NextJS pages
            // https://dev.to/ivandotv/using-next-js-link-component-with-material-ui-buttons-and-menu-items-3m6a
            <Link href={url} passHref key={linkName}>
              <ListItem button component='a' onClick={closeDrawer} className={classes.list}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={linkName} />
              </ListItem>
            </Link>
          ))}
        </List>
      </SwipeableDrawer>
    </div>
  );
};

export default AppHeaderBar;
