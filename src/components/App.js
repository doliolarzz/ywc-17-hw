import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './TopNav';
import Banner from './Banner'
import Content from './Content'
import Footer from './Footer'
import { actions } from '../actions';

//ระบบ search, โชว์สถิติ, slide slide hamburger menu
function App(props) {

  const { getData } = props;

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <TopNav navbarItems={props.data.navbarItems}/>
      <Banner />
      <Content {...props}/>
      <Footer />
    </div>
  );
}

function mapStateToProps(state) {
  const { data, loading } = state.data;
  return { data, loading };
}
const mapDispatchToProps = {
  getData: actions.getData
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
