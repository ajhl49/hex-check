import React, { Component } from 'react';

import BackgroundLayer from './components/BackgroundLayer';
// import AuraLayer from './components/AuraLayer';
// import BattlemapOverlay from './components/BattlemapOverlay';
// import DrawingLayer from './components/DrawingLayer';
// import FogLayer from './components/FogLayer';
// import LightingLayer from './components/LightingLayer';
// import TokenLayer from './components/TokenLayer';

class Battlemap extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
            overlay: [],         // Toplevel overlay items (menu, infographs)

            fogEnabled: false,          // Whether or not the entire battlemap should be visible to players at all times
            dynamicFogEnabled: false
        };
    }

    render() {
        return(
            <svg >
                <BackgroundLayer />
            </svg>
        );
    }
}

export default Battlemap;
