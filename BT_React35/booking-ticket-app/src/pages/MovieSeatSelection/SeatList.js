import React, { Component } from 'react'
import SeatLayout from './SeatLayout';


export default class SeatList extends Component {
    state = {
        values: {
            Username: '',
            Numseats: '',
            Seat: '',
        },
        errors1: {
            Username: '',
            Numseats: '',
        },
        errors2: {
            Seat: '',
        },
        activeSeat: true,
    };
    getValueInput = (event) => {
        let { value, id } = event.target;
        let newValue = this.state.values;
        newValue[id] = value;
        let newError1 = this.state.errors1;
        console.log(newValue);

        if (newValue[id] == "" ) {
            newError1[id] = `${id} is required`;
        }

        this.setState({
            values: newValue,
            errors1: newError1,
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        // const { Username, Numseats } = this.state.values;

        // if (newValue[id] == "" ) {
        //     newError[id] = `${id} is required`;
        //     alert('Please enter your Name and Number of Seats.');
        // } else {
        //     console.log(this.state.values);
        // }

    };
    render() {
        console.log(this.state.values);
        const { usernam, numberseats } = this.state.errors1;
        const { seat } = this.state.errors2;
        return (
            <div className='w3ls-reg'>

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
                                <p style={{color: 'white'}}>{usernam}</p>
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
                    onclick="takeData()">Start Selecting</button>
                </div>

                <ul class="seat_w3ls">
                    <li class="smallBox greenBox">Selected Seat</li>
                    <li class="smallBox redBox">Reserved Seat</li>
                    <li class="smallBox emptyBox">Empty Seat</li>
                </ul>

                <div className="seatStructure txt-center" style={{ overflowX: 'auto' }}>
                    <p id="notification">
                        <b style={{ marginBottom: 0, background: '#ff9800', letterSpacing: 1 }}>Please Select your Seats NOW!</b>
                    </p>
                    <table id="seatsBlock">
                        <tbody>
                            <tr>
                                <td />
                                <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td />
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                        </tr>
                            <tr>
                                <td>A</td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="A1" disabled={this.state.activeSeat} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="A2" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="A3" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="A4" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="A5" disabled={true} />
                                </td>
                                <td className="seatGap" />
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="A6" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="A7" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="A8" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="A9" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="A10" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="A11" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="A12" disabled={true} />
                                </td>
                            </tr>
                            <tr>
                                <td>B</td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="B1" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="B2" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="B3" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="B4" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="B5" disabled={true} />
                                </td>
                                <td />
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="B6" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="B7" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="B8" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="B9" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="B10" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="B11" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="B12" disabled={true} />
                                </td>
                            </tr>
                            <tr>
                                <td>C</td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="C1" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="C2" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="C3" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="C4" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="C5" disabled={true} />
                                </td>
                                <td />
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="C6" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="C7" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="C8" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="C9" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="C10" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="C11" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="C12" disabled={true} />
                                </td>
                            </tr>
                            <tr>
                                <td>D</td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="D1" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="D2" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="D3" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="D4" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="D5" disabled={true} />
                                </td>
                                <td />
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="D6" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="D7" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="D8" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="D9" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="D10" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="D11" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="D12" disabled={true} />
                                </td>
                            </tr>
                            <tr>
                                <td>E</td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="E1" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="E2" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="E3" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="E4" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="E5" disabled={true} />
                                </td>
                                <td />
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="E6" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="E7" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="E8" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="E9" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="E10" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="E11" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="E12" disabled={true} />
                                </td>
                            </tr>
                            <tr className="seatVGap" />
                            <tr>
                                <td>F</td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="F1" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="F2" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="F3" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="F4" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="F5" disabled={true} />
                                </td>
                                <td />
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="F6" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="F7" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="F8" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="F9" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="F10" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="F11" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="F12" disabled={true} />
                                </td>
                            </tr>
                            <tr>
                                <td>G</td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="G1" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="G2" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="G3" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="G4" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="G5" disabled={true} />
                                </td>
                                <td />
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="G6" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="G7" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="G8" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="G9" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="G10" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="G11" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="G12" disabled={true} />
                                </td>
                            </tr>
                            <tr>
                                <td>H</td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="H1" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="H2" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="H3" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="H4" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="H5" disabled={true} />
                                </td>
                                <td />
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="H6" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="H7" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="H8" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="H9" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="H10" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="H11" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="H12" disabled={true} />
                                </td>
                            </tr>
                            <tr>
                                <td>I</td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="I1" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="I2" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="I3" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="I4" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="I5" disabled={true} />
                                </td>
                                <td />
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="I6" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="I7" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="I8" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="I9" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="I10" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="I11" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="I12" disabled={true} />
                                </td>
                            </tr>
                            <tr>
                                <td>J</td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="J1" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="J2" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="J3" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="J4" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="J5" disabled={true} />
                                </td>
                                <td />
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="J6" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="J7" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="J8" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="J9" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="J10" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="J11" disabled={true} />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="J12" disabled={true} />
                                </td>
                            </tr>
                        </tbody></table>
                    <div className="screen">
                        <h2 className="wthree">Screen this way</h2>
                    </div>
                    <button onclick="updateTextArea()">Confirm Selection</button>
                </div>

                <SeatLayout />
            </div>
        );
    }
}

