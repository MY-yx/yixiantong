const BASE_URL = '/api/';
// http://study.jsplusplus.com/Yixiantong/
const API = {
	GET_HOME_DATAS: BASE_URL + 'getHomeDatas',
	GET_LIST_DATAS: BASE_URL + 'getListDatas',
	GET_DETAIL: BASE_URL + 'getDetail',
	SEARCH_ACTION: BASE_URL + 'searchAction'
}

const homeTitle = {
	foodTitle: '推荐美食',
	hotelTitle: '推荐酒店',
	ktvTitle: '推荐KTV',
	massageTitle: '推荐按摩',
	viewTitle: '推荐景点'
}

let homeDataTpl = {
  foodDatas: [],
  hotelDatas: [],
  ktvDatas: [],
  massageDatas: [],
  viewDatas: []
}

export {
	API,
	homeTitle,
	homeDataTpl
}