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
                        {this.props.book.map((book, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <textarea id="nameDisplay" disabled defaultValue={newValue.username} />
                                    </td>
                                    <td>
                                        <textarea id="NumberDisplay" disabled defaultValue={newValue.numseats} />
                                    </td>
                                    <td>
                                        <textarea id="seatsDisplay" disabled defaultValue={book.seatNumber} />
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