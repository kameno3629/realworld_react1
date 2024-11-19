   // realworld-frontend/components/Layout.js
   import Head from 'next/head';

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
             <a className="navbar-brand" href="/">conduit</a>
             <ul className="nav navbar-nav pull-xs-right">
               <li className="nav-item">
                 <a className="nav-link active" href="/">Home</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="/articles/new">
                   <i className="ion-compose"></i>&nbsp;New Article
                 </a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="/settings">
                   <i className="ion-gear-a"></i>&nbsp;Settings
                 </a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="/profile/eric-simons">
                   <img src={userImageSrc} className="user-pic" alt="User" />
                   Eric Simons
                 </a>
               </li>
             </ul>
           </div>
         </nav>

         <main>{children}</main>

         <footer>
           <div className="container">
             <a href="/" className="logo-font">conduit</a>
             <span className="attribution">
               An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code & design licensed under MIT.
             </span>
           </div>
         </footer>
       </>
     );
   }