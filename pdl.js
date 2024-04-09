var body = $response.body;
console.log("进来了");
try {
    // 解析返回值为 JSON
    var jsonData = JSON.parse(body);
    console.log("去你妹的");
    // 检查键 msg 是否等于 "你好啊"
    if (jsonData.msg.toString() === "当前已超过限购数量") {
        console.log("987");
    }
} catch (error) {
    console.log("Error:", error.message);
}

$done();