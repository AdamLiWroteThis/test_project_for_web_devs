import {getUrlResult} from '@/api/index'

test('发送网络请求', () => {
  getUrlResult().then(res => {
    expect(res.data.authorizations_url).toBe('https://api.github.com/authorizations1')
  })
})
