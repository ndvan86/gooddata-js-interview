import React from 'react';
import { shallow } from 'enzyme';

import GrossProfitInMonth from '../GrossProfitInMonth';
import GrossProfitColumnChart from '../GrossProfitColumnChart';

describe('<GrossProfitInMonth />', () => {
  let wrapper;
  let wrapperInstance;
  let setState;
  beforeEach(() => {
    setState = jest.spyOn(GrossProfitInMonth.prototype, 'setState');
    wrapper = shallow(<GrossProfitInMonth />);
    wrapperInstance = wrapper.instance();
  });

  it('It should render GrossProfitColumnChart with expected props', () => {
    const grossProfitColumnChartComponent = wrapper.find(GrossProfitColumnChart);

    expect(grossProfitColumnChartComponent).toHaveLength(1);

    const grossProfitColumnChartProps = grossProfitColumnChartComponent.props();

    expect(grossProfitColumnChartProps.isViewAllMonth).toBe(false);
    expect(grossProfitColumnChartProps.filters).toEqual([wrapperInstance.getMonthFilter(1)]);
    expect(grossProfitColumnChartProps.onMonthChange).toBe(wrapperInstance.onMonthChange);
  });

  it('When the onMonthChange function called, the state will be set properly', () => {
    wrapperInstance.onMonthChange({
      currentTarget: {
        value: 2
      }
    });

    expect(setState).toHaveBeenCalledWith({
      filter: wrapperInstance.getMonthFilter(2)
    });
  })
});
