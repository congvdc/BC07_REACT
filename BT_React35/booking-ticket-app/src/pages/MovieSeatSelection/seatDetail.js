import React, { Component } from 'react'
import { connect } from 'react-redux';

class seatDetail extends Component {
    render() {
        console.log(this.props.seat);
        return (
            <div className="displayerBoxes txt-center" style={{ overflowX: 'auto' }}>
                <table className="Displaytable w3ls-table" width="100%">
                    <tbody><tr>
                        <th>Name</th>
                        <th>Number of Seats</th>
                        <th>Seats</th>
                    </tr>
                        {this.props.seat.map((item, index) => {
                            return (
                                <tr>
                                    <td>
                                        <textarea id="nameDisplay" disabled defaultValue={item.username} />
                                    </td>
                                    <td>
                                        <textarea id="NumberDisplay" disabled defaultValue={item.numberSeats} />
                                    </td>
                                    <td>
                                        <textarea id="seatsDisplay" disabled defaultValue={item.soGhe} />
                                    </td>
                                </tr>
                            )
                        })}
                        {/* <tr>
                            <td>
                                <textarea id="nameDisplay" disabled defaultValue={""} />
                            </td>
                            <td>
                                <textarea id="NumberDisplay" disabled defaultValue={""} />
                            </td>
                            <td>
                                <textarea id="seatsDisplay" disabled defaultValue={""} />
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        seat: state.seat.arrSeat,
    };
};

export default connect(mapStateToProps)(seatDetail)