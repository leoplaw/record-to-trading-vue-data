import test from 'ava'
import Record from 'timeseries-record'
import randomRecord from 'random-record'

/**
 * Library under test
 */

import toTradingVue from '../src/record-to-trading-vue-data'

test('should map record into trading-vue data format', t => {
    const record: Record = randomRecord()
    const data: number[] = toTradingVue(record)
    t.is(record.Time, data[0])
    t.is(record.Open, data[1])
    t.is(record.High, data[2])
    t.is(record.Low, data[3])
    t.is(record.Close, data[4])
    t.is(record.Volume, data[5])
})
