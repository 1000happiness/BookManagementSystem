<template>
  <div>
    <h1> {{ dataList.title }} </h1>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    name: 'Test',
    props: {
      dataList: {
        type: [Object]
      }
    },
    mounted(){
      console.log(this.dataList.title)
    }
  }
</script>