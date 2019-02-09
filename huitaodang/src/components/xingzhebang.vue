<template>
  <div>
    <article>
  	 <ul>
  	 	<router-link tag="li" to="/xingzhebang/zhuangbeitaolun" class="tjhj" activeClass="brightlight2" ><span>装备讨论</span></router-link>
  	 	<router-link tag="li" to="/xingzhebang/ershoujiaoyi" class="tjhj" activeClass="brightlight2" ><span>二手交易</span></router-link>
  	 	<router-link tag="li" to="/xingzhebang/tubuhuwai" class="tjhj" activeClass="brightlight2" ><span>徒步户外</span></router-link>
  	 	<router-link tag="li" to="/xingzhebang/paobuyueye" class="tjhj" activeClass="brightlight2" ><span>跑步越野</span></router-link>
  	 	<router-link tag="li" to="/xingzhebang/yundongzhibo" class="tjhj" activeClass="brightlight2" ><span>运动直播</span></router-link>
  	 	<router-link tag="li" to="/xingzhebang/zijiamolv" class="tjhj" activeClass="brightlight2" ><span>自驾摩旅</span></router-link>
  	 	<router-link tag="li" to="/xingzhebang/youwenbida" class="tjhj" activeClass="brightlight2" ><span>又问必答</span></router-link>

  	 </ul>
  	 </article>
  	 <router-link class="fatie" tag="div" to="/xingzhebang/fatie" >发帖</router-link>

  	 <router-view></router-view>
  </div>
</template>

<script>
export default {
  beforeMount(){
  	this.$store.state.isShow=false
  },

  destroyed(){
  	this.$store.state.isShow=true
  }
}
</script>

<style scoped>
  .brightlight2{
  	color: white;
  	background: #404346;
  }
  .slot{
    position: relative;
    left: -860px;
    top:110px;
  }
  .fatie{
  	color: white;
  	background-color: #189adb;
    height: 45px;
    width: 100px;
    position: absolute;
    left: 1130px;
    top: 50px;
    text-align: center;
    line-height: 45px;
    font-size: 14px;
  }

 article{
 	position: relative;
 	top: 50px;
 	left: 50px;
 }
 article li{
 	float: left;

 	color: white;
 	width: 130px;
 	height: 45px;
 	line-height: 45px;
 	text-align: center;
 	background-color: #2d3033;
 }
 article li:hover{
 	background-color: #404346;
 }

</style>
