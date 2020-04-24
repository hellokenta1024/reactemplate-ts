import { functions, db } from "./firebase";

const createUserRecordHook = functions.auth.user().onCreate(async (user) => {
  const data: any = {
    id: user.uid,
    email: user.email,
    createdAt: db.FieldValue.serverTimestamp(),
  };
  if (user.displayName) {
    data.name = user.displayName;
  }
  try {
    await db().collection("users").doc(user.uid).set(data, { merge: true });
  } catch (error) {
    console.error("create user error", error);
  }
});

export default createUserRecordHook;
