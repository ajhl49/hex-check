import React, { Component } from 'react';

class BackgroundImage extends Component {

    constructor(props) {
        super(props);

        this.buildImageCSS = this.buildImageCSS.bind(this);
    }

    buildImageCSS() {
        return this.props.pointerEnabled ? 'mouseevents-enabled' : 'mouseevents-disabled';
    }

    render () {

        return (
            <image  xlinkHref={this.props.href}
                    className={this.buildImageCSS()}
                    x={this.props.x}
                    y={this.props.y}
                    height={this.props.height}
                    width={this.props.width}
                    onMouseDown={this.props.handleMouseDown}
                    onMouseUp={this.props.handleMouseUp}
                    />
        );
    }
}

export default BackgroundImage;
