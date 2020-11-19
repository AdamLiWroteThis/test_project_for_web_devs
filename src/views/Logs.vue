<template>
  <div class="logs-wrapper">
    <div class="logs-title-wrapper">
      <div class="timestamp-wrapper">
        <span class="timestamp-title">调用时间</span>
      </div>
      <div class="status-wrapper">
        <span class="status-title">调用状态码</span>
      </div>
      <div class="status-text-wrapper">
        <span class="status-text-title">调用状态</span>
      </div>
      <div class="duration-time-wrapper">
        <span class="duration-time-title">加载时间</span>
      </div>
    </div>
    <div class="log-wrapper" v-for="(log,index) in logs" :key="index">
      <div class="timestamp-wrapper">
        <span class="timestamp">{{log.getRequstTimeStamp}}</span>
      </div>
      <div class="status-wrapper">
        <span class="status">{{log.status}}</span>
      </div>
      <div class="status-text-wrapper">
        <span class="status-text">{{log.statusText}}</span>
      </div>
      <div class="duration-time-wrapper">
        <span class="duration-time">{{log.durationTime}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { getLogs } from '@/utils/localStorage'

export default {
  name: 'Logs',
  data () {
    return {
      logs: null
    }
  },
  mounted () {
    const logs = getLogs()
    if (logs) {
      this.logs = logs
      console.log(this.logs.length)
    }
  }
}
</script>
<style lang="less">
.logs-wrapper {
  width: 960px;
  margin: 0 auto;

  .logs-title-wrapper, .log-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    .timestamp-wrapper {
      flex: 1;

      .timestamp {

      }
    }

    .status-wrapper {
      flex: 1;

      .status {

      }
    }

    .status-text-wrapper {
      flex: 1;

      .status-text {

      }
    }

    .duration-time-wrapper {
      flex: 1;

      .duration-time {

      }
    }
  }
}
</style>
