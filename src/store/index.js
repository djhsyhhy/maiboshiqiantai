import Vue from 'vue'
import vuex from 'vuex'
import user from './user'

Vue.use(vuex);

const store = new vuex.Store({

  modules:{
    user,

  }

});

export default store;
