import React from 'react'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
  return (
    <div style={{textAlign: 'center',marginTop: '50px'}}>
      <h2>CLICK FOR PUZZLE GAME</h2>
      <Link href="/puzzle"><button className="btn btn-dark me-3">PUZZLE</button></Link>
    </div>
  );
};

export default Home;