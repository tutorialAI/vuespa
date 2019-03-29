import firebase from 'firebase';

export default ({
  state:{
    store: {
      authStatus: false
    }
  },
  mutations: {

  },
  actions:{
    singup({commit}, payload){
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(function(user){
        this.authStatus = true;
        console.log(user);
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error.code);
        console.log(error.message);
        // ...
      });
    }
  }
})
