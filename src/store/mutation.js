export default {
  selectCity(state, cityInfo) {
    state.cityName = cityInfo.cityName;
    state.cityId = cityInfo.cityId;

    try {
      // 缓存到localStorage里, 这样刷新的时候你也能拿到
      localStorage.setItem('cityInfo', JSON.stringify(state));
    } catch (err) {

    }
  },
  
  selectField(state, field) {
    state.field = field;

    try {
      localStorage.setItem('cityInfo', JSON.stringify(state));
    } catch (err) {}
  }
}