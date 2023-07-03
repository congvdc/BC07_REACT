import React, { Component } from 'react'
import './style.css'
import { glassArr } from '../Data/dataGlasses';

export default class Body extends Component {
    state = {
        ver: 'v3',
        name: 'tr',
        desc: 's',
    };

    renderListGlass = () => {
        return glassArr.map(({ name, url, desc }, index) => {
            return (
                <button key={index}>
                    <img src={url} alt="" onClick={() => {
                        this.handleChangeGlass(this.state.ver);
                    }}/>
                </button>
            );
        });
    };
    

    handleChangeGlass = (value) => {
        this.setState({
            ver: value, 
            name: value, 
            desc: value
        });
    };
    render() {
        let{ver, name, desc} = this.state;
        return (
            <div>
                <div className="body">
                    <div className="image-container">
                        <div className="image-wrapper-1">
                            <img src="./glassesImage/model.jpg" alt="Image 1" />
                            <div className="overlay-1">
                                <img src="./glassesImage/v1.png" alt="" />
                                <div className="description-1">
                                    <h2>GUCCI G8850U</h2>
                                    <p>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                                </div>
                            </div>
                        </div>
                        <div className="image-wrapper-2">
                            <img src="./glassesImage/model.jpg" alt="Image 2" />
                            <div class="overlay-2">
                                <img src={`./glassesImage/${ver}.png`} alt="" />
                                {/* <div class="description-2">
                                    <h2>{name}</h2>
                                    <p>{desc}</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="image-container">
                        {/* {this.renderListGlass()} */}
                        <button>
                            <img src="./glassesImage/v1.png" alt="" onClick={() => this.handleChangeGlass('v1')}/>
                        </button>
                        <button>
                            <img src="./glassesImage/v2.png" alt="" onClick={() => this.handleChangeGlass('v2')}/>
                        </button>
                        <button>
                            <img src="./glassesImage/v3.png" alt=""  onClick={() => this.handleChangeGlass('v3')}/>
                        </button>
                        <button>
                            <img src="./glassesImage/v4.png" alt="" onClick={() => this.handleChangeGlass('v4')}/>
                        </button>
                        <button>
                            <img src="./glassesImage/v5.png" alt="" onClick={() => this.handleChangeGlass('v5')}/>
                        </button>
                        <button>
                            <img src="./glassesImage/v6.png" alt="" onClick={() => this.handleChangeGlass('v6')}/>
                        </button>
                        <button>
                            <img src="./glassesImage/v7.png" alt="" onClick={() => this.handleChangeGlass('v7')}/>
                        </button>
                        <button>
                            <img src="./glassesImage/v8.png" alt="" onClick={() => this.handleChangeGlass('v8')}/>
                        </button>
                        <button>
                            <img src="./glassesImage/v9.png" alt="" onClick={() => this.handleChangeGlass('v9')}/>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
