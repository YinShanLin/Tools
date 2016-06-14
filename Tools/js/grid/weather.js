mui.init();

mui.plusReady(function() {
	var xhr = new plus.net.XMLHttpRequest();

	var url = ' http://apis.baidu.com/thinkpage/weather_api/suggestion';

	function testTap() {
		console.log("aaa");

		document.getElementById("weather-submit-id").addEventListener('tap', function() {
			console.log("bbb");
		});
	}
	testTap();

	//	mui.ajax(url, {
	//		data: {
	//			location: '龙州',
	//			language: 'zh-Hans',
	//			unit: 'c',
	//			start: '0',
	//			days: '1'
	//		},
	//		dataType: 'json', //服务器返回json格式数据
	//		type: 'get', //HTTP请求类型
	//		timeout: 10000, //超时时间设置为10秒；
	//		crossDomain: true,
	//		headers: {
	//			apikey: 'e5cec900d95b80e69fa2353b2004f90a'
	//		},
	//		success: function(data) {
	//			data = JSON.stringify(data);
	//			console.log(data);
	//		},
	//		error: function(xhr, type, errorThrown) {
	//			console.log(xhr);
	//			console.log(type);
	//			console.log(errorThrown);
	//		}
	//	});
});