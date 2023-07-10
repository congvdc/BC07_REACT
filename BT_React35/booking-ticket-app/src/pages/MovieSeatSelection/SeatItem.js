import React, { Component } from 'react'
import { connect } from 'react-redux';

class SeatItem extends Component {

    render() {
        console.log(this.props.seat);
        const { hang, danhSachGhe, } = this.props.item;
        // const dsGheArr = JSON.parse(danhSachGhe);
        // console.log();
        

        return (
            <>
                    {/* <td>{hang}</td>
                    {danhSachGhe.map((seat) => (
                        <td key={seat.soGhe}>
                            <input
                                type="checkbox"
                                className="seats"
                                defaultValue={seat.soGhe}
                                disabled={seat.activeSeat}
                            />
                        </td>
                    ))} */}
                    {this.props.seat.map((seatGroup, index) => (
                        <tr key={index}>
                            <td>
                            <input
                                                    type="checkbox"
                                                    onClick={() => {
                                                        //xử lý đưa dữ liêu từ component lên redux store
                                                        this.props.addToSeat(seat.soGhe, seat.gia);
                                                    }}
                                                />
                            </td>
                        </tr>
                    ))}
            </>
        );
    };
};



const mapStateToProps = (state) => {
    //return giúp lấy dữ liệu từ store về
    return {
        seat: state.seat.arrSeat,
        book: state.seat.arrBook
    };
};

export default connect(mapStateToProps)(SeatItem);