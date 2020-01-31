<template>
	<div id="app">
		<div id="nav">
			<!--      <router-link to="/">Home</router-link> |-->
			<router-link :to="{name: 'home'}">Home</router-link>
			|
			<router-link to="/about">About</router-link>
		</div>
		<transition-group name="router">
<!--			过渡动画-->
<!--		<transition-group :name="routerTransition">-->
			<router-view key="default"/>
			<router-view name="email"/>
		</transition-group>
	</div>
</template>

<script>
export default {
	    data () {
	        return {
	            routerTransition: ''
    }
  },
  watch: {
	        'router' (to) {
	            // ?routerTransition=1 动态监听添加过渡
	            to.query && to.query.routerTransition && (this.routerTransition = to.query.routerTransition)
    }
  }
}
</script>

<style lang="less">
	.router-enter {
		opacity: 0;
	}

	.router-enter-active {
		transition: opacity 1s;
	}

	.router-enter-to {
		opacity: 1;
	}

	.router-leave {
		opacity: 1;
	}

	.router-leave-active {
		transition: opacity 0s;
	}

	.router-leave-to {
		opacity: 0;
	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>
