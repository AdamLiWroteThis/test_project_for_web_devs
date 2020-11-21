import {getLogs} from "@/utils/localStorage";

test('获取日志列表', () => {
  const logs = getLogs()
  expect(logs).toBe(true)
})
