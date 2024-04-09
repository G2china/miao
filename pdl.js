// 解析返回值为 JSON
var jsonData = JSON.parse($response.body);

// 检查键 msg 是否等于 "你好啊"
if (jsonData.msg && jsonData.msg.toString() === "当前已超过限购数量") {
    console.log("当前已超过限购数量");
}

$done();