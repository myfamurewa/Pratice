var canCompleteCircuit = function(gas, cost) {
    let start = 0, tank = 0, required = 0;
    for(let i = 0; i < gas.length; i++){
        tank += gas[i] - cost[i]
        if(tank < 0){
            required += tank;
            start = i + 1;
            tank = 0
        }
    }
    return tank >= Math.abs(required) ? start : -1;
};

console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]))
