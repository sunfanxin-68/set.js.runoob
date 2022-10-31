const EventEmitter = require("events")
const event = new EventEmitter()

event.on("play", (data)=> {
    console.log("事件触发了-play",data)
})

event.on("run", (data)=> {
    console.log("事件触发了-run",data)
})

//event.emit("play")
setTimeout(()=>{  //设定时间多久后运行触发
    event.emit("run","传递出一个参数")
},3000)