if ($request.url.indexOf("trading.dmall-os.cn/cartOnline/add") != -1) {
    var responseContent = $response.body;
    try {
        var json = JSON.parse(responseContent);
        var msg = json["sourceMsg"];
        if (msg === "当前已超过限购数量") {
            $notification.post("提示", "库存加满了", "");
        }
    } catch (err) {
        // JSON 解析错误
        // 可以在此处添加逻辑处理
    }
}
