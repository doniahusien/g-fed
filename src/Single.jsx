import React from "react";


const Single = (props) => {
    const { contact } = props;
    console.log(props)
    return (
        <tr key={contact.id}>
        <td>{contact.name}</td>
        <td>{contact.phone}</td>
        <td>{contact.address}</td>
      
        </tr>
        );
        
    
}
export default Single;
