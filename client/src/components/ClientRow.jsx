import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";
import { GET_PROJECTS } from "../queries/projectQueries";

export default function ClientRow({ client } ) {

  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: {id: client.id},
    refetchQueries: [{query: GET_CLIENTS}, {query: GET_PROJECTS}], //not the most optimal 
    // update(cache, {data: {deleteClient }}){
    //   const {clients} = cache.readQuery({query: GET_CLIENTS}); //Get the query from the cache
    //   cache.writeQuery({ //We set client in our data to filter out client that matches the deleted client's id
    //     query: GET_CLIENTS,
    //     data: {clients: clients.filter(client => client.id !== deleteClient.id)},
    //   });
    // }
  });  
  return (
    <tr>
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
        <td>
            <button className="btn btn-danger btn-sm" onClick={deleteClient}>
                <FaTrash />
            </button>
        </td>
    </tr>
  )
}
