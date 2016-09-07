$(document).ready(function(){
	var weekdayWD = $("#weekday0").width();
	var BublesWD = $(".bubles").width();//获取浮动泡泡的宽度
	var plusWD = weekdayWD - BublesWD;//计算需要多便宜的宽度
	var navWD = $(".navMain").width();//获取周数导航条的大小
	var wholewd = $(document).width();//获取整个窗口的宽度
	var other = wholewd - navWD;//计算多余出来的宽度
	
	var courseWrapWidth = $(".courseWrap").width();
	$(".swiper-wrapper").animate({width:courseWrapWidth * 9},0);
	$(".main").width(courseWrapWidth);
	
	function SwiperToDate() {
    			var index = mySwiper.activeIndex;
    			var Bublesoffset = $(".bubles").offset().left;//获取泡泡的X值
				var Target = $(".navMain li").eq(index).offset();//获得被点击的列表的位置
				var TargetWD = $(".navMain li").eq(index).width();//获得被点击的列表的宽度
				var plus = TargetWD - BublesWD;//计算小球和星期LI的宽度差
				var TargetX = Target.left;//获得被点击的列表的X值
				var Targetoffset = TargetX - other/2 + plus/2 - 2.7;//计算最终目标需要的偏移值
				var text = $(".navMain li").eq(index).text();//获取对象内的文本
				$(".bubles").animate({left:Targetoffset + "px"},200).html(text);
    		}
	
	var mySwiper = new Swiper ('.swiper-container', {
    		direction: 'horizontal',
    		loop: false,
    		touchRatio:0.5,
    		onSlideChangeEnd:function(){
    			SwiperToDate();
    		}
    });
	
	
	
	
	
	var j = 0;
	$(".course").addClass("clearfix");
	$(".classesCounter").addClass("clearfix");









//导航条动画样式开始//////////////////////////////////////////////////////////////////////////////////////////////////////////
	var screenHeight = $(window).height();
	var weekWD = $(".week div:nth-child(1)").width();//页面一加载获取周数显示的宽度
	var MarginLeftnum = weekWD/-2;//计算周数显示的DIV需要偏移的量
	$("body").animate({height:screenHeight},0);//保证BODY的高度一直是屏幕的高度
	$(".wrap").animate({height:screenHeight},0);//保证wrap的高度一直是屏幕的高度
	$(".main").animate({height:screenHeight - 229 + "px"},0);//设置主题的高度
	$(".week").animate({marginLeft:MarginLeftnum + "px"},0);//将计算后的值赋给周数显示div
	$(".weekBG").animate({height:screenHeight - 52 + "px"},0)//为周数显示列表添加背景
	
	$(".week1").click(function(){//按钮1被点击时
		$(".WeekListWrap").css("display","block");//将周数下拉列表设为可见，方便动画表现
		$(".WeekListWrap").stop().addClass("WeekListWrapAni");//周数列表隐藏
		$(".weekBG").stop().fadeIn(300);//为周数列表背景添加动画
		$(".week1").css("display","none");//按钮1隐藏
		$(".week2").css("display","block");//按钮2出现
	});
	$(".week2").click(function(){//按钮2被点击时
		$(".WeekListWrap").stop().slideUp(500);//周数列表隐藏
		
		$(".WeekListWrap").removeClass("WeekListWrapAni");
		$(".weekBG").stop().fadeOut(300);//为周数列表背景添加动画
		$(".week2").css("display","none");//按钮2隐藏
		$(".week1").css("display","block");//按钮1出现
	});
	$(".weekBG").click(function(){
		$(".WeekListWrap").removeClass("WeekListWrapAni");
		$(".WeekListWrap").stop().slideUp(500);//周数列表隐藏
		$(this).stop().fadeOut(300);//为周数列表背景添加动画
		$(".week2").css("display","none");//按钮2隐藏
		$(".week1").css("display","block");//按钮1出现
	})
	
	$(".WeekList li").click(function(){
		var Text = $(this).text();//获取被点击标签内的文本
		$(".WeekListWrap").stop().slideUp(500);//周数列表隐藏
		$(".WeekListWrap").removeClass("WeekListWrapAni");
		$(".weekBG").stop().delay(100).fadeOut(300);
		$(".week2").css("display","none");//按钮2隐藏
		$(".week1").css("display","block");//按钮1出现
		$(".week div:nth-child(1)").html(Text);//将获取到的文本写入周数显示的DIV中
		var weekWD = $(".week div:nth-child(1)").width();//点击按钮后获取周数显示的宽度
		var MarginLeftnum = weekWD/-2;//计算周数显示的DIV需要偏移的量
		$(".week").animate({marginLeft:MarginLeftnum + "px"},0);//将计算后的值赋给周数显示div
		$(this).addClass("WeekListLiOn").siblings().removeClass("WeekListLiOn");//选中之后添加样式，再移出其他样式
	});
	
//////////////////////////////////////////////////////////////////////////////////////////////////////////导航条动画样式结束//	
	
	
	
//对浮动泡泡需要的值进行获取开始//////////////////////////////////////////////////////////////////////////////////////////////////	
	var weekday0 = $("#weekday0").offset().left + plusWD/2 - other/2;//计算星期几时需要的位置偏移量
	var weekday1 = $("#weekday1").offset().left + plusWD/2 - other/2;
	var weekday2 = $("#weekday2").offset().left + plusWD/2 - other/2;
	var weekday3 = $("#weekday3").offset().left + plusWD/2 - other/2;
	var weekday4 = $("#weekday4").offset().left + plusWD/2 - other/2;
	var weekday5 = $("#weekday5").offset().left + plusWD/2 - other/2;
	var weekday6 = $("#weekday6").offset().left + plusWD/2 - other/2;	
//////////////////////////////////////////////////////////////////////////////////////////////////对浮动泡泡需要的值进行获取结束//	
	







//周几显示条的判断和赋值开始////////////////////////////////////////////////////////////////////////////////////////////////////
	var week = new Date().getDay();  //获取目前的周数
	
	if (week == 0) {  //判断是周几
		var mainHright = $(".main").height();
		var courseHeight = $(".courseWrap").eq(0).height();
        document.getElementById("bubles").innerHTML = "<div class='new'>日</div>";//向对象内添加DIV和内容
        $(".bubles").animate({left:weekday0 + "px"},0);//设置浮动泡泡的偏移值
        $(".bubles").css("display","block");
//      $(".courseWrap").eq(0).show().siblings().hide();
		mySwiper.swipeTo(0,500,false);
//      if (courseHeight < mainHright) {
//		$(".main").addClass("mainOff");
//		} else{
//			$(".main").removeClass("mainOff");
//		};
	} else if (week == 1) {  
		var mainHright = $(".main").height();
		var courseHeight = $(".courseWrap").eq(1).height();
        document.getElementById("bubles").innerHTML = "<div class='new'>一</div>"; 
        $(".bubles").animate({left:weekday1 + "px"},0);
        $(".bubles").css("display","block");
//      $(".courseWrap").eq(1).show().siblings().hide();
		mySwiper.swipeTo(1,500,false);
//      if (courseHeight < mainHright) {
//		$(".main").addClass("mainOff");
//		} else{
//			$(".main").removeClass("mainOff");
//		};
	} else if (week == 2) {  
		var mainHright = $(".main").height();
		var courseHeight = $(".courseWrap").eq(2).height();
        document.getElementById("bubles").innerHTML = "<div class='new'>二</div>"; 
        $(".bubles").animate({left:weekday2 + "px"},0);
        $(".bubles").css("display","block");
//      $(".courseWrap").eq(2).show().siblings().hide();
		mySwiper.swipeTo(2,500,false);
//      if (courseHeight < mainHright) {
//		$(".main").addClass("mainOff");
//		} else{
//			$(".main").removeClass("mainOff");
//		};
	} else if (week == 3) {  
		var mainHright = $(".main").height();
		var courseHeight = $(".courseWrap").eq(3).height();
        document.getElementById("bubles").innerHTML = "<div class='new'>三</div>"; 
        $(".bubles").animate({left:weekday3 + "px"},0);
        $(".bubles").css("display","block");
//      $(".courseWrap").eq(3).show().siblings().hide();
		mySwiper.swipeTo(3,500,false);
//      if (courseHeight < mainHright) {
//		$(".main").addClass("mainOff");
//		} else{
//			$(".main").removeClass("mainOff");
//		};
	} else if (week == 4) {  
		var mainHright = $(".main").height();
		var courseHeight = $(".courseWrap").eq(4).height();
        document.getElementById("bubles").innerHTML = "<div class='new'>四</div>"; 
        $(".bubles").animate({left:weekday4 + "px"},0);
        $(".bubles").css("display","block");
//      $(".courseWrap").eq(4).show().siblings().hide();
		mySwiper.swipeTo(4,500,false);
//      if (courseHeight < mainHright) {
//		$(".main").addClass("mainOff");
//		} else{
//			$(".main").removeClass("mainOff");
//		};
	} else if (week == 5) {  
		var mainHright = $(".main").height();
		var courseHeight = $(".courseWrap").eq(5).height();
        document.getElementById("bubles").innerHTML = "<div class='new'>五</div>";  
        $(".bubles").animate({left:weekday5 + "px"},0);
        $(".bubles").css("display","block");
//      $(".courseWrap").eq(5).show().siblings().hide();
		mySwiper.swipeTo(5,500,false);
//      if (courseHeight < mainHright) {
//		$(".main").addClass("mainOff");
//		} else{
//			$(".main").removeClass("mainOff");
//		};
	} else if (week == 6) {  
		var mainHright = $(".main").height();
		var courseHeight = $(".courseWrap").eq(6).height();
        document.getElementById("bubles").innerHTML = "<div class='new'>六</div>"; 
        $(".bubles").animate({left:weekday6 + "px"},0);
        $(".bubles").css("display","block");
//      $(".courseWrap").eq(6).show().siblings().hide();
		mySwiper.swipeTo(6,500,false);
//      if (courseHeight < mainHright) {
//		$(".main").addClass("mainOff");
//		} else{
//			$(".main").removeClass("mainOff");
//		};
	}  
//		var mainHright = $(".main").height();
//	    var GetThiscourseWrapHeight = $(".courseWrap").eq(week).height();
//	    if (courseHeight < mainHright) {
//		$(".main").addClass("mainOff");
//		} else{
//			$(".main").removeClass("mainOff");
//		};
//////////////////////////////////////////////////////////////////////////////////////////////////周几显示条的判断和赋值结束//
	


	$(".navMain li").click(function(){//周几的导航条被点击时发生的动作
		var index = $(this).index();
		var Bublesoffset = $(".bubles").offset().left;//获取泡泡的X值
		var Target = $(this).offset();//获得被点击的列表的位置
		var TargetWD = $(this).width();//获得被点击的列表的宽度
		var plus = TargetWD - BublesWD;//计算小球和星期LI的宽度差
		var TargetX = Target.left;//获得被点击的列表的X值
		var Targetoffset = TargetX - other/2 + plus/2 - 2.7;//计算最终目标需要的偏移值
		var text =$(this).text();//获取对象内的文本
		var mainHright = $(".main").height();
		var courseHeight = $(".courseWrap").eq(index).height();
		$(".bubles").animate({left:Targetoffset + "px"},300).html(text);//将计算出来的偏移值赋值给浮动泡泡
//		$(".courseWrap").eq(index).show().siblings().hide();
//		if (courseHeight < mainHright) {
//		$(".courseWrap").eq(index).addClass("mainOff");
//		} else{
//			$(".courseWrap").eq(index).removeClass("mainOff");
//			alert("123")
//		};
		mySwiper.swipeTo(index,500,false);
	});
	
	
	
	
	
	
	
	
	
	
	
//	$(".courseInfoTitle").click(function(){
//		j++;
//		if (j == 1) {
//			$(this).addClass("courseInfoTitleClick");
//		} 
//		if (j == 2) {
//			$(this).removeClass("courseInfoTitleClick");
//			j = 0;
//		}
//	});
//	$(".courseLocation").click(function(){
//		j++;
//		if (j == 1) {
//			$(this).addClass("courseLocationOn");
//		} 
//		if (j == 2) {
//			$(this).removeClass("courseLocationOn");
//			j = 0;
//		}
//	});


$(".course").click(function(){
		j++;
		if (j == 1) {
			$(this).find(".courseInfoTitle").addClass("courseInfoTitleClick");
			$(this).find(".courseLocation").addClass("courseLocationOn");
		} 
		if (j == 2) {
			$(this).find(".courseInfoTitle").removeClass("courseInfoTitleClick");
			$(this).find(".courseLocation").removeClass("courseLocationOn");
			j = 0;
		}
});
	
	
	
	$(".WeekList li").eq(0).addClass("WeekListLiOn");//w为对应周数的条目添加选中样式
	$(".colorBar").eq(1).addClass("colorBarOn");//为正在上的课添加“正在上课”样式
	$(".courseInfoTitle").eq(1).addClass("courseInfoTitleOn");//为正在上的课添加“正在上课”样式
	
	

	
	
})