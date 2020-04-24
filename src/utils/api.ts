import firebase, { db } from "./firebase";

export const signupWithEmail = async (
  email: string,
  password: string
): Promise<firebase.auth.UserCredential> => {
  try {
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    return result;
  } catch (error) {
    alert(error);
    return error;
  }
};

export const signinWithEmail = async (email: string, password: string) => {
  try {
    const result = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return result;
  } catch (error) {
    alert(error);
    return error;
  }
};

export const logout = async () => {
  try {
    const result = await firebase.auth().signOut();
    return result;
  } catch (error) {
    alert(error);
    return error;
  }
};

export const updateProfile = async (
  displayName: string,
  user: firebase.User
) => {
  try {
    const result = await user.updateProfile({ displayName });
    await db()
      .collection("users")
      .doc(user.uid)
      .set({ name: displayName }, { merge: true });
    return result;
  } catch (error) {
    return error;
  }
};

export const getCurrentUser = async () => {
  const user = firebase.auth().currentUser;
  try {
    const result = await db().collection("users").doc(user?.uid).get();
    return { ...result.data(), ...user };
  } catch (error) {
    alert(error);
    return error;
  }
};
