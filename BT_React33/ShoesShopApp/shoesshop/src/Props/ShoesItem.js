import React, { Component } from 'react'

export default class ShoesItem extends Component {
    render() {
        // let {image, name, price, description, quantity} = this.props.item;

        let {item} = this.props;
        
const handleEvent = event => {
    this.props.xemChiTiet(item);
}

        return (
            <>
                {/* <div className="item"> */}
                    <img src={item.image} onClick={handleEvent}/>
                    <h3>{item.name}</h3>
                    <p>{item.price} $</p>
                    <button className="cart-button"
                    onClick={handleEvent}
                    >Add to Cart</button>
                {/* </div> */}
            </>
        );
    }
}
