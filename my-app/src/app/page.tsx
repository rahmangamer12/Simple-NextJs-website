// pages/about.js

import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page of our simple Next.js website.</p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
};

 About;
// pages/contact.js


const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>This is the contact page of our simple Next.js website.</p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
};

 Contact;
// pages/index.js



const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our simple Next.js website.</p>
      <nav>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
