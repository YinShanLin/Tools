mui.init();

mui.ready(function() {

	/**
	 * 九宫格界面循环
	 * */
	var slider = document.getElementById('Gallery');
	var group = slider.querySelector('.mui-slider-group');
	var items = mui('.mui-slider-item', group);
	//克隆第一个节点
	var first = items[0].cloneNode(true);
	first.classList.add('mui-slider-item-duplicate');
	//克隆最后一个节点
	var last = items[items.length - 1].cloneNode(true);
	last.classList.add('mui-slider-item-duplicate');
	//处理是否循环逻辑，若支持循环，需支持两点：
	//1、在.mui-slider-group节点上增加.mui-slider-loop类
	//2、重复增加2个循环节点，图片顺序变为：N、1、2...N、1
	var sliderApi = mui(slider).slider();

	function toggleLoop() {

		group.classList.add('mui-slider-loop');
		group.insertBefore(last, group.firstChild);
		group.appendChild(first);
		sliderApi.refresh();
		sliderApi.gotoItem(0);
	}
	toggleLoop();

	/**
	 * 九宫格对应的页面
	 * */
//	function openGridPages(aaa, bbb) {
//		document.getElementById(aaa).addEventListener('tap', function() {
//			mui.openWindow({
//				url: bbb
//			});
//		});
//	}

		function openGridPages(aaa, bbb) {
			document.getElementById(aaa).addEventListener('tap', function() {
				mui.openWindow({
					url: bbb,
					waiting: {
						autoShow: true, //自动显示等待框，默认为true
						title: '正在加载...' //等待对话框上显示的提示内容
					}
				})
			});
		}

	openGridPages('express-tap-id', 'grid/express.html');
	openGridPages('phoneNumber-tap-id', 'grid/phoneNumber.html');
	openGridPages('IDCard-tap-id', 'grid/idCard.html');
	openGridPages('weather-tap-id', 'grid/weather.html');
	openGridPages('postCodes-tap-id', 'grid/postCodes.html');
	openGridPages('IPAddress-tap-id', 'grid/IPAddress.html');
	openGridPages('baseStation-tap-id', 'grid/baseStation.html');
	openGridPages('oilPrice-tap-id', 'grid/oilPrice.html');
	openGridPages('news-tap-id', 'grid/news.html');

});