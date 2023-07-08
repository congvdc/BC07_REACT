import React, { Component } from 'react'
// import { json } from 'react-router-dom';

export default class SeatItem extends Component {
    render() {
        const { hang, danhSachGhe, } = this.props.item;
        const dsGheArr = JSON.parse(danhSachGhe);
        

        return (
            <>
                {/* <tr>
                    {hang === '' ? dsGheArr[0].soGhe : ''}
                </tr> */}
                <tr>
                    <td>{hang}</td>
                    {dsGheArr.map((seat) => (
                        <td key={seat.soGhe}>
                            <input
                                type="checkbox"
                                className="seats"
                                defaultValue={seat.soGhe}
                                disabled={seat.daDat}
                            />
                        </td>
                    ))}
                </tr>
            </>
        );
    }
}
