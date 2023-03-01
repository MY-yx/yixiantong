// 设置rem, 但这个只对app端生效, ipad就不行; rem => 对应fontSize
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';

// 初始化fastclick
window.addEventListener('load', function () {
  FastClick.attach(document.body);
}, false);

// 去除touchmove默认事件
window.addEventListener('touchmove', function (e) {
  if (e.touches.length > 1) {
    e.preventDefault();
  }
}, false);