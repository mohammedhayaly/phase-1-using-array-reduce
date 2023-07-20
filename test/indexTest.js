const { expect } = require('chai');
const { batteryBatches, totalBatteries } = require('../index');

describe('index.js', function () {
  describe('totalBatteries', function () {
    it('returns the total number of batteries', function () {
      expect(totalBatteries).to.equal(31);
    });
  });
});
