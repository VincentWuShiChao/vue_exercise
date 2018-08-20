/**
 * Created by Administrator on 2018/8/16.
 */
var test="燕子姐";
console.log(test.length);

var request=require('request');
request({
    method:"get",
    url:"http://fanyi.baidu.com/translate?aldtype=16047&query=set&keyfrom=baidu&smartresult=dict&lang=auto2zh#en/zh/happy"
}, function (response,state) {
    console.log(state);
})