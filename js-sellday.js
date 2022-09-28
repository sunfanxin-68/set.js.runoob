function maxProfitDays(nums) {
    buyDay = 0;  //买入的一天
    sellDay = 0;  //卖出的二天

    temp = {}

    for(var i=0; i<nums.length; i++) {   

        let maxPrice = 0  //最高利润的价格
        let maxDay = 0   //卖出最高价的那一天

        if(i == nums.length -1){    
            break;
        }
        for(var j=i+1; j<nums.length; j++) {　　　//第二天 必须在i的后面
            if((nums[j] - nums[i]) > maxPrice) {   //如果卖出减去买入的价格大于 最高价的时候
                maxPrice = nums[j] - nums[i]   //最高价则与其相等
                maxDay = j    //最高价的天数为j
            }
         
        }

        temp[i] = {
            "maxDay": maxDay,  
            "maxPrice": maxPrice
        }
    }

    let tempMax = 0
    for (var key in temp) {
        if(temp[key]["maxPrice"] > tempMax){
           
            tempMax = temp[key]["maxPrice"]
            buyDay = key
            sellDay = temp[key]["maxDay"]
            
        }
              
    }
   
  
    return [parseInt(buyDay), sellDay]
   
}

console.log(maxProfitDays([17, 11, 60, 25, 150, 75, 31, 120]))