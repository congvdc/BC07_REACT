import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

export default class
  extends Component {
  state = {
    trangThai: false,
  };
  render() {
    if (this.state.trangThai) {
      return <Navigate to='/home' replace={true} />
    }
    return (
      <div>
        <img src='https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg' />
        <button className='btn btn-danger'
          onClick={() => {
            this.setState({
              trangThai: true,
            });
          }}
        >Quay về trang chủ</button>
      </div>
    )
  }
}
