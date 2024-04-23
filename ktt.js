var url1 = "api.pinduoduo.com/api/ktt_group/group_query/query_group_info_for_customer_preload";
var url2 = "api.pinduoduo.com/api/ktt_group/group_query/weak_auth/query_group_info_for_customer";
var url3 = "api.pinduoduo.com/api/ktt_order_core/customer/ordering/query_amount_on_order_page";

var resBody = $response.body;

if ($request.url.indexOf(url1) != -1) {
    resBody = resBody.replace(/"status":[^,]+/g, '"status":1');
}
else if ($request.url.indexOf(url2) != -1) {
    resBody = resBody.replace(/"status":[^,]+/g, '"status":1');
    resBody = resBody.replace(/"isSubscribed":true/g, '"isSubscribed":false');
}
else if ($request.url.indexOf(url3) != -1) {
    resBody = '{"success":true,"error_code":1000000,"result":{"order_detail":{"order_price":1,"shipping_price":0,"service_price":0,"coupon_price":0,"platform_coupon_price":0,"mall_multi_discount_price":0,"mall_coupon_full_reduction_price":0,"mall_coupon_member_price":0,"mall_coupon_price":0,"pay_price":1},"mall_promotion_list":[],"is_show_payment_info":false,"pay_method_info":{"is_show_payment_info":false},"use_new_create_order":true,"support_buy_for_relatives":true,"pay_dialog_type":0}}';
}

$done({body: resBody});
