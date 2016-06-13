mui.init();

mui.ready(function() {

	var url = 'http://apis.baidu.com/apistore/weatherservice/citylist';

	var xhr = new XMLHttpRequest();
	xhr.onload = function() {
		console.log(this.responseText);

	};
	xhr.onreadystatechange = function() {
		console.log(this.readyState);
	};
	xhr.open('get', 'http://www.baidu.com', true);
	xhr.send();

	mui.ajax(url, {
		data: {
			cityname: '%E6%9C%9D%E9%98%B3'
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		timeout: 10000, //超时时间设置为10秒；
		headers: {
			apikey: 'e5cec900d95b80e69fa2353b2004f90a'
		},
		success: function(data) {
			data = JSON.stringify(data);
			console.log(data);
		},
		error: function(xhr, type, errorThrown) {
			console.log(xhr);
			console.log(type);
			console.log(errorThrown);
		}
	});

});