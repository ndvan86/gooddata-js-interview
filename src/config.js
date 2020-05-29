import { DATE_ATTRIBUTE_IN_MONTHS_URI, GROSS_PROFIT_MEASURE_URI } from './constants';

export const GROSS_PROFIT_VIEW_BY_CONFIG = {
  visualizationAttribute:
  {
      displayForm: {
          uri: DATE_ATTRIBUTE_IN_MONTHS_URI
      },
      localIdentifier: 'a1'
  }
};

export const GROSS_PROFIT_MEASURE_CONFIG = [
  {
      measure: {
          localIdentifier: 'm1',
          definition: {
              measureDefinition: {
                  item: {
                      uri: GROSS_PROFIT_MEASURE_URI
                  }
              }
          },
          alias: '$ Gross Profit'
      }
  }
];