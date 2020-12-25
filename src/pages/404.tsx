import React from 'react';
import Link from 'next/link';

const HomePage: React.FunctionComponent = () => {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <div>
        <Link href='/'>index</Link>
      </div>
      <div>
        <Link href='/about'>about</Link>
      </div>
      <div>
        <Link href='/favorites'>favorites</Link>
      </div>
      <div>
        <Link href='/problem'>problem</Link>
      </div>
      <div>
        <Link href='/user'>user</Link>
      </div>
    </>
  );
};

export default HomePage;
