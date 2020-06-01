import React from 'react';
import { shallow } from 'enzyme';

import { ColumnChart } from '@gooddata/react-components';

import GrossProfitColumnChart from '../GrossProfitColumnChart';
import { GROSS_PROFIT_MEASURE_CONFIG, GROSS_PROFIT_VIEW_BY_CONFIG } from '../../config';
import { PROJECT_ID } from '../../constants';

describe('<GrossProfitColumnChart />', () => {
  it('It should render ColumnChart component with all months by default', () => {
    const wrapper = shallow(<GrossProfitColumnChart />);
    const columnChartComponent = wrapper.find(ColumnChart);

    expect(wrapper.contains(<h1>$ Gross Profit - All months</h1>)).toBe(true);
    expect(columnChartComponent).toHaveLength(1);

    const columnChartProps = columnChartComponent.props();

    expect(columnChartProps.measures).toEqual(GROSS_PROFIT_MEASURE_CONFIG);
    expect(columnChartProps.viewBy).toEqual(GROSS_PROFIT_VIEW_BY_CONFIG);
    expect(columnChartProps.filters).toEqual([]);
    expect(columnChartProps.projectId).toEqual(PROJECT_ID);
  });

  it('It should render ColumnChart component by specific month', () => {
    const onMonthChange = jest.fn();
    const wrapper = shallow(<GrossProfitColumnChart
      isViewAllMonth={false}
      onMonthChange={onMonthChange}
      filters={[{absoluteDateFilter: null}]}
    />);

    const columnChartComponent = wrapper.find(ColumnChart);

    expect(columnChartComponent).toHaveLength(1);
    expect(wrapper.find('select')).toHaveLength(1);

    const columnChartProps = columnChartComponent.props();

    expect(columnChartProps.viewBy).toBe(null);
    expect(columnChartProps.measures).toEqual(GROSS_PROFIT_MEASURE_CONFIG);
    expect(columnChartProps.filters).toEqual([{absoluteDateFilter: null}]);
    expect(columnChartProps.projectId).toEqual(PROJECT_ID);
  });
});
