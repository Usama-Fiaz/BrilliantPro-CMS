import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail, onAuthStateChanged, GoogleAuthProvider, FacebookAuthProvider, signInWithCredential } from "firebase/auth";
import { getFirestore, collection, doc, setDoc, serverTimestamp } from "firebase/firestore";

class FirebaseAuthBackend {
  constructor(firebaseConfig) {
    if (!FirebaseAuthBackend.instance) {
      this.app = initializeApp(firebaseConfig);
      this.auth = getAuth(this.app);
      this.db = getFirestore(this.app);

      onAuthStateChanged(this.auth, (user) => {
        if (user) {
          localStorage.setItem("authUser", JSON.stringify(user));
        } else {
          localStorage.removeItem("authUser");
        }
      });

      FirebaseAuthBackend.instance = this;
    }
    return FirebaseAuthBackend.instance;
  }

  /**
   * Registers a new user
   */
  async registerUser(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      return userCredential.user;
    } catch (error) {
      throw this._handleError(error);
    }
  }

  /**
   * Login user
   */
  async loginUser(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      return userCredential.user;
    } catch (error) {
      throw this._handleError(error);
    }
  }

  /**
   * Logout user
   */
  async logout() {
    try {
      await signOut(this.auth);
      localStorage.removeItem("authUser");
      return true;
    } catch (error) {
      throw this._handleError(error);
    }
  }

  /**
   * Forgot password
   */
  async forgetPassword(email) {
    try {
      await sendPasswordResetEmail(this.auth, email);
      return true;
    } catch (error) {
      throw this._handleError(error);
    }
  }

  /**
   * Social Login (Google/Facebook)
   */
  async socialLoginUser(data, type) {
    try {
      let credential;
      if (type === "google") {
        credential = GoogleAuthProvider.credential(data.idToken);
      } else if (type === "facebook") {
        credential = FacebookAuthProvider.credential(data.token);
      } else {
        throw new Error("Invalid social login type");
      }

      const userCredential = await signInWithCredential(this.auth, credential);
      return await this.addNewUserToFirestore(userCredential.user);
    } catch (error) {
      throw this._handleError(error);
    }
  }

  /**
   * Add new user to Firestore
   */
  async addNewUserToFirestore(user) {
    if (!user) return null;

    const userRef = doc(collection(this.db, "users"), user.uid);
    const details = {
      fullName: user.displayName || "",
      email: user.email,
      picture: user.photoURL || "",
      createdDtm: serverTimestamp(),
      lastLoginTime: serverTimestamp(),
    };

    await setDoc(userRef, details, { merge: true });
    return { user, details };
  }

  /**
   * Get authenticated user
   */
  getAuthenticatedUser() {
    return JSON.parse(localStorage.getItem("authUser")) || null;
  }

  /**
   * Error Handling
   */
  _handleError(error) {
    return error.message || "An unknown error occurred";
  }
}

// Singleton pattern
let firebaseBackend = null;

export const initFirebaseBackend = (config) => {
  if (!firebaseBackend) {
    firebaseBackend = new FirebaseAuthBackend(config);
  }
  return firebaseBackend;
};

export const getFirebaseBackend = () => firebaseBackend;
