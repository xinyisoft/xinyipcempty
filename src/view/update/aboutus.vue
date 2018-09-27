<template>
  <div>
    <Button @click="value1 = true" type="primary">展示了一个侧滑</Button>
    <Drawer title="Basic Drawer" :closable="true" v-model="value1" width="720"
            :mask-closable="false" :styles="styles">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  </div>
</template>

<script>
  export default {
    name: 'aboutusView',
    data() {
      return {
        value1: false,
        styles: {
          height: 'calc(100% - 55px)',
          overflow: 'auto',
          paddingBottom: '53px',
          position: 'static'
        }
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
