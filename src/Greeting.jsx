export function Greeting({ title, name = "User" }) {
  console.log(title, name);

  return (
    <h1>
      {title}, dice {name}
    </h1>
  );
}

export function Usercard({name, amount, married, address, greet}) {
 return (
    <div>
      <h1>{name}</h1>
      <p>💲{amount}</p>
      <p>{married ? "married" : "single"}</p>
      <ul>
      <li>City: {address.city}</li>
      <li>Address: {address.street}</li>


      </ul>
    </div>
  );
}
