<template>
  <div class="index">
    {{resData}}
  </div>
</template>

<script>
// @ is an alias to /src
import { getUrlResult } from '@/api'
import { getLogs, saveLogs } from '@/utils/localStorage'

export default {
  name: 'Index',
  data () {
    return {
      timer: null,
      resData: null
    }
  },
  mounted () {
    this.setTimer()
  },
  destroyed () {
    // 销毁timer
    clearInterval(this.timer)
  },
  methods: {
    setTimer: function () {
      const timer = setInterval(async () => {
        const log = await this.getAPIResult()
        this.setLogs(log)
      }, 5000)

      // 赋值timer，便于销毁
      this.timer = timer
    },
    /*
    return log
     */
    getAPIResult () {
      return new Promise(resolve => {
        // 记录发起请求时间
        const beforeGetTimeStamp = (new Date()).getTime()
        // 发起请求
        getUrlResult().then(res => {
          this.resData = res.data
          const afterGetTimeStamp = (new Date()).getTime()
          // 返回日志信息
          resolve({
            res: res,
            getRequstTimeStamp: beforeGetTimeStamp,
            durationTime: afterGetTimeStamp - beforeGetTimeStamp
          })
          // this.setLogs(res, beforeGetTimeStamp, afterGetTimeStamp - beforeGetTimeStamp)
        }).catch((err) => {
          // 留下空间处理报错信息，因为题目业务单一，所以未做单独处理与成功后记录成功的状态逻辑一致
          this.resData = err.data
          const afterGetTimeStamp = (new Date()).getTime()
          // 返回错误日志信息
          resolve({
            res: err,
            getRequstTimeStamp: beforeGetTimeStamp,
            durationTime: afterGetTimeStamp - beforeGetTimeStamp
          })
          // this.setLogs(err, beforeGetTimeStamp, afterGetTimeStamp - beforeGetTimeStamp)
        })
      })
    },
    setLogs: function (log) {
      let logs = getLogs()
      if (!logs) {
        logs = []
      }

      const timeStamp = new Date()
      timeStamp.setTime(log.getRequstTimeStamp)
      console.log(timeStamp.toUTCString())
      const resultLog = {
        getRequstTimeStamp: timeStamp.toUTCString(),
        status: log.res.status,
        statusText: log.res.status === 200 ? '成功' : '失败',
        durationTime: log.durationTime
      }
      logs.push(resultLog)
      saveLogs(logs)
    }
  }
}
</script>
