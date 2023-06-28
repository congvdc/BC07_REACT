import React, { Component, createRef } from 'react'
import FormProduct from './FormProduct';

export default class ProductList extends Component {

    constructor() {
        super();
        // tạo ra một thuộc tính ref
        this.ref = createRef();
    }

    state = {
        arrProduct: [],
    };

    // Phương thức thêm sản phẩm vào arrProduct
    themSanPham = (sanPham) => {
        let newArrProduct = [...this.state.arrProduct];
        newArrProduct.push(sanPham);
        // setState để thay đổi giá trị bên trong state
        console.log(newArrProduct);
        this.setState({
            arrProduct: newArrProduct,
        });
    };
    xoaSanPham = (id) => {
        // dùng findIndex để tìm kiếm vi trí index của sản phẩm trong mảng
        let index = this.state.arrProduct.findIndex((item) => item.id == id);
        // index = -1, index = vị trí
        if (index != -1) {
            let newArrProduct = [...this.state.arrProduct];
            newArrProduct.splice(index, 1);
            this.setState({
                arrProduct: newArrProduct,
            });
        }
    };
    layThongTinSanPham = (id) => {
        // dùng find để tìm ra sản phẩm
        let sanPham = this.state.arrProduct.find((item) => item.id == id);
        // find tìm được thì sẽ trả về phần tử cần tim, find không tìm được thì find sẽ trả về undifined

        // sử dụng this.ref.current giúp gọi ra các thuộc tính phương thức nằm trong component đang được gán ref, cụ thể là component FromProduct
        console.log(this.ref.current.state);
        this.ref.current.setState({
            ...this.ref.current.state,
            values: sanPham,
        });
        // this.ref.current.focus();
        // gọi tới setState của component con và set sanPham vào
        // TH1: dùng this.ref.current gọi tới setState của component con và gán sanPham vào
    };
    capNhatSanPham = (sanPham) => {
        let index = this.state.arrProduct.findIndex(
            (item) => item.id == sanPham.id);
            console.log(index);
        if (index !== -1) {
            let newArr = [...this.state.arrProduct];
            newArr[index] = sanPham;
            this.setState({
                arrProduct: newArr,
            });
        }
    };
    render() {
        return (
            <>
                {/* <h1>Create Product</h1> */}
                {/* bs5-card-background  */}
                <div className="container">
                    <FormProduct
                        ref={this.ref}
                        themSanPham={this.themSanPham}
                        // truyền sản phẩm tìm được theo props
                        sanPham={this.state.sanPham}
                        capnhatSanPham={this.capNhatSanPham}
                    />
                </div>

                <div>
                    <table className="table" cellPadding={20}>
                        <thead className='bg-dark text-white'>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            {this.state.arrProduct.map((item, index) => {
                                const { id, image, name, productType, price, descrip } =
                                    item;
                                return (
                                    <tr key={index}>
                                        <td>{id}</td>
                                        <td>
                                            <img src={image} alt='' />
                                        </td>
                                        <td>{name}</td>
                                        <td>{price}</td>
                                        <td>{descrip}</td>
                                        <td>{productType}</td>
                                        <td>
                                            <button
                                                className='btn btn-danger'
                                                onClick={() => {
                                                    this.xoaSanPham(id)
                                                }}
                                            >
                                                Xóa
                                            </button>
                                            <button
                                                className='btn btn-warning'
                                                onClick={() => {
                                                    this.layThongTinSanPham(id)
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
            </>
        );
    }
}
