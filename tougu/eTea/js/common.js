/**
 * Created by Administrator on 2017/5/11.
 */
//加载弹框


//弹出框
//dialog-fixed
function showDialog(container,callback){
    container.fadeIn('fast',callback);
    dialogFixed(container.find('.dialog-wrap'));
}
function showErrorDialog(container,text){
    container.find('.error-tip').html(text);
    container.fadeIn('fast');
    dialogFixed(container.find('.dialog-wrap'));
}
function hideDialog(container,callback){
    container.hide('fast',callback);
}
$(document).on('click','.dialog-wrap',function (event) {
    event.preventDefault();
    event.stopPropagation();
});
$(document).on('click','.dialog-cover',function () {
    $(this).fadeOut();
});
//提示框
function showTipDialog(container,text,callfun){
    if(text){
        container.html(text);
    }
    container.fadeIn();
    dialogFixed(container);
    setTimeout(function(){
        container.fadeOut();
        if(typeof(callfun)=='function'){
            callfun();
        }
    },1500);
}
//弹出框位置调整，垂直、水平居中
function dialogFixed(container){
    var width = container.width();
    var height = container.height();
    container.css({'margin-left':-width/2,'margin-top':-height/2});
}
//关闭弹出框
$('body').on('click','.btn-dialog',function(){
    $('.dialog-cover').fadeOut();
});
//弹出框x按钮关闭
$('body').on('click','.icon-close',function(){
    $(this).parents('.dialog-cover').fadeOut();
});
//监听横屏
var isorientation = false;
function orientationChange(){
    switch(window.orientation) {
        case 0:
        case 180:
            isorientation = false;
            dialogFixed($('.tip-dialog'));
            dialogFixed($('.dialog-wrap'));
            break;
        case -90:
        case 90:
            dialogFixed($('.tip-dialog'));
            dialogFixed($('.dialog-wrap'));
            break;
    }
}
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", orientationChange, false);