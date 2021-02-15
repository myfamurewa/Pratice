function findCircleNum(isConnected: number[][]): number {
    let provinces = {}
    for(let city= 0; city < isConnected.length; city++){
        let hasConnections = false;
        for(let connected = city; connected < isConnected.length; connected++){
            if(isConnected[city][connected] === 1){
                if(provinces[city]){
                    provinces[city].push(connected)
                    if(city !== connected){
                        hasConnections = true
                    }
                } else {
                    provinces[city] = [connected]
                }
            }
        }
    }

};
// Given an array of array where each array is a city and whether it is connected to other cities
// loop through the array
// figure out which cities are directly connected
// there are only n cities so each city will only have n entries
// [1, 1, 0]
// [1, 1, 0]
// [0, 0, 1]
// we need to find how many provinces exist in an array
// a province is a group of all connected cities
// 
function findCircleNumII(isConnected: number[][]): number {
    function travel(city: number): void {
        for(let i = 0; i < isConnected.length; i++) {
            if(i !== city && isConnected[i][i] === 1 && isConnected[city][i] === 1) {
                isConnected[city][i] = 0;
                isConnected[i][city] = 0;
                isConnected[i][i] = 0;
                isConnected[city][city] = 0;
                travel(i);
            }
        }
    }
    
    let provinces: number = 0;
    for(let city: number = 0; city < isConnected.length; city++) {
        if(isConnected[city][city] === 1){
            travel(city);
            provinces++;
        }
    }
    return provinces;
};