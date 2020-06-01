// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import GrossProfitInMonth from './components/GrossProfitInMonth';
import GrossProfitColumnChart from './components/GrossProfitColumnChart';

describe('<App />', () => {
  it('Should render two components GrossProfitInMonth and GrossProfitColumnChart', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(GrossProfitColumnChart)).toHaveLength(1);
    expect(wrapper.find(GrossProfitInMonth)).toHaveLength(1);
  });
});

