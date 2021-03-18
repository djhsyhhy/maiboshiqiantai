import axios from 'axios'

let host = 'localhost:8888';


// 获取新闻信息  分页获取
export const getpage = params => {
  return axios.get(`${host}/getpage`, {params: {
    pageNum:1,
      pageSize:4
    }})
}
