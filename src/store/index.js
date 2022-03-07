import {createStore} from "vuex"



const url = "https://randomuser.me/api/?resulsts=2?";
const headers = { Accept: "application/json" };
export default createStore({
  state: {
      currentAccount : {},
      currentUser:{}
   
    
  },
  mutations: {
   
    setCurrentAccount(state, payload) {
      state.currentAccount = payload;
    

      
    },

    setCurrentUser(state,payload){
      state.currentUser = payload;
      console.log(payload);
    }
  },
  actions: {
   /* 
    async setCurrentUser(state) {
      const account = await fetch(url, { headers });
      const u = await account.json();
      state.commit("setCurrentUser",u);
      
    }*/
  },
  modules: {},
  getters: {
    getCurrentAccount: state => state.currentAccount,
    getCurrentUser: state => state.currentUser
  
  }
});