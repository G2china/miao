$notify("提示", "胖东来", "库存加满了");
// 解析返回值为 JSON
var body = $response.body;
var jsonData = JSON.parse(body);
console.log(jsonData.msg);
// 检查键 msg 是否等于 "你好啊"
if (jsonData.msg === "当前已超过限购数量") {
    console.log("9876545645646564564");
}

$done({});