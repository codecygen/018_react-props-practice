import React from "react";
import Card from './Card';
import contacts from '../contacts';
import Avatar from './Avatar';

// if you dont pass a key element it creates problem says
// Each child in a list should have a unique "key" prop
// Alternatively you can pass each elements individually
// const createCard = (contact, index) => {
//   return(
//     <Card 
//       key={index}
//       name={contact.name}
//       imgURL={contact.imgURL}
//       phone={contact.phone}
//       email={contact.email}
//     />
//   );
// }

const createCard = (contact, index) => {
  return(
    <Card 
      key={index}
      {...contacts[index]} 
    />
  );
}

// You can see alternative methods to pass props arguments
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgURL="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/aIqsmC5ZFVGLq9L1afa0P6SW8YI=/1440x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/26GA5K534RGWC7VWVLDMURHBLI.jpg" />

      {contacts.map(createCard)}

      {/* <Card {...contacts[0]} />
      <Card {...contacts[1]} />
      <Card {...contacts[2]} /> */}
      <Card 
        name='Michael Jackson' 
        imgURL='https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/03/30/12/shutterstock-editorial-138187a.jpg?width=990&auto=webp&quality=75' 
        phone='+923 584 725' 
        email='mj@mj.com' 
      />
    </div>
  );
}

export default App;
