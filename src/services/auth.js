import { GoogleAuthProvider, getAuth, signInWithRedirect, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const provider = new GoogleAuthProvider();

class AuthService {
  loginWithGoogle() {
    const auth = getAuth();
    signInWithRedirect(auth, provider);
  }

  loginWithEmailPassword(email, password) {
    const auth = getAuth();
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
          if (error.message.includes('auth/user-not-found')) {
            createUserWithEmailAndPassword(auth, email, password)
              .then((response) => {
                const db = getFirestore();
                const { email: emailResponse, uid } = response.user;
                addDoc(collection(db, 'users'), {
                  email: emailResponse,
                  uid
                });
              });
            resolve();
          } else {
            reject(error.message);
          }
        });
    });
  }

  logout() {
    const auth = getAuth();
    signOut(auth);
  }
}

export default new AuthService();
