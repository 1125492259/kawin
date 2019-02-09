<template>
  <div id="boox">
  	 <header>
  	 	<div class="header1">
  	 		<p>行者</p>
  	 		<p>赛事</p>
  	 	</div>
  	 	<div class="header2">
  	 		<p>登录</p>
  	 		<p>注册</p>
  	 	</div>
  	 </header>
  	 <ul>
  	 	
  	 </ul>
  </div>
</template>

<script>
export default {
  beforeMount(){
  	this.$store.state.isShow=false;
  	this.$store.state.sidebarShow=false
  },

  destroyed(){
  	this.$store.state.isShow=true;
  	this.$store.state.sidebarShow=true
  }
}
</script>

<style scoped>
  #boox{
  	width: 100%;
  	height: 100%;
  	background-color: red;
  }
  header{
  	overflow: hidden;
  }
  header .header1{
  	float: left;
  }
  header .header2{
  	float: right;
  }
</style>