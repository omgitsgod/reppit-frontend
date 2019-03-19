import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MailIcon from '@material-ui/icons/Mail';
import {FitnessCenter, PowerSettingsNew, CenterFocusStrong, History, RssFeed, Favorite, Album, LocationOn, Settings, Home } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    left: false,
    anchorHuh: null,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      left: open,
    });
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMaybe = event => {
    this.setState({ anchorHuh: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  };


  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const sideList = (
      <div className={classes.list}>


      <ListItem button>

      <ListItemIcon className={classes.menuButton} onClick={this.toggleDrawer('left', true)} aria-label="Menu">
        <MenuIcon />
      </ListItemIcon>
      <ListItemText primary="Reppit" />
      </ListItem>
        <Divider />
        <Divider />
        <List>

        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
        <ListItem button>

        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Home" />
        </ListItem></Link>

        <Link to='/createworkout' style={{ textDecoration: 'none', color: 'white' }}>
        <ListItem button>

        <ListItemIcon>
          <FitnessCenter />
        </ListItemIcon>
        <ListItemText primary="Work Out" />
        </ListItem></Link>

        <Link to='/workouts' style={{ textDecoration: 'none', color: 'white' }}>
        <ListItem button>

        <ListItemIcon>
          <CenterFocusStrong />
        </ListItemIcon>
        <ListItemText primary="Saved Routines" />
        </ListItem></Link>


        <Link to='/calendar' style={{ textDecoration: 'none', color: 'white' }}>
        <ListItem button>

        <ListItemIcon>
          <History />
        </ListItemIcon>
        <ListItemText primary="Past Workouts" />
        </ListItem></Link>


        </List>
        <Divider />
        <List>
        <Link to='/createworkout' style={{ textDecoration: 'none', color: 'white' }}>
        <ListItem button disabled={true}>

        <ListItemIcon>
          <RssFeed />
        </ListItemIcon>
        <ListItemText primary="Feed" />
        </ListItem></Link>
        </List>
        <Link to='/createworkout' style={{ textDecoration: 'none', color: 'white' }}>
        <ListItem button disabled={true}>

        <ListItemIcon>
          <Favorite />
        </ListItemIcon>
        <ListItemText primary="Friends" />
        </ListItem></Link>
        <List>

        <Link to='/createworkout' style={{ textDecoration: 'none', color: 'white' }}>
        <ListItem button disabled={true}>

        <ListItemIcon>
          <Album />
        </ListItemIcon>
        <ListItemText primary="Challenges" />
        </ListItem></Link>

        <Link to='/createworkout' style={{ textDecoration: 'none', color: 'white' }}>
        <ListItem button disabled={true}>

        <ListItemIcon>
          <LocationOn />
        </ListItemIcon>
        <ListItemText primary="Gyms" />
        </ListItem></Link>

        <Link to='/createworkout' style={{ textDecoration: 'none', color: 'white' }}>
        <ListItem button disabled={true}>

        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary="Settings" />
        </ListItem></Link>
          </List>
      </div>
    );



    return (
      <div className={classes.root}>

        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} onClick={this.toggleDrawer('left', true)}  color="inherit" aria-label="Menu">
              <FitnessCenter />
            </IconButton>

            <Typography variant="h6" color="inherit" className={classes.grow}>

            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>  Reppit </Link>
            </Typography>

            {auth ? (
              <div>
                <IconButton >
                <MailIcon />
                </IconButton>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}><Link to='/profile' style={{ textDecoration: 'none', color: 'white' }}>Profile </Link></MenuItem>
                  <MenuItem onClick={this.handleClose}>Edit Profile</MenuItem>
                  <MenuItem onClick={() => this.props.handleUser({})}>Logout</MenuItem>

                </Menu>
              </div>
            ) : (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <PowerSettingsNew />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem ><FormGroup>
                    <FormControlLabel
                      control={
                        <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
                      }
                      label={auth ? 'Logout' : 'Login'}
                    />
                  </FormGroup></MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>

        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>

      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
