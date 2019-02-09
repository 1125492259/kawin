import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
   state:{
   	 isShow:true,
   	 sidebarShow:true,
   	 datalist:[]
   }
})

export default store