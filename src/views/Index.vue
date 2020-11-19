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
    this.init()
  },
  destroyed () {
    // 销毁timer
    clearInterval(this.timer)
  },
  methods: {
    init: function () {
      const timer = setInterval(() => {
        const beforeGetTimeStamp = (new Date()).getTime()
        getUrlResult().then(res => {
          this.resData = res.data
          const afterGetTimeStamp = (new Date()).getTime()
          this.setLogs(res, beforeGetTimeStamp, afterGetTimeStamp - beforeGetTimeStamp)
        }).catch((err) => {
          // 留下空间处理报错信息，因为题目业务单一，所以未做单独处理与成功后记录成功的状态逻辑一致
          this.resData = err.data
          const afterGetTimeStamp = (new Date()).getTime()
          this.setLogs(err, beforeGetTimeStamp, afterGetTimeStamp - beforeGetTimeStamp)
        })
      }, 5000)

      // 赋值timer，便于销毁
      this.timer = timer
    },
    setLogs: function (res, getRequstTimeStamp, durationTime) {
      let logs = getLogs()
      if (!logs) {
        logs = []
      }

      const timeStamp = new Date()
      timeStamp.setTime(getRequstTimeStamp)
      console.log(timeStamp.toUTCString())
      const log = {
        getRequstTimeStamp: timeStamp.toUTCString(),
        status: res.status,
        statusText: res.status === 200 ? '成功' : '失败',
        durationTime: durationTime
      }
      logs.push(log)
      saveLogs(logs)
    }
  }

}
</script>
