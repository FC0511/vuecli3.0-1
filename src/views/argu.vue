<template>
	<div>{{name}}</div>
<!--	<div>{{$route.params.name}}</div>-->
</template>

<script>
export default {
  name: 'argu',
  props: {
    name: {
      type: String,
      default: 'ls'
    }
  },
  beforeRouteUpdate (to, from, next) {
    // 组件被复用
    console.log(to)
    next()
  }
}
</script>

<style scoped>

</style>
