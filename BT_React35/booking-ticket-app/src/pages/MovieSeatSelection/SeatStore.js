import React, { Component } from 'react'
import { connect } from 'react-redux';
import SeatItem from './SeatItem';

class SeatStore extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <div className="inputForm">
                    <h2>fill the required details below and select your seats</h2>
                    <div className="mr_agilemain">
                        <div className="agileits-left">
                            <label> Name
                                <span>*</span>
                            </label>
                            <input

                                type="text"
                                id="Username"
                                required />

                        </div>
                        <div className="agileits-right">
                            <label> Number of Seats
                                <span>*</span>
                            </label>
                            <input

                                type="number"
                                id="Numseats"
                                required min={1} />
                        </div>
                    </div>
                    <button
                        type='submit'
                        onclick="takeData()">Start Selecting</button>
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
                            {this.props.seat.arrSeat.map((item, index) => {
                                return (
                                    <SeatItem item={item} />
                                )
                            })}
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps1 = (state) => {
    return {
        seat: state.seat,
    };
};
const mapStateToProps = (state) => {
    return {
        seat: {
            arrSeat: state.seat.arrSeat.filter((seat) => seat.hang !== ''),
        },
    };
};

export default connect(mapStateToProps)(SeatStore);