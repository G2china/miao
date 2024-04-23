var resBody = $response.body;
var url1 = "mall.hqc.cn/flash-sale/site-protocol/get-protocol?m_code=";
var url2 = "mall.hqc.cn/flash-sale/perform-reserve/list-perform-schedule-date";
if ($request.url.indexOf(url1) != -1) {
    //取消弹窗
    //resBody = resBody.replace(/"alertFlag":true/g, '"alertFlag":false'); 
var resBody = '{"success":true,"code":null,"desc":null,"previousUrl":null,"currentUrl":null,"nextUrl":null,"data":{"displayRule":"1","alertFlag":false,"countDown":3},"page":null,"params":null}';
}else if ($request.url.indexOf(url2) != -1) {
	//增加日期
    var newData = ',"2024-05-03"';
    resBody = resBody.replace(/"2024-05-02"/g, '"2024-05-02"' + newData);
}
$done({ body: resBody });
