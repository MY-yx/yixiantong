let cityInfo = {
  cityId: '0',
  cityName: '全部',
  field: 'all'
}

// 保存在localStorage中
try {
  let $cityInfo = localStorage.getItem('cityInfo')
  if ($cityInfo) {
    cityInfo = JSON.parse($cityInfo);
  }
} catch (err) {}

export default cityInfo;