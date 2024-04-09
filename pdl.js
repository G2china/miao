$notify("提示", "胖东来", "库存加满了");
var body = $response.body;
console.log("8989889877987");
try {
    var jsonData = JSON.parse(body);
	console.log(jsonData.msg);
    if ( jsonData.msg === "当前已超过限购数量") {
        console.log("987");
    }
} catch (error) {
    console.log("Error: " + error.message);
} finally {
    $done({});
}