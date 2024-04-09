var body = $response.body;

try {
    // 解析返回值为 JSON
    var jsonData = JSON.parse(body);

    // 检查键 msg 是否等于 "你好啊"
    if (jsonData.msg && jsonData.msg.toString() === "你好啊") {
        console.log("987");
    }
} catch (error) {
    console.log("Error:", error.message);
}

$done();