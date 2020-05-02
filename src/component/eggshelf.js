import Chicken from "./chicken";
import React from "react";

import data from './chickens.json'

class EggShelf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        //  to enable node backend uncomment this
        // fetch("http://localhost:8001/api/chickens")
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             // console.log(result)
        //             this.setState({
        //                 isLoaded: true,
        //                 items: result
        //             });
        //         },
        //         (error) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 error
        //             });
        //         }
        //     )

        this.setState({
            isLoaded: true,
            items: data
        })
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
                <div className="eggshelf">
                    {items.chickens.map(item => (
                        <Chicken name={item.name} price={item.eggPrice} file={'chickens/' + item.name + '.jpg'}/>
                    ))}
                </div>
            )
        }
    }
}

export default EggShelf