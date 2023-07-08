// import { useState } from "react";
// import { Link } from "react-scroll";
// import Buga from "./images/Buga.png";
// import "./Navbar.css";

// const navItem = [
//   {
//     path: "About",
//     text: "About",
//   },
//   {
//     path: "FAQ",
//     text: "FAQ",
//   },
// ];

// // const Navbar = () => {
// //   const [navopen, setNavOpen] = useState(false);

// //   return (
// //     <section className="header">
// //       {/* <div
// //         onClick={() => {
// //           setNavOpen(false);
// //         }}
// //         className={`overlay ${navopen && "open"} `}
// //       ></div> */}
// //       <div className="header-wrapper">
// //         <div className="logo">
// //           <Link to="/">
// //             <img src={Buga} className="head-img-text" alt="logo" />
// //           </Link>
// //         </div>
// //         <nav className={`navigation ${navopen && "mobile"}`}>
// //           {navItem.map(({ path, number, text }, index) => (
// //             <Link key={index} to={path} duration={3000}>
// //               {number}
// //               <span>{text}</span>
// //             </Link>
// //           ))}
// //         </nav>
// //         <div className="div-ji">
// //           <div className="toggle-menu" onClick={() => setNavOpen(!navopen)}>
// //             <div className={`burger ${navopen && "one"}`} />
// //             <div className={`burger ${navopen && "two"}`} />
// //             <div className={`burger ${navopen && "three"}`} />
// //           </div>
// //         </div>
// //       </div>
// //       {/* <div className="btn-join-list">
// //         <button className="btn-nav">jointhewaitlist</button>
// //       </div> */}
// //     </section>
// //   );
// // };

// // export default Navbar;

// import React from "react";

// const Navbar = () => {
//   const [navopen, setNavOpen] = useState(false);
//   return (
//     <div>
//       {" "}
//       <section className="header">
//         //{" "}
//         {/* <div
// //         onClick={() => {
// //           setNavOpen(false);
// //         }}
// //         className={`overlay ${navopen && "open"} `}
// //       ></div> */}
//         //{" "}
//         <div className="header-wrapper">
//           //{" "}
//           <div className="logo">
//             //{" "}
//             <Link to="/">
//               // <img src={Buga} className="head-img-text" alt="logo" />
//               //{" "}
//             </Link>
//             //{" "}
//           </div>
//           //{" "}
//           <nav className={`navigation ${navopen && "mobile"}`}>
//             //{" "}
//             {navItem.map(({ path, number, text }, index) => (
//               <Link key={index} to={path} duration={3000}>
//                 {number}
//                 <span>{text}</span>
//               </Link>
//             ))}
//           </nav>
//           <div className="div-ji">
//             <div className="toggle-menu" onClick={() => setNavOpen(!navopen)}>
//               <div className={`burger ${navopen && "one"}`} />
//               <div className={`burger ${navopen && "two"}`} />
//               <div className={`burger ${navopen && "three"}`} />
//             </div>
//           </div>
//         </div>
//         {/* <div className="btn-join-list">
//         <button className="btn-nav">jointhewaitlist</button>
//       </div> */}
//       </section>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-scroll";
import Buga from "./images/Buga.png";
import "./Navbar.css";

const navItem = [
  {
    path: "About",
    text: "About",
  },
  {
    path: "FAQ",
    text: "FAQ",
  },
];

const Navbar = () => {
  const [navopen, setNavOpen] = useState(false);

  return (
    <section className="header">
      <div className="header-wrapper">
        <div className="logo">
          <Link to="/">
            <img src={Buga} className="head-img-text" alt="logo" />
          </Link>
        </div>
        <nav className={`navigation ${navopen && "mobile"}`}>
          {navItem.map(({ path, number, text }, index) => (
            <Link key={index} to={path} duration={3000}>
              {number}
              <span>{text}</span>
            </Link>
          ))}
        </nav>
        <div className="div-ji">
          <div className="toggle-menu" onClick={() => setNavOpen(!navopen)}>
            <div className={`burger ${navopen && "one"}`} />
            <div className={`burger ${navopen && "two"}`} />
            <div className={`burger ${navopen && "three"}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
