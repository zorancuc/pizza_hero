// this is going to store Firebase realtime database API code
import { db } from './firebase';

// ##########3 user API

// create an user and store it at users/id path (it's an asynchronous func)
export const doCreateUser = (id, username, email) =>
  db
    .collection('user')
    .doc(id)
    .set({
      username,
      email,
    });

export const onceGetUsers = () => db.doc('user').get();

export const doGetAnUnser = uid => db.doc(`user/${uid}`).get();

export const doSaveZACoin = (id, zaCoin) =>
  db
    .collection('zaCoin')
    .doc(id)
    .set({
      coin: zaCoin,
    });

export const doGetZACoin = uid => db.doc(`zaCoin/${uid}`).get();

// other APIs could come below
