import { mount } from '@vue/test-utils'
import { clearLocalStorage } from '@/utils/localStorage'
import Index from '@/views/Index.vue'

beforeEach(() => {
  jest.useFakeTimers()
})

describe('Index.vue', () => {
  // 很抱歉，用UnitTest测试定时任务扫到了我的知识盲区
  it('页面加载5秒后调用API Endpoint', () => {
    clearLocalStorage()
    const wrapper = mount(Index)
    expect(setInterval).toHaveBeenCalledTimes(1)
    jest.runAllTimers()
    expect(wrapper.find('.index').text().length > 0).toBe(true)
  })
})
