import React, { Component } from 'react';
import './product.css';
import image from './box8.jpeg'
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }
    render() {
        return (
            <div className="root">
                <img src={image} alt="img" height="200" width="100%"></img>

                <div className="info">
                    <span className="category">Classic</span>
                    <span className="name">Spicy Paneer Meal</span>
                    <div className="description">
                        <p>Fresh paneer simmered in a spicy Mughlai curry + Dal Makhni/Chole/ Dilli Rajma + Paratha/Rice + Salad + Chutney + Dessert</p>
                    </div>

                    <div className="veg"></div>

                    <div className="price-cart">
                        <span>₹ 208</span>
                    </div>

                    <div className="add-cart">

                        {this.renderAddButtons()}

                    </div>
                </div>


            </div>
        );
    }

    renderAddButtons() {

        if (this.state.count === 0) {
            return (
                <button class="add-to-cart"
                    onClick={() => { this.setState((prev) => { return { count: prev.count + 1 } }) }}>
                    <span class="add-icon">+</span>
                    <span class="add-text">ADD</span>
                </button>
            )
        }
        return (
            <div className="counter" >
                <button class="count-icon  text-center" 
                    onClick={() => { this.setState((prev) => { return { count: prev.count - 1 } }) }}>
                    <span>-</span>
                </button>
                <span class="count-number">{this.state.count}</span>
                <button class="count-icon"
                    onClick={() => { this.setState((prev) => { return { count: prev.count + 1 } }) }}>
                    <span>+</span>
                </button>
            </div >
        )
    }
}

export default Product;