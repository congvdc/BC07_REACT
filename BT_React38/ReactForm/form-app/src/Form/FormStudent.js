import React, { Component } from 'react'

export default class FormStudent extends Component {
  state = {
    values: {
      id: '',
      hoTen: '',
      sdt: '',
      email: '',
    },
    errors: {
      id: '',
      hoTen: '',
      sdt: '',
      email: '',
    },
    activeButton: true,
  };
  getValueInput = (event) => {
    let { value, id } = event.target;
    let newValue = this.state.values;
    newValue[id] = value;

    let newError = this.state.errors;
    let type = event.target.getAttribute('data-type');

    if (newValue[id] == '') {
      newError[id] = `${id} không được để rỗng`;
    } else {
      newError[id] = '';

      switch (type) {
        case 'number':
          {
            let regexNumber = /^[0-9]*$/;
            let result = regexNumber.test(newValue[id]);
            newError[id] = result ? '' : id + ' phải là số';
          }
          break;
        case 'letter':
          {
            let regexLetter = /^[\p{L} ]+$/u;
            let result = regexLetter.test(newValue[id]);
            newError[id] = result ? '' : id + ' phải là chữ';
          }
          break;
      }
    }

    let valid = false;
    for (let item in this.state.errors) {
      if (this.state.errors[item] !== '' || this.state.values == '') {
        valid = true;
      }
    }

    this.setState({
      values: newValue,
      errors: newError,
      activeButton: valid,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let sinhVien = { ...this.state.values };
    this.props.themSinhVien(sinhVien);
  };
  updateSinhVien = () => {
    this.setState();
  };
  render() {
    const { id, hoTen, sdt, email } = this.state.errors;
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className='card text-black bg-opacity-50'
        >
          <div className='card-body'>
            <div className='row mb-3'>
              <div className='col-6'>
                <label htmlFor=''>Mã SV</label>
                <input
                  onChange={this.getValueInput}
                  className='form-control'
                  type='text'
                  id='id'
                  value={this.state.values.id}
                />
                <p>{id}</p>
              </div>
              <div className='col-6'>
                <label htmlFor=''>Họ tên</label>
                <input
                  onChange={this.getValueInput}
                  className='form-control'
                  type='text'
                  data-type='letter'
                  id='hoTen'
                  value={this.state.values.hoTen}
                />
                <p>{hoTen}</p>
              </div>
            </div>
            <div className='row mb-3'>
              <div className='col-6'>
                <label htmlFor=''>Số điện thoại</label>
                <input
                  onChange={this.getValueInput}
                  className='form-control'
                  type='text'
                  data-type='number'
                  id='sdt'
                  value={this.state.values.sdt}
                />
                <p>{sdt}</p>
              </div>
              <div className='col-6'>
                <label htmlFor=''>Email</label>
                <input
                  onChange={this.getValueInput}
                  className='form-control'
                  type='text'
                  id='email'
                  value={this.state.values.email}
                />
                <p>{email}</p>
              </div>
            </div>
          </div>
          <div className='card-footer'>
            <button
              disabled={this.state.activeButton}
              className='btn btn-success me-3'
              type='submit'
            >
              Thêm sinh viên
            </button>
            <button
              className='btn btn-warning'
              onClick={() => {
                let sinhVien = { ...this.state.values };
                this.props.capNhatSinhVien(sinhVien);
              }}
              type='button'
            >
              Cập nhật
            </button>
          </div>
        </form>
      </div>
    );
  }
}
