
    var maxProfit = function(prices) {
      if(prices.length <= 1) {
        return 0;
      }
      let max = 0;//最大收益 初始化0
      let minNumber = prices[0];//保存当前最低买入
      for(let i = 1; i < prices.length; i++){
        if(prices[i] - minNumber > max){
          max = prices[i] - minNumber;
        }
        if(minNumber > prices[i]){
          minNumber = prices[i];
        }
      }
      return max;
    };

    console.log(maxProfit([7,1,5,3,6,4]));