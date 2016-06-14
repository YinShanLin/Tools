mui.init();

mui.plusReady(function() {
	var xhr = new plus.net.XMLHttpRequest();
	var url = 'http://apis.baidu.com/thinkpage/weather_api/suggestion';

	document.getElementById('weather-submit-id').addEventListener('tap', function() {
		var weather_location = document.getElementById("weather-location-id").value;
		var weather_language = document.getElementById("weather-language-id").value;
		var weather_unit = document.getElementById("weather-unit-id").value;
		var weather_start = document.getElementById("weather-start-id").value;
		var weather_days = document.getElementById("weather-days-id").value;
		
		mui.ajax(url, {
			data: {
				location: weather_location,
				language: weather_language,
				unit: weather_unit,
				start: weather_start,
				days: weather_days
			},
			dataType: 'json', //服务器返回json格式数据
			type: 'get', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			crossDomain: true,
			headers: {
				apikey: 'e5cec900d95b80e69fa2353b2004f90a'
			},
			success: function(data) {
				data = JSON.stringify(data);
				console.log(data);
			},
			error: function(xhr, type, errorThrown) {
				console.log(xhr.prototype);
				console.log(type);
				console.log(errorThrown);
			}
		});
	});

});