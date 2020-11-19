import { mount } from '@vue/test-utils'
import Logs from '@/views/Logs.vue'

describe('Logs.vue', () => {
  // 很抱歉，用UnitTest测试定时任务扫到了我的知识盲区
  it('Logs页面加载判断logs是否为空', async () => {
    const wrapper = mount(Logs)
    expect(wrapper.findAll('.timestamp').length > 0).toBe(true)
  })
})
