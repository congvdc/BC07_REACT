import React, { Component } from 'react'

export default class SeatItem extends Component {

    render() {
        console.log(this.props.seat);
        const { hang, danhSachGhe, } = this.props.item;
        const dsGheArr = JSON.parse(danhSachGhe);
        console.log(dsGheArr);
        

        return (
            <>
                    <td>{hang}</td>
                    {dsGheArr.map((seat) => (
                        <td key={seat.soGhe}>
                            <input
                                type="checkbox"
                                className="seats"
                                defaultValue={seat.soGhe}
                                disabled={seat.activeSeat}
                            />
                        </td>
                    ))}
            </>
        );
    }
}
