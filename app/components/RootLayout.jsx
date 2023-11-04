// import { useState } from 'react';
// import { useRouter } from 'next/router';

// export default function RootLayout({ children }) {
//   const [selectedMenuItem, setSelectedMenuItem] = useState('dashboard');
//   const router = useRouter();

//   useEffect(() => {
//     const currentPathname = router.pathname;
//     if (currentPathname === '/dashboard') {
//       setSelectedMenuItem('dashboard');
//     } else if (currentPathname === '/account') {
//       setSelectedMenuItem('account');
//     } else if (currentPathname === '/calculator') {
//       setSelectedMenuItem('calculator');
//     } else if (currentPathname === '/refferal') {
//       setSelectedMenuItem('refferal');
//     }
//   }, [router.pathname]);