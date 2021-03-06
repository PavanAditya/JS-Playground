var maxProfit = function (prices) {
  if (prices == null || prices.length == 0) return 0;
  let hold = 0;
  let have = false;
  let earn = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    let money = prices[i + 1] - prices[i];
    if (money > 0) {
      if (!have) {
        hold = prices[i];
        have = true;
      }
    } else if (money < 0) {
      if (have) {
        earn += prices[i] - hold;
        have = false;
      }
    }
  }
  if (have) earn += prices[prices.length - 1] - hold;

  return earn;
};
