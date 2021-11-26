import { GoogleAuthProvider, getAuth, signInWithRedirect, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const provider = new GoogleAuthProvider();

class AuthService {
    loginWithGoogle() {
        const auth = getAuth();
        signInWithRedirect(auth, provider);
    }
    loginWithEmailPassword(email, password) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                if (error.message.includes('auth/user-not-found')) {
                    createUserWithEmailAndPassword(auth, email, password)
                        .then((response) => {
                            console.log(response);
                            // TODO register
                        });
                }
            });
    }
}

export default new AuthService();
