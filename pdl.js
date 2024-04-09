if ($request.url.indexOf("trading.dmall-os.cn/cartOnline/add") != -1) {    
    var responseContent = $response.body;
    console.log(responseContent);
    try {
        var json = JSON.parse(responseContent);
        var msg = json["sourceMsg"];
         console.log(msg);
        if (msg === "当前已超过限购数量") {
            $notify("Quantumult X", "通知副标题", "这是一条通知内容1");
        }
    } catch (err) {
        // JSON 解析错误
        // 可以在此处添加逻辑处理
    }
}

if ($request.url.indexOf("trade.dmall-os.cn/trade/gate/mini/submit") != -1) {
    var responseContent = $response.body;
    try {
        var json = JSON.parse(responseContent);
        var msg = json["msg"];
        if (msg === "成功") {
            $notify("提示", "抢到了，检查待付款", "");
        }
    } catch (err) {
        // JSON 解析错误
        // 可以在此处添加逻辑处理
    }
}
