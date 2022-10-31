var http = require("http")

//创建服务器

http.createServer((req,res)=>{ 
    //创建一个交互用回调函数，req 接收浏览器的参数 res 返回渲染的内容

    // res.write("hello rain")
    // res.write("hello phayu")
    // res.end("[06,08]") //一定要加end 不然会觉得没有输入完 只能传字符串
    
    if(req.url==="/favicon.ico"){
        // to do 读取本地图标
        return
    }
    console.log(req.url)

    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    //给浏览器一个响应头响应格式 是texthtml格式
    res.write(renderHTML(req.url))
    res.end() 
}).listen(2000,()=>{  
    //此回调函数 只要服务器创建成功了 回调函数就会调用
    //监听端口号
    console.log("sever start")
})

function renderHTML(url) {

    switch(url){
        case "/home":
            return`
            <html>
                <b> hello rain </br>
                <div>home页面</div>
                </html>
            `

            case "/list":
                return `
                <html>
                <b> hello phayu </br>
                     <div>list页面</div>
                </html>
                `
                default : 
                return `
                    <html>
                       
                        <div>404 not foundエラだよ</div>
                    </html>
                    `
        
    }
   
    
}