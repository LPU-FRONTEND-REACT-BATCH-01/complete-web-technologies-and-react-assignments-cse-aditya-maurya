import React, { Component } from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

export default class HomeLayout extends Component {
  render() {
    return (
      <div>
       <NavBar />
        <Outlet />
        <Footer />
      </div>
    );
  }
}

// export default HomeLayout
