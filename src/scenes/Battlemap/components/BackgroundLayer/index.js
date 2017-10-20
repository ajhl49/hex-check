import React, { Component } from 'react';

class BackgroundImage extends Component {

    constructor(props) {
        this.state = {
            x: this.props.initX,
            y: this.props.initY,
            height: this.props.height,
            width: this.props.width
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.buildImageClass = this.buildImageClass.bind(this);
    }

    componentWillReceiveProps(nextProps) {

    }

    handleMouseDown(event) {
        this.coords = {
            x: event.pageX,
            y: event.pageY
        }

        document.addEventListener('mousemove', this.handleMouseMove);
    }

    handleMouseUp(event) {
        document.removeEventListener('mousemove', this.handleMouseMove);
        this.coords = {};
    }

    handleMouseMove(event) {
        const xDiff = this.coords.x - e.pageX;
        const yDiff = this.coords.y - e.pageY;

        this.coords.x = e.pageX;
        this.coords.y = e.pageY;

        this.setState((prevState, props) => {
            return {
                x: prevState.x - xDiff,
                y: prevState.y - yDiff
            }
        });
    }

    buildImageClass() {
        return 'mouseevents-enabled';
    }

    render () {

        return (
            <image xlink:href={this.props.href}
            className={this.buildImageClass()}
            x={this.state.x}
            y={this.state.y}
            height={this.state.height}
            width={this.state.width}
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}/>
        )
    }
}

class BackgroundLayer extends Component {

    constructor(props) {
        this.state = {
            backgroundData = [],
            currKey = 0;
        };
    }

    addBackgroundImage(xPos, yPos, width, height) {
        var newImage = {
            x: xPos,
            y: yPos,
            width: width,
            height: height,
            key: this.currKey
        };

        this.setState((prevState) => {
            var newBackgroundData = prevState.backgroundData.slice();
            newBackgroundData.push(newImage);

            return {
                backgroundData: newBackgroundData,
                currKey: prevState.key + 1;
            };
        });
    }

    buildSVGContent() {
        return this.state.backgrounds.map((backgroundData) => {
            return <BackgroundImage x={backgroundData.x}
                                    y={backgroundData.y}
                                    width={backgroundData.width}
                                    height={backgroundData.height}
                                    key={backgroundData.key} />
        });
    }

    render() {

        return (
            { this.buildSVGContent() }
        );
    }
}

export default BackgroundLayer;
