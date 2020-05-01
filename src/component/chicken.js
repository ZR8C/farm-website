import React from "react";

class Chicken extends React.Component {
    render() {
        return (
            <div className="chicken">
                <h1>{this.props.name}</h1>
                <img className="photo" src={this.props.file} alt="chicken" />
                <p>{this.props.description}</p>
                <p>${this.props.price}</p>
                <button>Add to cart</button>
            </div>
        )
    }
}


export default Chicken