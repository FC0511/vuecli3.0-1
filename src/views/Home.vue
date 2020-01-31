<template>
	<div class="home">
		<div>1{{food}}</div>
		<img alt="Vue logo" src="../assets/img/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App"/>
		<button @click="handleClick">返回上一页</button>
		<button @click="handleClick(1)">跳转</button>
		<button @click="handleClick(2)">替换</button>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'banner'
    }
  },
  beforeRouteEnter (to, from, next) {
    // 进入页面
    console.log(to)
    next()
  },
  beforeRouteLeave (to, from, next) {
    // 离开页面 next(false);
    next(vm => {
      console.log(vm)
    })
  },
  methods: {
    handleClick (type) {
      if (type === 1) {
        this.$router.push({
          // path: `/argu/123`, // 24行等同于25-26
          name: 'argu',
          params: {
            name: '1323'
          }
          /* query: {
														name: 'zackSan'
												} */
        })
      } else if (type === 2) {
        this.$router.push('/parent')
      } else {
        this.$router.go(-1)
        // this.$router.back();
      }
    }
  }
}
</script>
