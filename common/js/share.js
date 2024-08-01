
/*------------------------------------------

不同设备高度调整

------------------------------------------*/


    $(function () {
        // iPhone/iPad/iPod、Android场合判断
        if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {


        } else {
            // PC的场合处理
            $(function () {
                var h = $(window).height();
                var gNavi = $('#globalHeader');
                
                $(window).scroll(function () {
                    if ($(this).scrollTop() > 80) {
                        $("#globalHeader").stop().queue([]).animate({
							top:"-97px",
							paddingBottom:"13px"
                        }, 3000, "easeOutExpo");
 						$("#globalHeader h1 img").stop().queue([]).animate({
							width:"140px",
							height:"17px"
                        }, 3000, "easeOutExpo");
						$("#mainnavi ul li a.current").stop().queue([]).animate({
							paddingBottom:"13px"
                        }, 3000, "easeOutExpo");
 						$("#globalHeader h2 , #topicPath").queue([]).fadeOut(500, "easeOutExpo");						
						$("#globalHeader .boxSns").show();
						$("#pageTop img").queue([]).stop().animate({opacity:1 }, 2000, "easeOutExpo");
                    } else {
                        $("#globalHeader").stop().queue([]).animate({
                            top:0,
							paddingBottom:"54px"
                        }, 3000, "easeOutExpo");
 						$("#globalHeader h1 img").stop().queue([]).animate({
							width:"170px",
							height:"21px"
                        }, 3000, "easeOutExpo");
						$("#mainnavi ul li a.current").stop().queue([]).animate({
							paddingBottom:"54px"
                        }, 3000, "easeOutExpo");
 						$("#globalHeader h2 , #topicPath").show();
						$("#globalHeader .boxSns").queue([]).fadeOut(500, "easeOutExpo");
						$("#pageTop img").queue([]).stop().animate({opacity:0 }, 2000, "easeOutExpo");
                    }
                });
            });
        }
    });


/*------------------------------------------

滚动自定义

------------------------------------------*/


$(document).ready(
function() {
$(".box-lid-menu .navi").niceScroll({
             cursorcolor:"#d5d5d3", // 滚动条颜色
             cursorwidth:"5px", // 滚动条宽度
             cursoropacitymax:"1", // 滚动条激活时的透明度
             cursoropacitymin:"1", // 滚动条不活动时的透明度
             cursorborderradius:"3px", // 滚动条圆角
			 cursorborder:"none",
			 autohidemode: true,
            }); 
}
);



/*------------------------------------------

替换元素

------------------------------------------*/

$(document).ready(
function(){
$("#googleadbnr").insertAfter("#pic li:nth-child(50)");
});


