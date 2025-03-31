import { addNewUser, deleteUserById, userID } from "../store/users/slice"; // esto es recomendable como un custom hook para tener el tema del dispatch 
import { useAppDispatch } from "./store"; 

export const useUserActions = () => {
  const dispatch = useAppDispatch();

  const addUser = ({name, email, github}) => {
    dispatch(addNewUser({name, email, github})); 
  }

  const removeUser = (id: userID) => { // no hay persistencia en las acciones por ejemplo al eliminar parece eliminar pero no es verdad realmente
    dispatch(deleteUserById(id));
  };

  return { removeUser, addUser }; 
};