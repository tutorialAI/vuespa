import firebase from 'firebase';

export default ({
  state:{
    authStatus: false,
    error: '',
    user: ''
  },
  mutations: {
    authStatus(state,payload){
      state.authStatus = payload;
    },
    userInfo(state,payload){
      state.user = payload;
    },
    setError(state,payload){
      state.error = payload;
    }
  },
  actions:{
    singup(context, payload){
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        (user)=>{
          if(user){
            firebase.auth().currentUser.updateProfile({
               displayName: payload.user,
               photoURL: ''
            }).then(
              (s)=> {
                console.log("done");
                authStatus = true;
              }
            )
          }
      })
      .catch((error)=>{
        var errorCode = error.code;
        context.state.error = error.message;
        console.log(context.state.error);
      });
    },
    singin(context, payload){
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(function(){
        console.log("User logged");
      })
      .catch(function(error) {
        console.log(error.message);
        context.commit('setError',error.message);
      })
    },
    getUserInfo(context){
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          context.commit('authStatus',true);
          context.commit('userInfo',user);
        }else{
          console.log("does not logged");
        }
      });
    },
    signOut(context){
      firebase.auth().signOut().then(function() {
        console.log('Signed Out');
        context.commit('authStatus',false);
      }, function(error) {
        console.error('Sign Out Error', error);
      });
    }
  }
})
