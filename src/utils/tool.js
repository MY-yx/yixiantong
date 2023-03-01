export default {
  formatJSON(array, key) {
    return array.filter(item => {
      if (item[key]) {
      	item[key] = item[key].split(',');
      }
      return item;
    });
  },
  jsonToArr(json) {
    return JSON.parse(json);
  },
  strToArr(str) {
    return str.split(',');
  },
  replaceToSpace(str) {
    return str.replace(/,/g, ' ');
  },
  trimSpace(str) {
    return str.replace(/\s+/, '');
  },
  throttle(fn, delay) {
    var t = null,
      beginTime = new Date().getTime();
    return function() {
      var currentTime = new Date().getTime(),
        args = Array.prototype.slice.call(arguments),
        _self = this;
      clearTimeout(t);
      if (currentTime - beginTime < delay) {
        // 未到应该延迟的时间, 不额外执行
        t = setTimeout(() => {
          fn.apply(_self, args);
        }, delay);
      } else {
        // 大于或等于延迟时间, 立刻执行
        fn.apply(_self, args);
        beginTime = currentTime;
      }
    }
  }
}