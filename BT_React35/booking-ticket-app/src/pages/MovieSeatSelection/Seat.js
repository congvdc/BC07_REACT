import React, { Component } from "react";
import { connect } from "react-redux";
class BookTickets extends Component {
    render() {
        // console.log(this.props.seat.arrSeat);
        console.log(this.props.book)
        return (
            <div>
                <div className="container">
                    <h1 className="text-center">MOVIE SEAT SELECTION</h1>
                    <div className="row">
                        <div className="mb-3 col-6">
                            <label htmlFor className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name
                                id
                                aria-describedby="helpId"
                                placeholder
                            />
                            <small id="helpId" className="form-text text-muted"></small>
                        </div>
                        <div className="mb-3 col-6">
                            <label htmlFor className="form-label">
                                Number of Seats
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name
                                id
                                aria-describedby="helpId"
                                placeholder
                            />
                            <small id="helpId" className="form-text text-muted"></small>
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-success w-25">Start Selecting</button>
                        </div>
                        <ul className="d-flex justify-content-start">
                            <li className="pe-5">Selected Seat</li>
                            <li className="pe-5">Reserved Seat</li>
                            <li className="pe-5">Empty Seat</li>
                        </ul>
                        <table>
                            <tbody>
                                {this.props.seat.map((seatGroup, index) => (
                                    <tr key={index}>
                                        <td colSpan="4" style={{ fontWeight: "bold" }}>
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
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Launch demo modal
                        </button>
                        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Confirm selection</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="modal-body">

                                        <table>
                                            <thead>
                                                <th>Name</th>
                                                <th>Number of Seats</th>
                                                <th>Seats</th>
                                            </thead>
                                            <tbody>
                                                {this.props.book.map((book, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td></td>
                                                            <td></td>
                                                            <td><span>{book.seatNumber}</span></td>
                                                        </tr>)
                                                })}
                                            </tbody>
                                        </table>



                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(BookTickets);