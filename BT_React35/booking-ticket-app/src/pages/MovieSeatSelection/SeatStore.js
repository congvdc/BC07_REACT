import React, { Component } from 'react'
import { connect } from 'react-redux';
import SeatItem from './SeatItem';
import SeatDetail from './seatDetail';

class SeatStore extends Component {
    state = {
        values: {
            username: '',
            numseats: '',
        },
    }
    getValueInput = (event) => {
        let { value, id } = event.target;
        let newValue = this.state.values;
        newValue[id] = value;
        let newError1 = this.state.errors1;
        console.log(newValue);

        if (newValue[id] == "") {
            newError1[id] = `${id} is required`;
        }

        this.setState({
            values: newValue,
        });
    };
    render() {
        const item = this.props;

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
                        onClick={() => {
                            this.props.selectSeat(item);
                        }}
                    // onclick="takeData()"
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
                            {this.props.seat.arrSeat.map((item, index) => {

                                return (
                                    <tr key={index}>
                                        <SeatItem item={item} />
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className="screen">
                        <h2 className="wthree">Screen this way</h2>
                    </div>
                    <button onclick="updateTextArea()">Confirm Selection</button>
                    <SeatDetail />
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
        activeSeat: false,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectSeat: (item) => {
            const action = {
                type: 'SELECT_SEAT',
                payload: item,
            };
            dispatch(action);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatStore);