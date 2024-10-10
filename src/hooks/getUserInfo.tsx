import { UserInfo } from "../App";

export const getUserInfo = () => {
  const user = localStorage.getItem('actualUser');
  const list = localStorage.getItem('usersList');
  let parsedList: UserInfo[] = [];

  try {
    if (list) {
      parsedList = JSON.parse(list);
    }
  } catch (error) {
    console.error('Error parsing usersList:', error);
  }

  const getUser = () => {
    try {
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error('Error parsing actualUser:', error);
      return null;
    }
  };

  const getThisUser = (ID: string) => {
    try {
      const thisUser = parsedList.find((element: UserInfo) => element.id === ID);
      return thisUser || null;
    } catch (error) {
      console.error('Error finding user by ID:', error);
      return null;
    }
  };

  return { getUser, getThisUser };
};
