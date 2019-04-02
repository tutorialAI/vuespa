import firebase from 'firebase';

export default ({
  state:{
    authStatus: false,
    error: ''
  },
  mutations: {
    authStatus(state,payload){
      state.authStatus = payload;
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
               photoURL: 'https://randomuser.me/api/portraits/women/68.jpg'
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
        console.log(error.message);
      });
    },
    singin(context, payload){
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(function(){
        console.log("Well done");
      })
      .catch(function(error) {
      })
    },
    getUserInfo(context){
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          context.commit('authStatus',true);
          console.log(
          `
          displayName = ${user.displayName};
          email = ${user.email};
          emailVerified = ${user.emailVerified};
          photoURL = ${user.photoURL};
          isAnonymous = ${user.isAnonymous};
          uid = ${user.uid};
          providerData = ${user.providerData};
          `);
        } else {
          // User is signed out.
          // ...
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
