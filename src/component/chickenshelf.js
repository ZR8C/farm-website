import Chicken from "./chicken";
import React from "react";

class Chickenshelf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8001/api/chickens")
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result)
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;

        console.log(items)

        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="chickenshelf">
                    {items.chickens.map(item => (
                        <Chicken name={item.name} price={item.eggPrice} file={'chickens/' + item.name.toLowerCase() + '.png'}/>
                    ))}
                </div>
            )
        }
    }
}

export default Chickenshelf