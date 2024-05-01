if ($request.url.indexOf("getReservedateListByStadiumId") != -1) {
    var resBody = $response.body;
    var json = JSON.parse(resBody);
    
    var endDate = json.data.enddate;
    var date = {"reservedate": endDate, "visitorsnum": 3200, "usednum": null, "avaiablenum": null};
    json.data.resultList.push(date);
    
    $done({ body: JSON.stringify(json) });
}else if ($request.url.indexOf("getReservePeriodListByDate") != -1) {
    var modifiedBody = $response.body;
    modifiedBody = modifiedBody.replace(/"avaiable":"N"/g, '"avaiable":"Y"');
    modifiedBody = modifiedBody.replace(/"available":"N"/g, '"available":"Y"');
    modifiedBody = modifiedBody.replace(/"avaiablenum":0/g, '"avaiablenum":1000');
    modifiedBody = modifiedBody.replace(/"availableNum":0/g, '"availableNum":1000');
    $done({body: modifiedBody});
}else {
    $done({ body: $response.body });
}
