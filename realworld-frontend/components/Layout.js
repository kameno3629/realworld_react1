   // realworld-frontend/components/Layout.js
   import Head from 'next/head';
   import Link from 'next/link';

   export default function Layout({ children }) {
     const userImageSrc = "/smiley-cyrus.jpeg";

     return (
       <>
         <Head>
           <meta charSet="utf-8" />
           <title>Conduit</title>
         </Head>
         <nav className="navbar navbar-light">
           <div className="container">
             <Link href="/" legacyBehavior>
               <a className="navbar-brand">conduit</a>
             </Link>
             <ul className="nav navbar-nav pull-xs-right">
               <li className="nav-item">
                 <Link href="/" legacyBehavior>
                   <a className="nav-link active">Home</a>
                 </Link>
               </li>
               <li className="nav-item">
                 <Link href="/new-article" legacyBehavior>
                   <a className="nav-link">
                     <i className="ion-compose"></i>&nbsp;New Article
                   </a>
                 </Link>
               </li>
               <li className="nav-item">
                 <Link href="/settings" legacyBehavior>
                   <a className="nav-link">
                     <i className="ion-gear-a"></i>&nbsp;Settings
                   </a>
                 </Link>
               </li>
               <li className="nav-item">
                 <Link href="/profile/eric-simons" legacyBehavior>
                   <a className="nav-link">
                     <img src={userImageSrc} className="user-pic" alt="User" />
                     Eric Simons
                   </a>
                 </Link>
               </li>
             </ul>
           </div>
         </nav>

         <main>{children}</main>

         <footer>
           <div className="container">
             <Link href="/" legacyBehavior>
               <a className="logo-font">conduit</a>
             </Link>
             <span className="attribution">
               An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code & design licensed under MIT.
             </span>
           </div>
         </footer>
       </>
     );
   }