<div id="divId" class="class1" onClick="onClick">

</div>

componentDidMount                   

useEffect(() => {
  // component did mount
}, []);

souldComponentUpdate
componentWillUpdate
render
componentDidUpdate

useEffect(() => {
   // component did update
}, [dependency])


componentWillunmount

useEffect(() => {
    return () => {
        // component will unmount
    }
}, [input])



function x() {
    return new Promise((res,rej) => {

    });
}

 const y = x();
 y.then();

 function promise(...args){
     const returnFun = function(cb) {
         try {
            
         }catch(e) {
            
         }
     }
     return returnFun;
 }



 sum(1,2,3) 
 sum(1)
 sum(1)(2)(3);

 function sum(...num1) {
    if(num1.length >1) return num1.reduce((a,b) => a+b,0)
    else {
        return function(num2) {
            return  num2 ? sum(num1[0] + num2): num1[0];
    }
    }
 }