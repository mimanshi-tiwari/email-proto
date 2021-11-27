1342 = 

1432

73847623746
7384762 3764
7384762 4367

function nextGreater(num){
    let StrNum = String(num);
    let result = [];
    StrNum.split('')
  for(let i = StrNum.length-1; i>= 0 ;i--){

    if(StrNum[i] > StrNum[i-1]){
        let min = StrNum[i]
        result.push(StrNum[i]);
        result.push(StrNum.slice(i, i-1).sort());
        i -= 1;
    }else{
        result.unshift(StrNum[i]);
    }
  }
}
''