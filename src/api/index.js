import axios from 'axios'

const url = 'https://api.github.com/'

/*
  访问题目接口
 */
const getUrlResult = function () {
  return new Promise((resolve, reject) => {
    axios.get(url).then(res => {
      if (res.status !== 200) {
        resolve(res)
      } else {
        reject(res)
      }
    })
  })
}

export {
  getUrlResult
}
