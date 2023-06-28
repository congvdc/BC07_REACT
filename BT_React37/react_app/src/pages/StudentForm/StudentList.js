import React, { Component } from 'react'
import FormStudent from './FormStudent';

export default class StudentList extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <FormStudent />
                    <div>
                        <table className='table' cellPadding={20}>
                            <thead className='bg-dark text-white'>
                                <td>Mã SV</td>
                                <td>Họ tên</td>
                                <td>Số điện thoại</td>
                                <td>Email</td>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
