import React, { Component } from 'react'

export default class ItemDetail extends Component {
  render() {
    let url = window.location.href.split('/');
    let id = url.length - 1;
    console.log(id);

    return <div>ItemDetail</div>;
  }
}
