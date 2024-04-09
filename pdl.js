var body = $response.body;
console.log("Response Body:", body);
try {
    var jsonData = JSON.parse(body);
    console.log("Parsed JSON Data:", jsonData);
    if (jsonData.hasOwnProperty("msg")) {
        console.log("Value of msg:", jsonData.msg);
        if (jsonData.msg === "当前已超过限购数量") {
            console.log("Value is '当前已超过限购数量', so outputting '987'");
            console.log("987");
        } else {
            console.log("Value is not '当前已超过限购数量'");
        }
    } else {
        console.log("No 'msg' key found in JSON data");
    }
} catch (error) {
    console.log("Error: " + error.message);
} finally {
    $done({});
}
