
// import React, { useEffect, useState } from 'react'
// import Logo from './logo.png';
// import { ReactComponent as Menu } from './menu.svg';
// import { ReactComponent as Ca } from './ca.svg';
// import { Space } from 'antd';


// const NavbarDeskTop = () => {
//   const [caC, _caC] = useState(false);

//   const handleClick = (button) => {
//     if(button == 'ca'){
//       _caC(true);
//       setTimeout(() => {
//         _caC(false);
//       }, 100);
//     }
//     if(button == ''){
//       _caC(true);
//       setTimeout(() => {
//         _caC(false);
//       }, 100);
//     }
    
//   };


    
//   return (
//     <div className='fixed-top' style={{backgroundColor:'white',
//     borderBottom:'1px solid rgb(0,0,0,0.1)'
// }}>
// <div className='container  navbar' style={{height: '67px', padding:8,display: 'inlineBlock',
// }}>
//     <img style={{ display: 'inline-flex'}} src={Logo} height='50px' alt="" srcset="" />
    
//     <div style={{gap: 100, display: 'inline-flex',height:50, paddingTop:10}}>
//         <div style={{textAlign: 'center', color: '#121212', fontSize: 16, fontFamily: 'Satoshi', fontWeight: '700', wordWrap: 'break-word'}}>About</div>
//         <div style={{textAlign: 'center', color: '#121212', fontSize: 16, fontFamily: 'Satoshi', fontWeight: '700', wordWrap: 'break-word'}}>FAQ</div>
//     </div>
    
//     <div style={{ height:50,width:'200px'}}><a href='#form'><Ca style={{opacity:caC?'0.5':'1',height:50}} onClick={()=>handleClick('ca')}/></a></div>
// </div>
// </div>

//   );
// }

// export default NavbarDeskTop
