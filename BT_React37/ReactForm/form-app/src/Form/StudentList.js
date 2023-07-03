import React, { Component, createRef } from 'react'
import FormStudent from './FormStudent';

export default class StudentList extends Component {
    constructor() {
        super();
        this.ref = createRef();
    }
    state = {
        arrSV: [],
    };
    themSinhVien = (sinhVien) => {
        let newArrSV = [...this.state.arrSV];
        newArrSV.push(sinhVien);
        this.setState({
            arrSV: newArrSV,
        });
    };
    xoaSinhVien = (id) => {
        let index = this.state.arrSV.findIndex((item) => item.id == id);
        if (index != -1) {
            let newArrSV = [...this.state.arrSV];
            newArrSV.splice(index, 1);
            this.setState({
                arrSV: newArrSV,
            });
        }
    };
    layThongTinSinhVien = (id) => {
        let sinhVien = this.state.arrSV.find((item) => item.id == id);
        this.ref.current.setState({
            ...this.ref.current.state,
            values: sinhVien,
        });
    };
    capNhatSinhVien = (sinhVien) => {
        let index = this.state.arrSV.findIndex(
            (item) => item.id == sinhVien.id);
        if (index !== -1) {
            let newArrSV = [...this.state.arrSV];
            newArrSV[index] = sinhVien;
            this.setState({
                arrSV: newArrSV,
            });
        }
    };
    render() {
        return (
            <div>
                <div className='container'>
                    <FormStudent
                        ref={this.ref}
                        themSinhVien={this.themSinhVien}
                        sinhVien={this.state.sinhVien}
                        capNhatSinhVien={this.capNhatSinhVien}
                    />
                    <div>
                        <table className='table' cellPadding={20}>
                            <thead className='bg-dark text-white'>
                                <td>Mã SV</td>
                                <td>Họ tên</td>
                                <td>Số điện thoại</td>
                                <td>Email</td>
                            </thead>
                            <tbody>
                                {this.state.arrSV.map((item, index) => {
                                    const { id, hoTen, sdt, email } = item;
                                    return (
                                        <tr key={index}>
                                            <td>{id}</td>
                                            <td>{hoTen}</td>
                                            <td>{sdt}</td>
                                            <td>{email}</td>
                                            <td>
                                                <button
                                                    className='btn btn-danger'
                                                    onClick={() => {
                                                        this.xoaSinhVien(id);
                                                    }}
                                                >
                                                    Xóa
                                                </button>
                                                <button
                                                    className='btn btn-warning'
                                                    onClick={() => {
                                                        this.layThongTinSinhVien(id);
                                                    }}
                                                >
                                                    Sửa
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
