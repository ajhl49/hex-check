import React, {
    Component
} from 'react';
import logo from './logo.svg';
import './App.css';

import Battlemap from './scenes/Battlemap';

class App extends Component {
    render() {
        return (
            <div>
                <Battlemap />
            </div>
        );
    }
}

export default App;
