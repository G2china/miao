$notify("Quantumult X", "通知副标题", "这是一条通知内容");

const body = $response.body;

// 对响应 body 中的 "state" 进行替换操作2233
const replacedBody = body.replace(/\"state\":[^,]/g, '"state":2');

$done({ body: replacedBody });
