import React from "react";
import Card from './Card';
import contacts from '../contacts';

// You can see alternative methods to pass props arguments
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card {...contacts[0]} />
      <Card {...contacts[1]} />
      <Card {...contacts[2]} />
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
