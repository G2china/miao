var body = $response.body;
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