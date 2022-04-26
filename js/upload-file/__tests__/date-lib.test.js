const customDate = require('../date-lib');

test('calculate today yyyymmdd', () => {
    expect(customDate.yearAndMonthAndDay()).toBe('20191003');
})