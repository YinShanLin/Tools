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

		var container = mui("#weather-progressbar-id");
		if (container.progressbar({
				progress: 0
			}).show()) {
			simulateLoading(container, 0);
		}

		if (weather_location.length < 1) {
			mui.alert("查詢城市不允许为空", "重大提示", "明白", null);
			return;
		}

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

				var weather_results = document.getElementById("weather-results");
				weather_results.setAttribute("class", "mui-content");

				var weather_date = document.getElementById("weather-date-id");
				var weather_text_day = document.getElementById("weather-text_day-id");
				var weather_text_night = document.getElementById("weather-text_night-id");
				var weather_high_low = document.getElementById("weather-high_low_id");
				var weather_wind_direction_scale = document.getElementById("weather-wind_direction_scale-id");

				var daily = data.results[0].daily;

				//document.getElementById("weather-results-path-id").innerHTML = data.results[0].location.path;

				for (var i = 0; i < daily.length; i++) {

					var weather_date_tr = "weather_date_tr" + i;
					var weather_date_td = "weather_date_td" + i;
					var weather_text_day_tr = "weather_text_day_tr" + i;
					var weather_text_day_td = "weather_text_day_td" + i;
					var weather_text_night_tr = "weather_text_night_tr" + i;
					var weather_text_night_td = "weather_text_night_td" + i;
					var weather_high_low_tr = "weather_high_low_tr" + i;
					var weather_high_low_td = "weather_high_low_td" + i;
					var weather_wind_direction_scale_tr = "weather_wind_direction_scale_tr" + i;
					var weather_wind_direction_scale_td = "weather_wind_direction_scale_td" + i;

					weather_date_tr = document.createElement("tr");
					weather_date_tr.id = "weather_date_tr_id" + i;
					weather_text_day_tr = document.createElement("tr");
					weather_text_day_tr.id = "weather_text_day_tr_id" + i;
					weather_text_night_tr = document.createElement("tr");
					weather_text_night_tr.id = "weather_text_night_tr_id" + i;
					weather_high_low_tr = document.createElement("tr");
					weather_high_low_tr.id = "weather_high_low_tr_id" + i;
					weather_wind_direction_scale_tr = document.createElement("tr");
					weather_wind_direction_scale_tr.id = "weather_wind_direction_scale_tr_id" + i;

					weather_date_td = document.createElement("td");
					weather_date_td.id = "weather_date_td_id" + i;
					weather_text_day_td = document.createElement("td");
					weather_text_day_td.id = "weather_text_day_td_id" + i;
					weather_text_night_td = document.createElement("td");
					weather_text_night_td.id = "weather_text_night_td_id" + i;
					weather_high_low_td = document.createElement("td");
					weather_high_low_td.id = "weather_high_low_td_id" + i;
					weather_wind_direction_scale_td = document.createElement("td");
					weather_wind_direction_scale_td.id = "weather_wind_direction_scale_td_id" + i;

					weather_date_tr.appendChild(weather_date_td);
					weather_text_day_tr.appendChild(weather_text_day_td);
					weather_text_night_tr.appendChild(weather_text_night_td);
					weather_high_low_tr.appendChild(weather_high_low_td);
					weather_wind_direction_scale_tr.appendChild(weather_wind_direction_scale_td);

					weather_date.appendChild(weather_date_tr).innerHTML = daily[i].date;
					weather_text_day.appendChild(weather_text_day_tr).innerHTML = daily[i].text_day;
					weather_text_night.appendChild(weather_text_night_tr).innerHTML = daily[i].text_night;
					weather_high_low.appendChild(weather_high_low_tr).innerHTML = daily[i].high + "/" + daily[i].low;
					weather_wind_direction_scale.appendChild(weather_wind_direction_scale_tr).innerHTML = daily[i].wind_direction + "/" + daily[i].wind_scale;

				}

				document.getElementById("weather-last-update-id").innerHTML = new Date(Date.parse(data.results[0].last_update)).pattern("yyyy-MM-dd hh:mm:ss");
			},
			error: function(xhr, type, errorThrown) {
				console.log(xhr.prototype);
				console.log(type);
				console.log(errorThrown);
			}
		});
	});

	function simulateLoading(container, progress) {
		if (typeof container === 'number') {
			progress = container;
			container = 'body';
		}
		setTimeout(function() {
			progress += Math.random() * 20;
			mui(container).progressbar().setProgress(progress);
			if (progress < 100) {
				simulateLoading(container, progress);
			} else {
				mui(container).progressbar().hide();
			}
		}, Math.random() * 200 + 200);
	}

	Date.prototype.pattern = function(fmt) {
		var o = {
			"M+": this.getMonth() + 1, //月份         
			"d+": this.getDate(), //日         
			"h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时         
			"H+": this.getHours(), //小时         
			"m+": this.getMinutes(), //分         
			"s+": this.getSeconds(), //秒         
			"q+": Math.floor((this.getMonth() + 3) / 3), //季度         
			"S": this.getMilliseconds() //毫秒         
		};
		var week = {
			"0": "/u65e5",
			"1": "/u4e00",
			"2": "/u4e8c",
			"3": "/u4e09",
			"4": "/u56db",
			"5": "/u4e94",
			"6": "/u516d"
		};
		if (/(y+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		}
		if (/(E+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[this.getDay() + ""]);
		}
		for (var k in o) {
			if (new RegExp("(" + k + ")").test(fmt)) {
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
			}
		}
		return fmt;
	}

});