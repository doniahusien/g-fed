import { Fragment } from 'react';

import Single from './Single';

function App() {
  const contact = [
    {
      id:1,
      name: "donia",
      phone: "+2882",
      address:"mansoura",
    },
    {
      id:2,
      name: "haneen",
      phone: "+872",
      address:"cairo",
    }
  ]
  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>phone</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
      {
        contact.map(cont => {
          return (
            <Single contact={contact} key={contact.id } />
          )
        })
          }
          <h1>ft</h1>
          <p>gap-0</p>
          </tbody>
      </table>
   </Fragment>
  );
}

export default App;
