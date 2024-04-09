var body = $response.body;
var jsonData = JSON.parse(body);
if ( jsonData.sourceMsg  === "当前已超过限购数量") {
    $notify("Quantumult X", "胖东来", "超过限购数量");
}
$done({});
