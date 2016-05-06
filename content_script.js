var url = document.URL;	
console.clear();
console.info(jQuery.fn.jquery);
function sleep(numberMillis) { 
var now = new Date(); 
var exitTime = now.getTime() + numberMillis; 
while (true) { 
now = new Date(); 
if (now.getTime() > exitTime) 
return; 
} } 
var fuckBaidu = function(){
		$("div:contains('hui.baidu.com')").parentsUntil("#content_left,#content_right,#container,#wrapper,#wrapper_wrapper,body,html").remove();
		$("a:contains('推广')").parentsUntil("#content_left,#content_right,#container,#wrapper,#wrapper_wrapper,body,html,td").remove();
		$("a:contains('e.baidu.com')").parentsUntil("#content_left,#content_right,#container,#wrapper,#wrapper_wrapper,body,html").remove();
		console.info("repeat");
	}
var fuckRenRen = function(){
$("#huatiBox").remove();
$(".nx-sidebar").remove();
$(".ui-renren-publisher").remove();
$("#mergeModule").remove();
$(".frame-nav-wrap").remove();
$("#webpager").remove();
$("#nxHeader").remove();
$("#recommendArea").remove();
}				
var fuckCSDN = function(){
$("#Topic_Top").next().remove();
$("#Topic_Top").remove();
$("#header").remove();
$("#navigator").remove();
$(".J_adv").remove();
$(".google_image_div").remove();
$("[id^=cpro_u]").remove();
$("[data-mod=popu_64]").remove();
}		

if(url.indexOf( "baidu.com")>=0){//主页面
	console.info("baiduBlocker");	
	setInterval(fuckBaidu,300);
	}
if(url.indexOf( "csdn.net")>=0){//主页面
	fuckCSDN();
	}
if(url.indexOf( "renren.com")>=0){//主页面
	fuckRenRen();
	}
$(function(){
console.info("loadover");
if(url.indexOf( "renren.com")>=0){//主页面
	fuckRenRen();
	}
if(url.indexOf( "csdn.net")>=0){//主页面
	fuckCSDN();
	}
console.info("operateover");
	
	});