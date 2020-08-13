import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayTime: new Date().toLocaleTimeString(),
            visitorName: "JR"
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick()
        }, 1000);
    }

    tick() {
        console.log("In tick")
        this.setState({
            displayTime: new Date().toLocaleTimeString()
        })
    }

    render() {
        let {
            displayTime
        } = this.state
        let {
            visitorName
        } = this.state

        return (
        <div className = "clock" >
            <h2>
                Time is {displayTime} 
            </h2>
            <div>
                Thanks for visiting {visitorName}
            </div>
        </div>
        )
    }
}

export default Clock;