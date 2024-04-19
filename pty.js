var resBody = $response.body;
// 定义网址变量
var url1 = "api.pintuanya.com/api/v1/common/groupon/detail?groupon_uuid=";
var url2 = "api.pintuanya.com/api/v1/common/groupon/item/batch?groupon_uuid=";
var url3 = "api.pintuanya.com/api/common/previewOrder2";

// 详情，将 state 改为 2
if ($request.url.indexOf(url1) != -1) {
    resBody = resBody.replace(/"state":[^,]*/g, '"state":2');
} 
// 取消冻结商品，将 is_locked 改为 0
else if ($request.url.indexOf(url2) != -1) {
    resBody = resBody.replace(/"is_locked":1/g, '"is_locked":0');
} 
// 预览订单，将 locked 改为 ok
else if ($request.url.indexOf(url3) != -1) {
    resBody = resBody.replace(/locked/g, 'ok');
}

$done({body: resBody});
