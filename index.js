const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function addBatteries(total, batch) {
  return total + batch;
}

const totalBatteries = batteryBatches.reduce(addBatteries, 0);

console.log(totalBatteries);

module.exports = {
  batteryBatches,
  totalBatteries
};
