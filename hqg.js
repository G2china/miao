if ($request.url.indexOf("mall.hqc.cn/flash-sale/site-protocol/get-protocol?m_code=") != -1) {
    var resBody = $response.body;
    resBody = resBody.replace(/"alertFlag":true/g, '"alertFlag":false');
    $done({body: resBody});
}
