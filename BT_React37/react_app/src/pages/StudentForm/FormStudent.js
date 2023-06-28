import React, { Component } from 'react'

export default class FormStudent extends Component {
    render() {
        return (
            <div>
                <form className='card text-white bg-primary'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-6'>
                                <label htmlFor=''>Mã SV</label>
                                <input className='form-control' type='text' id='id' />
                            </div>
                            <div className='col-6'>
                                <label htmlFor=''>Họ tên</label>
                                <input className='form-control' type='text' id='hoTen' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <label htmlFor=''>Số điện thoại</label>
                                <input className='form-control' type='text' id='sdt' />
                            </div>
                            <div className='col-6'>
                                <label htmlFor=''>Email</label>
                                <input className='form-control' type='text' id='email' />
                            </div>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <button className='btn btn-primary me-3'>Thêm sinh viên</button>
                        <button className='btn btn-warning'>Cập nhật</button>
                    </div>
                </form>
            </div>
        );
    }
}
