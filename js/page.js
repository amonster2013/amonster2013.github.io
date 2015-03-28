var header = $('.header-content');


function getH(){
	return document.documentElement.clientHeight;
}

function getW() {
	return document.documentElement.clientWidth;
}

function adjustImage(){
	var _w = getW() < 1000 ? 1000 : getW();

	header.css({
		height : getH(),
		width : _w
	})	
}

$(window).load(function(){
	adjustImage();
});

$(window).bind('resize', function() {
	adjustImage();
});



var slide = $('.js-down'),
	body = $('.m_body'),
	isHeaderShow = true;

function slideDown(){
	header.hide();
	body.show();
	isHeaderShow = false;
}
function slideToHeader(){
	header.show();
	body.hide();
	isHeaderShow = true;	
}

// slide.bind('click', function(e){
// 	e.preventDefault();
// 	slideDown();
// });

var isScrollDown = function (e) {
    var direct = 0;
    e = e || window.event;
    if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件             
        if (e.wheelDelta > 0) { //当滑轮向上滚动时
            return false;
        }
        if (e.wheelDelta < 0) { //当滑轮向下滚动时
            return true
        }
    } else if (e.detail) {  //Firefox滑轮事件
        if (e.detail> 0) { //当滑轮向上滚动时
            return true
        }
        if (e.detail< 0) { //当滑轮向下滚动时
            return false;
        }
    }
}

function scrollFunc(e){
	var isDown = isScrollDown(e);
	if(isDown && isHeaderShow){
		 slideDown();
	}else if(!isDown && !isHeaderShow){
		if(document.body.scrollTop === 0){
			slideToHeader();
		}
	}
}
// //给页面绑定滑轮滚动事件
// if (document.addEventListener) {
//     document.addEventListener('DOMMouseScroll', scrollFunc, false);
// }
// //滚动滑轮触发scrollFunc方法
// window.onmousewheel = document.onmousewheel = scrollFunc;  