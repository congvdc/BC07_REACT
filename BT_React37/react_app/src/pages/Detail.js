import React, { Component } from 'react'
import HomePage from './HomePage';
import { Outlet } from 'react-router-dom';

export default class Detail extends Component {
  render() {
    // let searchParams = new URLSearchParams();
    // console.log(searchParams.get('id'));
    return (
      <div>
        Detail
        <Outlet />
        </div>
    )
  }
}
