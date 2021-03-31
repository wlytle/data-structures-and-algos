// Find the maximum amount of money that can be made buying stock, you can only buy one share of any stock

function selectStock(saving, current, future) {
  if (saving < 1) return 0;
  if (!current?.length || !future?.length) return 0;
  let profits = [],
    currProfit,
    totalProfit = 0;
  //make array of objects that contain key of profit with value of price
  for (let i = 0; i < current.length; i++) {
    currProfit = future[i] - current[i];
    profits[i] = { profit: currProfit, cost: current[i] };
  }
  // sort profits
  profits.sort((a, b) => b.profit - a.profit);
  // buy stock!
  for (let j = 0; j < profits.length; j++) {
    if (saving < profits[profits.length - 1].cost) return totalProfit;
    if (profits[j].cost <= saving) {
      saving -= profits[j].cost;
      totalProfit += profits[j].profit;
    }
  }
  return totalProfit;
}

console.log(
  selectStock(250, [175, 133, 109, 210, 97], [200, 125, 128, 228, 133])
);
//55
