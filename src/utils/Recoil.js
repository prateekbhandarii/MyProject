import {atom, useRecoilState} from 'recoil';

const isLoadingState = atom({
  key: 'isLoading',
  default: false,
});

const loggedInUser = atom({
  key: 'loggedInUser',
  default: null,
});

const listOfUsers = atom({
  key: 'usersList',
  default: [],
});

export {isLoadingState, loggedInUser, listOfUsers};
