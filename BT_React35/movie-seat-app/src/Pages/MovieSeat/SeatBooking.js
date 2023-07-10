import React, { Component } from 'react'
import { connect } from 'react-redux'

class SeatBooking extends Component {
    state = {
        values: {
            Username: '',
            Numseats: '',
        },
    }
    getValueInput = (event) => {
        let { value, id } = event.target;
        let newValue = this.state.values;
        newValue[id] = value;
        console.log(newValue);

        this.setState({
            values: newValue,
        });
    };
    render() {
        console.log(this.props.seatSelect);
        console.log(this.props);
        console.log(this.state.values.Username);
        return (
            <div>
                <h1>Movie Seat Selection</h1>
                <div className="container">
                    <div className="inputForm">
                        <h2>fill the required details below and select your seats</h2>
                        <div className="mr_agilemain">
                            <div className="agileits-left">
                                <label> Name
                                    <span>*</span>
                                </label>
                                <input
                                    onChange={this.getValueInput}
                                    type="text"
                                    id="Username"
                                    required />
                            </div>
                            <div className="agileits-right">
                                <label> Number of Seats
                                    <span>*</span>
                                </label>
                                <input
                                    onChange={this.getValueInput}
                                    type="number"
                                    id="Numseats"
                                    required min={1} />
                            </div>
                        </div>
                        <button
                            type='submit'
                        // onClick={() => {
                        //     this.props.selectSeat(item);
                        // }}
                        >
                            Start Selecting
                        </button>
                    </div>

                    <ul class="seat_w3ls">
                        <li class="smallBox greenBox">Selected Seat</li>
                        <li class="smallBox redBox">Reserved Seat</li>
                        <li class="smallBox emptyBox">Empty Seat</li>
                    </ul>

                    <div className='seatStructure txt-center' style={{ overflowX: 'auto' }}>
                        <table id="seatsBlock">
                            <tbody>
                                <tr>
                                    <td />
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
                                    <td>9</td>
                                    <td>10</td>
                                    <td>11</td>
                                    <td>12</td>
                                </tr>
                                {this.props.seat.map((seatGroup, index) => (
                                    <tr key={index}>
                                        {/* <td colSpan="4" style={{ fontWeight: "bold" }}> */}
                                        <td>
                                            {seatGroup.hang}
                                        </td>
                                        {seatGroup.danhSachGhe.map((seat, seatIndex) => (
                                            // <td>{seat.soGhe}</td>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    onClick={() => {
                                                        //xử lý đưa dữ liêu từ component lên redux store
                                                        this.props.addToSeat(seat.soGhe, seat.gia);
                                                    }}
                                                />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="screen">
                            <h2 className="wthree">Screen this way</h2>
                        </div>
                        <button>Confirm Selection</button>
                        <div className="displayerBoxes txt-center" style={{ overflowX: 'auto' }}>
                            <table className="Displaytable w3ls-table" width="100%">
                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <th>Number of Seats</th>
                                        <th>Seats</th>
                                    </tr>
                                    {this.props.seatSelect.map((seatSelect, index) => {
                                        return (
                                            
                                            <tr key={index}>
                                                <td>
                                                    <textarea id="nameDisplay" disabled defaultValue={this.state.values.Username} />
                                                </td>
                                                <td>
                                                    <textarea id="NumberDisplay" disabled defaultValue={this.state.values.Numseats} />
                                                </td>
                                                <td>
                                                    <textarea id="seatsDisplay" disabled defaultValue={seatSelect.seatNumber} />
                                                </td>
                                            </tr>
                                        );
                                    })};
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    //return giúp lấy dữ liệu từ store về
    return {
        seat: state.seat.arrSeat,
        seatSelect: state.seat.arrSeatSelect
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToSeat: (seatNumber, seatPrice) => {
            const action = {
                type: "SELECT_SEAT",
                payload: {
                    seatNumber,
                    seatPrice,
                }
            };
            dispatch(action);
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SeatBooking);