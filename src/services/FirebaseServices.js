import firestore from '@react-native-firebase/firestore';

const getAllByCollection = async collection => {
  const usersList = [];
  await firestore()
    .collection(collection)
    .orderBy('id')
    .get({source: 'server'})
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        usersList.push(documentSnapshot.data());
      });
    })
    .catch(error => {
      console.log('error', error);
    });

  return usersList;
};

const checkAndLogin = async (email, password, callback) => {
  await firestore()
    .collection('Users')
    .where('email', '==', email)
    .where('password', '==', password)
    .get({source: 'server'})
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        if (
          documentSnapshot.data().email == email &&
          documentSnapshot.data().password == password
        ) {
          callback(documentSnapshot.data());
        } else {
          callback();
        }
      });
    })
    .catch(error => {
      console.log('error', error);
    });
};

const createNewUser = async (user, callback) => {
  await firestore()
    .collection('Users')
    .add(user)
    .then(() => {
      callback();
    })
    .catch(error => {
      console.log('error', error);
    });
};

const getUserDetailsFromId = async id => {
  return new Promise((resolve, reject) => {
    firestore()
      .collection('Users')
      .where('id', '==', JSON.parse(id))
      .get({source: 'server'})
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          resolve(doc.data());
        });
      })
      .catch(error => {
        console.log('error', error);
        reject(error);
      });
  });
};

export {getAllByCollection, checkAndLogin, createNewUser, getUserDetailsFromId};
