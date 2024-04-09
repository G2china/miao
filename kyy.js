var resBody = $response.body;

var url1 = "xcx-api.zuduijun.com/api/activity-detail-queue";
var url2 = "xcx-api.zuduijun.com/api/get-times-by-activity_id?activity_id=";
var url3 = "zuduijun.com/api/zdj-activities";
var url4 = "act=GetCustSubscribeDateAll";

if ($request.url.indexOf(url1) != -1) {
    //取消开抢时间限制 取消弹窗
    resBody = resBody.replace(/"start_time_info":{.*?}/g, '"start_time_info":null');
    resBody = resBody.replace(/"must_read".*?]}/g, '"must_read":null');
} else if ($request.url.indexOf(url2) != -1) {
    //增加可预约库存 提前进122
    resBody = resBody.replace(/"vote_limit":.*?,/g, '"vote_limit":666,');
    resBody = resBody.replace(/"is_started":[^}]/g, '"is_started":1');
} else if ($request.url.indexOf(url3) != -1) {
    resBody = resBody.replace(/"must_read".*?]}/g, '"must_read":null');
    resBody = resBody.replace(/"is_started":[^}]/g, '"is_started":1');
} else if ($request.url.indexOf(url4) != -1) {
    resBody = resBody.replace(/"enable":[^}]+/g, '"enable":true');
}

$done({ body: resBody });
