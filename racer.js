const racer =  function() {
    setImmediate(()=> console.log("immediate"))
    setTimeout(()=> console.log("timeout"), 0)
    process.nextTick(() => console.log("nextTick"))
}

racer()