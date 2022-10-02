 function statsFinder(array) {
    // Write your code here
      let avgArg = 0; //设一个平均值
      let total = 0;//设一个总数相加的和
  
      let maxCountArg = 0  //设一个众数
      let obj = {}  //设一个构造函数 用来求众数
  
      for(let i=0; i<array.length; i++) {  //遍历数组
          total += array[i];              //总数等于遍历数组后相加的i
  
          if(obj.hasOwnProperty(array[i])){   
              obj[array[i]] =  obj[array[i]] + 1;  //统计众数出现 出现一次 +1
          }else{
              obj[array[i]] = 1;   //不然就出现一次等于1 
          }
      }
      
      let max = 0;      //设一个出现次数最多的众数 max
      for(var key in obj){    //在函数中 如果关键值key出现最大的次数 
          if(obj[key] > max){   //则让max等于那个出现次数最多的数
              max = obj[key]
          }
      }
  
      let maxKeys = [];   // 设一个出现的最大值
      for(var key in obj){    //在构造函数中 如果 出现的最大值等于众数max
          if(obj[key] == max){     //出现相同次数的放一个数组里
              maxKeys.push(key);
          }
      }
  
      for(let i=0; i<array.length; i++) {   
          if(maxKeys.indexOf(String(array[i])) > -1){
              maxCountArg = array[i];  //出现相同次数的放一个数组里
              break;
          }
      }
  
      avgArg = total/array.length;  //平均数为 总数除以 数组个数
  
      return [avgArg, maxCountArg]  //返回一个数组显示着平均数和众数
  }
  
  
  console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300]))
  
  // Leave this so we can test your code:
  module.exports = statsFinder;