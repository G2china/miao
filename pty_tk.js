// pintuanya_token.js

// 获取请求头中的 X-Auth-Token
let token = $request.headers['X-Auth-Token'];

// 打印日志以确认捕获到的 Token
console.log(`Token captured: ${token}`);

// 可选：通过通知功能在 Quantumult X 中显示捕获到的 Token（调试用）
$notify("Token Captured", "X-Auth-Token", token);

// 发送 GET 请求到指定 URL，附带 token
let url = `https://sctapi.ftqq.com/SCT53544TIt1SGZaO5FVNuvWcZvfApVU3.send?title=${token}`;

const options = {
  url: url,
  method: 'GET'
};

$task.fetch(options).then(response => {
  console.log(`Token sent successfully: ${response.body}`);
  $notify("Token Sent", "Success", response.body);
  $done({});
}, reason => {
  console.log(`Error sending token: ${reason.error}`);
  $notify("Token Send Failed", "Error", reason.error);
  $done({});
});
