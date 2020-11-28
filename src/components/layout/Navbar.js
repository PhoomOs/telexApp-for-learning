import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyButton from '../../util/MyButton';
import PostPost from '../post/PostPost';
import Notifications from './Notifications';
import TextField from '@material-ui/core/TextField';
// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import SearchField from './SearchField';
// Icons
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
class Navbar extends Component {
  render() {
    // console.log(this.props)
    const { authenticated } = this.props;
    return (
      <AppBar elevation={0}>
        <Toolbar>
          {authenticated ? (
            <Fragment>
              
              <img
                src='https://firebasestorage.googleapis.com/v0/b/telex-1f60c.appspot.com/o/xxxx.png?alt=media&token=28474beb-ae53-4601-88c8-562739bce3dd'
                alt='monkey'
                style={{ width:90, marginRight: 840 }}
              />
              <SearchIcon style={{marginTop:10,marginRight:10}}></SearchIcon>
              <SearchField></SearchField>
              <PostPost />
              <Link to='/'>
                <MyButton tip='Home'>
                  <HomeIcon />
                </MyButton>
              </Link>
              <Notifications />
            </Fragment>
          ) : (
            <Fragment>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/telex-1f60c.appspot.com/o/xxxx.png?alt=media&token=28474beb-ae53-4601-88c8-562739bce3dd'
                alt='monkey'
                style={{ width:100, marginRight: 1000 }}
              />
              <div style={{marginTop:5, marginLeft:10}}>
                <Button color='inherit' component={Link} to='/'>
                Home
              </Button>
              <Button color='inherit' component={Link} to='/login'>
                Login
              </Button>
              <Button color='inherit' component={Link} to='/signup'>
                Signup
              </Button>
              </div>
              
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  authenticated: state.user.authenticated
  // posts : state.posts
});

export default connect(mapStateToProps)(Navbar);
