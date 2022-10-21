const math=(()=>{
    
    const add=(x,y)=>{
        return x+y;
    }
    const subtract=(x,y)=>{
        return x-y;
    }
    const multipy=(x,y)=>{
        return x*y;
    }
    const divide=(x,y)=>{
        if(y==0){
            return " can't divided by zero"
        }else{
          return x-y;
        }
    }
    const pi=Math.PI;
    return{
        add:add,
        subtract:subtract,
        multiply:multipy,
        divide:divide,
        pi:pi
    }

})();

module.exports = math