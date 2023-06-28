import React, { Component } from 'react'

export default class CardPhoneItem extends Component {
    render() {
        // để lấy được các dữ liệu truyền vào component ta sẽ sử dụng this.props
        let { hinhAnh, gia, hang, ten } = this.props.item
        console.log(this.props);
        return (
            // bs5-card-background
            <div className="card text-white bg-primary">
                <img className="card-img-top" src={hinhAnh} alt="Title" />
                <div className="card-body">
                    <h4 className="card-title">{ten}</h4>
                    <p className="card-text">{hang}</p>
                    <p>{gia}</p>
                    <p>{this.tuoi}</p>
                    <p>{this.hoTen}</p>
                    {/* <button
                    onClick={() => {
                        // props là một dữ liệu dạng read-only nên không cho phép thay đổi giá trị khi ở component con
                        this.props.hoTen = 'Nam';
                        console.log(this.props.hoTen);
                    }}>
                    </button> */}
                    <button
                        onClick={() => {
                            this.props.thayDoiHoTen('test change')
                        }}
                    >Đổi tên</button>
                </div>
            </div>
        );
    }
}
