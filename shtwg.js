var resBody = $response.body;

if ($request.url.indexOf("getReservedateListByStadiumId.xhtml") != -1) {
    var json = JSON.parse(resBody);

    var endDate = json.data.enddate;
    var date = {"reservedate": endDate, "visitorsnum": 3123, "usednum": null, "avaiablenum": null};
    json.data.resultList.push(date);
    console.log(json);
    console.log("-----------------");
    console.log(JSON.stringify(json));
    $done({ body: JSON.stringify(json) });
} else {
    $done({ body: $response.body });
}
