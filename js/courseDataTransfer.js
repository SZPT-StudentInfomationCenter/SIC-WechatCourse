$(document).ready(function(){
	$(".courseWrap").each(function(){//对每一个日视图中的每天的课程显示区域进行遍历
		var dayIndex = $(this).index();//获取当前天的索引值
		var courseLength = $(this).find(".course").length;//获得当前天有多少节课
//		$(this).find(".course").each(function(){
//			var counseTitleArr = $(this).find(".courseInfoTitle span").html();
//			var courseLocation = $(this).find(".courseLocation span").html();
//			var Notification = $(this).find(".notification span").html();
//			var NotificationArr = Notification.split('-');
//			$(".courseDIVWrap li").eq(dayIndex).append("<div class='courseDIV'></div>");
//			$(".courseDIVWrap li").eq(dayIndex).find(".courseDIV").html(counseTitleArr + "<br>" + "[" + courseLocation + "]" + NotificationArr[0]);
//		})
		for(var i = 0 ; i < courseLength ; i ++){//在周视图中对每个星期几的列进行添加课程方块的遍历
//			var counseTitleArr = $(".courseWrap").eq(dayIndex).find(".course").eq(i).find(".courseInfoTitle span").text();
//			var courseLocation = $(".courseWrap").eq(dayIndex).find(".course").eq(i).find(".courseLocation span").text();
//			var Notification = $(".courseWrap").eq(dayIndex).find(".course").eq(i).find(".notification span").text();
//			var NotificationArr = Notification.split('-');
			$(".courseDIVWrap li").eq(dayIndex).append("<div class='courseDIV'></div>");//为当前天添加课程方块
//			$(".courseDIVWrap li").eq(dayIndex).find(".courseDIV").html(counseTitleArr + "<br>" + "[" + courseLocation + "]" + NotificationArr[0]);
		}
})
	
	var cswHs = $(".courseShowWrap").height();//获得课程显示区域外框的高度
	var classHetght = cswHs / 10;//获得当前屏幕状态下每节课的高度
	var courseTitle = $(".courseInfoTitle span");//获得所有课的标题
	var courseLocation = $(".courseLocation span");//获得所有课的地点
	var notifications = $(".notification span");//获得所有课的上课节数
	//var courseDIV = $(".courseDIV");
	var courseDIVNum = $(".courseDIV").length;//获得一周总共有几节课
	var courseTitleArr = [];//定义一个空的用来存储课程标题的数组
	var courseLocationArr = [];//定义一个空的用来存储课程地点的数组
	var notificationsArr = [];//定义一个空的用来存储课程开始上课时的节数的数组
	var courseTitleArrB = [];
	var usedColor = [];
	
	var colors = ["#eb9195","#79c6b2","#60c0e8","#efc16d","#f7a584","#81a3eb","#a093e0","#df8bb0","#a4ce6e","#86dca0"];//定一一个颜色数组
	var newColors = [];
	newColors = colors;
	
	
	for(var c = 0 ; c < courseDIVNum ; c ++){//对每节课进行遍历
		var notificationsLength = notifications.eq(c).text().split('-').length;//将当前课的值依据“-”来进行分割并计算长度
		var notificationsLastOne = notifications.eq(c).text().split('-')[notificationsLength - 1];//获得每个当天课程节数的最后一个数字
		courseTitleArr.push(courseTitle.eq(c).text());//将获得到的课程标题依次存储在课程标题数组中
		courseLocationArr.push(courseLocation.eq(c).text());//将获得到的课程地点依次存储在课程地点数组中
		notificationsArr.push(notifications.eq(c).text().split('-')[0]);//将获得到的课程开始上课时的节数依次存储在课程首节数组中
		$(".courseDIV").eq(c).html(courseTitleArr[c] + "<br>" + "(" + courseLocationArr[c] + ")");//从数组中获取对应的值再写入课程方块中
		var classesTime;//定义一个用来存储当前课的上课节数的变量
		
		//首先对拿到的课程节数进行判断
		if(notificationsArr[c] == "7++" || notificationsLastOne == "7++" ){//判断课程的上课时间中开始节和结束节是否包含了“7++”节
			if(notificationsLastOne == notificationsArr[c]){//如果包含了则再判断首节和结束节是否相等
				classesTime = 1;//相等则为一节课
			}else{
				if(notificationsArr[c] == "7++"){//如果不相等则判断第一节课是否为“7++”节
					notificationsFirstOneTrue = notificationsArr[c].split('+')[0];//如果是则将首节分割，取第一个数字
					classesTime = notificationsLastOne - notificationsFirstOneTrue + 1;//此时课程的上课时长为结束节减去开始节加一
					//alert(classesTime);
				}else{
					if(notificationsLastOne == "7++"){//如果首节不是“7++”节课，则判断尾节是否为“7++”节
						notificationsLastOneTrue =  notificationsLastOne.split('+')[0];//如果是则将尾节进行分割，取第一个数字
						classesTime = notificationsLastOneTrue - notificationsArr[c] + 2;//此时课程的上课时长为结束节减去开始节加二
						//alert(classesTime);
					}
				}
			}
		}else{//如果开始节和结束节都不是“7++”节课
			if(notificationsLastOne == notificationsArr[c]){//再判断再判断首节和结束节是否相等
				classesTime = 1;//如果是则为一节课
			}else{
				if(notificationsLastOne > 7){//如果不相等则再判断最后一节课是否超过了第“7”节
					if(notificationsArr[c] >= 8){//再判断首节是否大于等于8
						classesTime = notificationsLastOne - notificationsArr[c] + 1;//此时课程的上课时长为结束节减去开始节加一
					}else{//如果首节小于8
						classesTime = notificationsLastOne - notificationsArr[c] + 2;//此时课程的上课时长为结束节减去开始节加二
					}
				}else{//如果尾节没有超过第“7”节
					classesTime = notificationsLastOne - notificationsArr[c] + 1;//此时课程的上课时长为结束节减去开始节加一
				}
			}
		}
		
		
//		if(notificationsArr[c] == "7++"){
//				notificationsFirstOneTrue = notificationsArr[c].split('+')[0];
//				classesTime = notificationsLastOne - notificationsFirstOneTrue;
//		}else {
//			if(notificationsLastOne == "7++"){
//			notificationsLastOneTrue =  notificationsLastOne.split('+')[0];
//			classesTime = notificationsLastOneTrue - notificationsArr[c] + 2;
//			}else{
//				if(notificationsLastOne == notificationsArr[c]){
//					classesTime = 1;
//				}else{
//					classesTime = notificationsLastOne - notificationsArr[c] + 1;
//				}
//			}
//		}

		$(".courseDIV").eq(c).animate({height:classesTime*classHetght + "px"},0);//设置当前课程卡片的高度
		
//		if(notificationsLastOne == notificationsArr[c]){
//			classesTime = 1;
//		}else{
//			classesTime = notificationsLastOne - notificationsArr[c] + 1;
//		}
		
		
		
//		if(notificationsArr[c] == "7++"){
//			$(".courseDIV").eq(c).animate({top:7*classHetght + "px"},0);
//		}else{
//			for(var w = 0 ; w <= 9 ; w ++){
//				if(notificationsArr[c] == w){
//					$(".courseDIV").eq(c).animate({top:(w - 1)*classHetght + "px"},0);
//				}
//			}
//		}
		
		
		
		if(notificationsArr[c] == 1){//判断第一节课是第几节，如果是1
			$(".courseDIV").eq(c).animate({top:0*classHetght + "px"},0);//则这个课程卡片距离顶部的高度是0
			//$(".courseDIV").eq(c).animate({height:classesTime*classHetght + "px"},0);
		};
		if(notificationsArr[c] == 2){
			$(".courseDIV").eq(c).animate({top:1*classHetght + "px"},0);
			//$(".courseDIV").eq(c).animate({height:classesTime*classHetght + "px"},0);
		};
		if(notificationsArr[c] == 3){
			$(".courseDIV").eq(c).animate({top:2*classHetght + "px"},0);
			//$(".courseDIV").eq(c).animate({height:classesTime*classHetght + "px"},0);
		};
		if(notificationsArr[c] == 4){
			$(".courseDIV").eq(c).animate({top:3*classHetght + "px"},0);
			//$(".courseDIV").eq(c).animate({height:classesTime*classHetght + "px"},0);
		};
		if(notificationsArr[c] == 5){
			$(".courseDIV").eq(c).animate({top:4*classHetght + "px"},0);
			//$(".courseDIV").eq(c).animate({height:classesTime*classHetght + "px"},0);
		};
		if(notificationsArr[c] == 6){
			$(".courseDIV").eq(c).animate({top:5*classHetght + "px"},0);
			//$(".courseDIV").eq(c).animate({height:classesTime*classHetght + "px"},0);
		};
		if(notificationsArr[c] == 7){
			$(".courseDIV").eq(c).animate({top:6*classHetght + "px"},0);
			//$(".courseDIV").eq(c).animate({height:classesTime*classHetght + "px"},0);
		};
		if(notificationsArr[c] == "7++"){
			$(".courseDIV").eq(c).animate({top:7*classHetght + "px"},0);
			//$(".courseDIV").eq(c).animate({height:classesTime*classHetght + "px"},0);
		};
		if(notificationsArr[c] == 8){
			$(".courseDIV").eq(c).animate({top:8*classHetght + "px"},0);
			//$(".courseDIV").eq(c).animate({height:classesTime*classHetght + "px"},0);
		};
		if(notificationsArr[c] == 9){
			$(".courseDIV").eq(c).animate({top:9*classHetght + "px"},0);
			//$(".courseDIV").eq(c).animate({height:classesTime*classHetght + "px"},0);
		};
		
	};
	

	for(var i=0;i<courseTitleArr.length;i++) {
	
		　　var items=courseTitleArr[i];
	//		判断元素是否存在于new_arr中，如果不存在则插入到new_arr的最后
		
		　　if($.inArray(items,courseTitleArrB)==-1) {
				var colorIndex = Math.floor( Math.random()*newColors.length);
				color = newColors[ colorIndex ];
				newColors.splice(colorIndex,1);
				$(".courseDIV").eq(i).css("background-color",color);
				courseTitleArrB.push(courseTitleArr[i]);
				usedColor.push(color);
		
		　　}else{
				for(var j = 0; j < courseTitleArrB.length ; j ++){
					if(items == courseTitleArrB[j]){
						$(".courseDIV").eq(i).css("background-color",usedColor[j]);
					}
				}
		   }
	
	};
	

	
	var sunday = $(".courseDIVWrap li:first-child")
	var sundayContain = $(".courseDIVWrap li:first-child").html();
	$(".courseDIVWrap").append("<li>" + sundayContain + "</li>");
	sunday.remove();
	
	
	var weeks = new Date().getDay();  //获取目前的周数
	
	if(weeks == 0){
		$(".month + ul li").eq(6).addClass("dayOn");
	}
	if(weeks == 1){
		$(".month + ul li").eq(0).addClass("dayOn");
		$(".month + ul li").eq(0).next().addClass("nextDayOn");
	}
	if(weeks == 2){
		$(".month + ul li").eq(1).addClass("dayOn");
		$(".month + ul li").eq(1).next().addClass("nextDayOn");
	}
	if(weeks == 3){
		$(".month + ul li").eq(2).addClass("dayOn");
		$(".month + ul li").eq(2).next().addClass("nextDayOn");
	}
	if(weeks == 4){
		$(".month + ul li").eq(3).addClass("dayOn");
		$(".month + ul li").eq(3).next().addClass("nextDayOn");
	}
	if(weeks == 5){
		$(".month + ul li").eq(4).addClass("dayOn");
		$(".month + ul li").eq(4).next().addClass("nextDayOn");
	}
	if(weeks == 6){
		$(".month + ul li").eq(5).addClass("dayOn");
		$(".month + ul li").eq(5).next().addClass("nextDayOn");
	}
	
	var Ctime = new Date().toLocaleTimeString().split(" ");
	var APM = Ctime[1];
	var Time = Ctime[0].split(":");
	if(APM == "AM"){
		$(".time ul li:lt(3)").addClass("dayOn");
	}else{
		if(Time[0] >= 18){
			$(".time ul li").eq(7).addClass("preTimeOn");
			$(".time ul li:gt(8)").addClass("dayOn");
		}else{
			$(".time ul li").eq(3).addClass("preTimeOn");
			$(".time ul li").eq(4).addClass("dayOn");
			$(".time ul li").eq(5).addClass("dayOn");
			$(".time ul li").eq(6).addClass("dayOn");
			$(".time ul li").eq(7).addClass("dayOn");
		}
	}
	
	
	$(".courseDIV").click(function(){//当点击一个课程方块时的操作
		var bgColor = $(this).css("background-color");//获取被点击的课程方块的背景色
		var className = $(this).text();//获得被点击的课程方块的值
		$(".courseShowWindowWrap").stop().fadeIn(300);//当点击之后显示一个信息窗
		$(".courseShowWindow p").text(className);//将所点击的课程方块内的值赋给信息窗
		var cswH = $(".courseShowWindow").height();//获得信息窗的高度
		$(".courseShowWindow").animate({marginTop:-cswH/2 + "px"},0);//设置信息窗向上的偏移值
		$(".courseShowWindow").css("background-color",bgColor);//将所点击的课程方块的颜色赋给信息窗
	});
	$(".courseShowWindowWrap").click(function(){//当点击信息窗任意位置时
		$(this).stop().fadeOut(300);//信息窗淡出
	});
	
	
})