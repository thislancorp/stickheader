/**
 *    FileName: stickheader.js
 *    Desc: 一个顶部固定的插件实现
 *    Author: enj0y
 *    Home: http://www.hexdata.cn
 *    Version: 0.0.1
 */
 jQuery.stickheader = function(headerdiv, headerdiv_end, headerlogo, headerlogo_end, headerlogin){
    // usage:  jQuery.stickheader( $('.header.floater'), 40, $('#logo a'), 22);
	var scrollPosY=window.pageYOffset ;
	if(typeof(scrollPosY)=="undefined"){
		scrollPosY = document.documentElement.scrollTop;
	}
	var isIE = !!window.ActiveXObject;  
	var isIE6 = isIE && !window.XMLHttpRequest;  
	var isIE8 = isIE && !!document.documentMode;  
	var isIE7 = isIE && !isIE6 && !isIE8;  
	if(typeof(scrollPosY)=="number"){
		window.onscroll=function(){
			var scrollPosY = window.pageYOffset;
			if(typeof(scrollPosY)=="undefined"){
				scrollPosY = document.documentElement.scrollTop;
			}
			//console.log(headerlogin);
			if(isIE6){
				if((scrollPosY)>headerdiv_end){
					headerdiv.css({'position':'absolute','margin-top':'-'+headerdiv_end.toString()+'px'});
					headerlogo.css({'position':'absolute','margin-top':(scrollPosY>headerlogo_end?headerlogo_end:scrollPosY).toString()+'px'});
					if(headerlogin!=null&&typeof(headerlogin)!="undefined")headerlogin.fadeIn();
				}else{
					headerdiv.css({'position':'absolute','margin-top':'-'+scrollPosY.toString()+'px'});
					headerlogo.css({'position':'absolute','margin-top':(scrollPosY>headerlogo_end?headerlogo_end:scrollPosY).toString()+'px'});
					if(headerlogin!=null&&typeof(headerlogin)!="undefined")headerlogin.fadeOut();
				}
			}else{
				if((scrollPosY)>headerdiv_end){
					headerdiv.css({'position':'fixed','top':'-'+headerdiv_end.toString()+'px'});
					headerlogo.css({'position':'absolute','margin-top':(scrollPosY>headerlogo_end?headerlogo_end:scrollPosY).toString()+'px'});
					if(headerlogin!=null&&typeof(headerlogin)!="undefined")headerlogin.fadeIn();
				}else{
					headerdiv.css({'position':'fixed','top':'-'+scrollPosY.toString()+'px'});
					headerlogo.css({'position':'absolute','margin-top':(scrollPosY>headerlogo_end?headerlogo_end:scrollPosY).toString()+'px'});
					if(headerlogin!=null&&typeof(headerlogin)!="undefined")headerlogin.fadeOut();
				}
			}
		};
		if(typeof(window.navigator.userAgent)!="undefined"){
			if(window.navigator.userAgent.indexOf('iPhone')){
				setInterval(function(){
					window.onscroll();
				},100)
			}
		}
	} 
 }
