   // realworld-frontend/components/Layout.js
   import Head from 'next/head';

   export default function Layout({ children }) {
     return (
       <>
         <Head>
           <meta charSet="utf-8" />
           <title>Conduit</title>
           <link
             href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
             rel="stylesheet"
             type="text/css"
           />
           <link
             href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic"
             rel="stylesheet"
             type="text/css"
           />
           <link rel="stylesheet" href="//demo.productionready.io/main.css" />
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
                   <img src="" className="user-pic" alt="User" />
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