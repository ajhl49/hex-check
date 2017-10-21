import React, { Component } from 'react';
import BackgroundImage from './components/BackgroundImage';

class BackgroundLayer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            backgroundData: [],
            currKeyIncrement: 0,
            currDraggedKey: null, // Default for non-selected key is null
            currDraggedIndex: null
        };
    }

    addBackgroundImage(xPos, yPos, width, height, imgSrc) {
        var newImage = {
            x: xPos,
            y: yPos,
            width: width,
            height: height,
            imageSource: imgSrc,
            key: this.currKeyIncrement
        };

        this.setState((prevState) => {
            var newBackgroundData = prevState.backgroundData.slice();
            newBackgroundData.push(newImage);

            return {
                backgroundData: newBackgroundData,
                currKeyIncrement: prevState.key + 1
            };
        });
    }

    handleMouseDown(event, imgKey) {
        // Record current mouse coordinates
        this.coords = {
            x: event.pageX,
            y: event.pageY
        };

        // Add a mouse move event listener to the document
        document.addEventListener('mousemove', this.handleMouseMove);

        // Record element being moved
        this.setState((prevState) => {
            return {
                currDraggedKey: imgKey,
                currDraggedIndex: prevState.backgroundData.findIndex((element) => {
                    return imgKey === element.key;
                })
            };
        });
    }

    handleMouseUp(event, imgKey) {
        // Remove event listener from document
        document.removeEventListener('mousemove', this.handleMouseMove);

        // Clear the page pointer coordinates
        this.coords = {};

        // Clear the current selected element
        this.setState((prevState) => {

            return {
                currDraggedKey: null,
                currDraggedIndex: null
            };
        });
    }

    handleMouseMove(event, imgKey) {
        const xDiff = this.coords.x - event.pageX;
        const yDiff = this.coords.y - event.pageY;

        this.coords.x = event.pageX;
        this.coords.y = event.pageY;

        this.setState((prevState) => {
            // Make a shallow copy of the image array
            let bgImgArray = prevState.backgroundData.slice();

            // Make a shallow copy of the currently dragged element, then update the x,y
            let oldDraggedElement = {...bgImgArray[prevState.currDraggedIndex]};
            let draggedElement = {...oldDraggedElement,
                                  x: oldDraggedElement.x - xDiff,
                                  y: prevState.y - yDiff
            };

            // Replace the dragged element with the updated version
            bgImgArray.splice(prevState.currDraggedIndex, 1, draggedElement);

            return {
                backgroundData: bgImgArray
            }
        })
    }

    buildSVGContent() {
        function isPointerEnabled(key) {
            return key === this.state.currDraggedKey;
        }

        return this.state.backgroundData.map((backgroundData) => {
            return <BackgroundImage {...backgroundData}
                                    pointerEnabled={isPointerEnabled(backgroundData.key)}
                                    handleMouseDown={ (event) => this.handleMouseDown(event, backgroundData.key) }
                                    handleMouseUp={ (event) => this.handleMouseUp(event, backgroundData.key) } />
        });
    }

    render() {

        return (
            <g>
                { this.buildSVGContent() }
            </g>
        );
    }
}

export default BackgroundLayer;
