mui.init();

mui.plusReady(function() {
	var xhr = new plus.net.XMLHttpRequest();

	var url = 'http://apis.baidu.com/apistore/iplookupservice/iplookup';
	console.log("dsdsds");

		mui.ajax(url, {
			data: {
				ip:'58.210.45.139'
			},
			dataType: 'json', //服务器返回json格式数据
			type: 'get', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			crossDomain: true,
			headers: {
				apikey: '0be90e9bdeae5f60b8a8e47436e79e17'
			},
			success: function(data) {
				alert("dsds");
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