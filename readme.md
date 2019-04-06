# record-to-trading-vue-data [![Build status](https://travis-ci.org/strong-roots-capital/record-to-trading-vue-data.svg?branch=master)](https://travis-ci.org/strong-roots-capital/record-to-trading-vue-data) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/record-to-trading-vue-data.svg)](https://npmjs.org/package/@strong-roots-capital/record-to-trading-vue-data) [![codecov](https://codecov.io/gh/strong-roots-capital/record-to-trading-vue-data/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/record-to-trading-vue-data)

> Map a talib-record to trading-vue data format

## Install

```shell
npm install @strong-roots-capital/record-to-trading-vue-data
```

## Use

```typescript
import toTradingVue from '@strong-roots-capital/record-to-trading-vue-data'

const record: Record = randomRecord()
const data: number[] = toTradingVue(record)
```

## Related

- [trading-vue](https://github.com/C451/trading-vue-js)
- [timeseries-record](https://github.com/strong-roots-capital/timeseries-record)
