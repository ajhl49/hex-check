import React, { Component } from 'react';

import BackgroundLayer from './components/BackgroundLayer';

class Aura extends Component {
    render(
        <div>
        </div>
    )
}

class Drawing extends Component {
    render(
        <div>
        </div>
    )
}

class Fog extends Component {
    render(
        <div>
        </div>
    )
}

class LightSource extends Component {
    render(
        <div>
        </div>
    )
}

class Token extends Component {
    render(
        <div>
        </div>
    )
}

class BattlemapOverlay extends Component {
    render(
        <div>
        </div>
    )
}

class Battlemap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            backgrounds: [],    // All items on the "background" or "map" layer
            auras: [],          // All items on the "aura" layer (area of effect circles/squares, etc.)
            drawings: [],       // All player/GM drawn objects (lines, shapes, etc)

            /*
            * Fog overlay items. Consists of all polygons to *remove* from the
            * fog overlay, rather than add to. This means that the map is
            * normally covered in fog of war, except for areas marked by
            * the objects within this array.
            */
            fog: [],
            lightSources: [],   // Sources of emitted light on the map, independent of token-sourced light
            tokens: [],         // All items on the "token" layer (players, enemies, etc.)
            overlay: []         // Toplevel overlay items (menu, infographs)

            fogEnabled: false,          // Whether or not the entire battlemap should be visible to players at all times
            dynamicFogEnabled: false
        };
    }

    buildSVGContent() {
        return [];

        function buildBackgroundsLayer () {
            return this.state.backgrounds.map((backgroundData) => {
                return <BackgroundImage  />
            });
        }

        function buildFogLayer (dynamicFogEnabled, tokens, lightSources) {

        }
    }

    render() {
        return(
            <svg >
                { this.buildSVGContent() }
            </svg>
        );
    }
}

export default Battlemap;
