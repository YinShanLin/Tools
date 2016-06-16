mui.init();

mui.plusReady(function() {

	var screenWidth = plus.display.resolutionWidth;
	var screenHeight = plus.display.resolutionHeight;

	//#Canvas_Top_Id
	var canvasTop = document.getElementById('welcome_page_canvas_id');
	canvasTop.style.width = screenWidth + 'px';
	canvasTop.style.height = screenHeight + 'px';
	var contextTop = canvasTop.getContext('2d');

	//画网络线
	function drawCanvasTopGrid(color, stepx, stepy) {
		contextTop.save()
		contextTop.strokeStyle = color;
		contextTop.fillStyle = 'lightgoldenrodyellow';
		contextTop.lineWidth = 0.5;
		contextTop.fillRect(0, 0, contextTop.canvas.width, contextTop.canvas.height);
		for (var i = stepx + 0.5; i < contextTop.canvas.width; i += stepx) {
			contextTop.beginPath();
			contextTop.moveTo(i, 0);
			contextTop.lineTo(i, contextTop.canvas.height);
			contextTop.stroke();
		}
		for (var i = stepy + 0.5; i < contextTop.canvas.height; i += stepy) {
			contextTop.beginPath();
			contextTop.moveTo(0, i);
			contextTop.lineTo(contextTop.canvas.width, i);
			contextTop.stroke();
		}
		contextTop.restore();
	};

	drawCanvasTopGrid('lightgray', 20, 5);

	//#WelcomeEnterId
//	document.getElementById('welcomeEnterId').addEventListener('tap', function() {
//
//		//打开关于页面
//		mui.openWindow({
//			url: '../index.html',
//			waiting: {
//				autoShow: true, //自动显示等待框，默认为true
//				title: '正在加载...' //等待对话框上显示的提示内容
//			}
//		});
//	});
});