$(document).ready(function(){
	var i = 0;//定义一个全局i变量
	var docW = $(document).width();//获取可视窗口的宽度
	var docH = $(document).height();//获取整个可视窗口的高度
	var navH = $(".Nav").height();//获取导航栏的高度
	var headerH = $(".header").height();//获取头部的高度
	
	$(".weekShowBtn").click(function(){//定义一个按钮
		i ++;//让每次点击i都加一
		if(i == 1){//判断当i为1的时候
			$(this).html("日视图");
			$(".main").css("display","none");
			$(".weekShow").css("display","block");
			$(".Nav").css("display","none");
			$(".copyRight").css("display","none");
		}
		if(i == 2){//判断i为2的时候
			$(this).html("周视图");
			$(".weekShow").css("display","none");
			$(".main").css("display","block");
			$(".Nav").css("display","block");
			$(".copyRight").css("display","block");
			i = 0;
		}
	})
	
	var dayH = $(".day ul").height();//获取周视图中星期几的导航条的高度
	$(".day").width(docW);//设置周视图中星期导航条的宽度为100%
	$(".weekShow").height(docH - headerH);//设置周视图的页面高度
	$(".courseShowWrap").height(docH - headerH - dayH + 60);//设置周视图中课程显示区域的外框高度
})