import React from 'react';

import { ColumnChart } from '@gooddata/react-components';

import { MONTHS, PROJECT_ID } from '../constants';
import { GROSS_PROFIT_MEASURE_CONFIG, GROSS_PROFIT_VIEW_BY_CONFIG } from '../config';

export default function GrossProfitColumnChart({
    isViewAllMonth = true,
    filters = [],
    onMonthChange = null
}) {
    function renderDropdown() {
        const months = MONTHS;
        return (
            <select defaultValue="1" onChange={onMonthChange}>
                {months.map((item, index) => <option key={index} value={index + 1}>{item}</option>)}
            </select>
        );
    }

    const projectId = PROJECT_ID;
    const measures = GROSS_PROFIT_MEASURE_CONFIG;
    const viewBy = isViewAllMonth ? GROSS_PROFIT_VIEW_BY_CONFIG : null;

    return (
        <>
            {isViewAllMonth ? 
                <h1>$ Gross Profit - All months</h1>
                :
                <h1>$ Gross Profit in month {renderDropdown()} 2016</h1>
            }
            <div>
                <ColumnChart
                    measures={measures}
                    viewBy={viewBy}
                    projectId={projectId}
                    filters={filters}
                />
            </div>
        </>
    );
}
