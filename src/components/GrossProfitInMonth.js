import React, { Component } from 'react';

import { DATE_ATTRIBUTE_URI } from '../constants';
import GrossProfitColumnChart from './GrossProfitColumnChart';

const dateAttribute = DATE_ATTRIBUTE_URI;

export default class GrossProfitInMonth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: this.getMonthFilter(1)
        };

        this.onMonthChange = this.onMonthChange.bind(this);
    }

    getMonthFilter(month) {
        const monthFormated = month > 9 ? month : `0${month}`;
        const lastDateOfMonth = new Date('2016', monthFormated, 0).getDate();
        return {
            absoluteDateFilter: {
                dataSet: {
                    uri: dateAttribute
                },
                from: `2016-${monthFormated}-01`,
                to: `2016-${monthFormated}-${lastDateOfMonth}`
            }
        };
    }

    onMonthChange(e) {
        const month = e.currentTarget.value;
        this.setState({
            filter: this.getMonthFilter(month)
        });
    };

    render() {
        const filters = [this.state.filter];
        return (
            <GrossProfitColumnChart isViewAllMonth={false} filters={filters} onMonthChange={this.onMonthChange} />
        );
    }
}