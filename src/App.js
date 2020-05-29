// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';

import GrossProfitInMonth from './components/GrossProfitInMonth';
import GrossProfitColumnChart from './components/GrossProfitColumnChart';

class App extends Component {
    render() {
        return (
            <div className="App">
                <GrossProfitInMonth />
                <GrossProfitColumnChart />
            </div>
        );
    }
}

export default App;
