function threeSum(arr, target) {
  // write your code here
    arr.sort((a,b)=>{
         if(a<b) return -1;
      else if(a>b) return 1;
    });
  
    let diff=Infinity;
    let ans;

    for(let i=0;i<arr.length;i++){
       let j=i+1;
      let k=arr.length-1;
      while(j<k){
        let sum=arr[i]+arr[j]+arr[k];
        if(sum==target) return sum;

        else if(sum<target){
          let d=target-sum;
          if(d<diff){
            diff=d;
            ans=sum;
          }
          j++;
        }

        else if(sum>target){
          let d=sum-target;
          if(d<diff){
            diff=d;
            ans=sum;
          }
          k--;
        }


      }
  
   
    }
    return ans;
    
  }

module.exports = threeSum;
