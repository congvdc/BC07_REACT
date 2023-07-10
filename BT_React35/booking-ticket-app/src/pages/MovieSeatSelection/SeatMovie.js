import React, { Component } from 'react'

class SeatMovie extends Component {
    state = {
        values: {
            username: '',
            numseats: '',
        },
    }
  render() {
    console.log(this.props.book);
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
                    >
                        Start Selecting
                    </button>
                </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
    //return giúp lấy dữ liệu từ store về
    return {
        seat: state.seat.arrSeat,
        book: state.seat.arrBook
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
export default connect(mapStateToProps, mapDispatchToProps)(SeatMovie);