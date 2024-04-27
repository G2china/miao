var url1 = "lotswap.dpm.org.cn/lotsapi/merchant/api/fsyy/calendar?parkId=11324";
var url2 = "lotswap.dpm.org.cn/lotsapi/order/api/batchTimeReserveList";
var url3 = "lotswap.dpm.org.cn/dubboApi/product-core/ruleRpcService/canBuyDays";

var resBody = $response.body;

if ($request.url.indexOf(url1) != -1) {
    resBody = resBody.replace(/"stockNum":0/g, '"stockNum":1');
}

if ($request.url.indexOf(url2) != -1) {
    resBody = resBody.replace(/"num":0/g, '"num":100');
}

if ($request.url.indexOf(url3) != -1) {
    resBody = resBody.replace(/6,/g, '10,');
}

$done({ body: resBody });
