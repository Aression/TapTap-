import axios from './axios.js'
let url = {
    // 获取榜单
    getHotTable(data) {
        return axios({
            url: "https://mockapi.eolink.com/F2DDYfm2cb2a6dfd5fc95bdcc9c6f68fb74286b837564e4/BasicData/getHotTable?list_name="+data.listname,
            method: "post",
            data
        })
    },
    // 获取榜单统计图表
    getHotTableChart(data) {
        return axios({
            url: "https://mockapi.eolink.com/F2DDYfm2cb2a6dfd5fc95bdcc9c6f68fb74286b837564e4/BasicData/getHotTableChart?list_name="+data.listname,
            method: "post",
            data
        })
    },
    // 获取榜单(综合关注度 或者 叫座榜)
    getTabs_ac(data) {
        return axios({
            url: "https://mockapi.eolink.com/F2DDYfm2cb2a6dfd5fc95bdcc9c6f68fb74286b837564e4/Comprehensive/GetTableAC?list_name="+data.list_name,
            method: "post",
            data
        })
    },

     // 游戏类型  评分和下载量
     get_gametype(data) {
        return axios({
            url: "https://mockapi.eolink.com/F2DDYfm2cb2a6dfd5fc95bdcc9c6f68fb74286b837564e4/Comprehensive/GameTypeAnalysis?gametype_list="+data.gametype_list,
            method: "post",
            data
        })
    },

    //厂商评分分析
    get_manu(data) {
        return axios({
            url: "https://mockapi.eolink.com/F2DDYfm2cb2a6dfd5fc95bdcc9c6f68fb74286b837564e4/Comprehensive/ManuScore?manufacturer="+data.manufacturer,
            method: "post",
            data
        })
    },
     //搜索榜单
     getcurveTabs(data) {
        return axios({
            url: "https://mockapi.eolink.com/F2DDYfm2cb2a6dfd5fc95bdcc9c6f68fb74286b837564e4/search-page?search_game-name=" + data.search_name,
            method: "post",
            data
        })
    },
    //曲线数据
    getcurve(data) {
        return axios({
            url: "https://mockapi.eolink.com/F2DDYfm2cb2a6dfd5fc95bdcc9c6f68fb74286b837564e4/data",
            method: "post",
            data
        })
    },
}
export default url