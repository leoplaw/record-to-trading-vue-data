/**
 * record-to-trading-vue-data
 * Map a talib-record to trading-vue data format
 */

import Record from 'timeseries-record'


/**
 * Map a timeseries record into TradingVue data format.
 *
 * @param record - Record to transform into TradingVue data format
 * @return Record in TradingVue data format
 */
export default function recordToTradingVueData(record: Record): number[] {
    return [
        record.Time,
        record.Open,
        record.High,
        record.Low,
        record.Close,
        record.Volume
    ]
}
