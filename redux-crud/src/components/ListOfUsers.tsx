import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import { useAppSelector } from "../hooks/store";
import { useUserActions } from "../hooks/useUserActions";

export function ListOfUsers() {
  const users = useAppSelector((state) => state.users);
  
  const { removeUser } = useUserActions(); 

  return (
    <>
    <h3>Numero de usuarios: {users.length}</h3>
      <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Id</TableHeaderCell>
          <TableHeaderCell>Nombre</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Acciones</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.github}</TableCell>
            <TableCell>
              <button>Editar</button>
              <button onClick={() => removeUser(item.id)}>Eliminar</button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </>
  );
}
