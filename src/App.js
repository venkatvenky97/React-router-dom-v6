import { React, lazy, Suspense  } from 'react'

import { Routes, Route } from 'react-router-dom'
// import { About } from './components/configure/About'
import { Home } from './components/configure/Home'
import { NavBar } from './components/Links/NavBar'
import { OrderSummary } from './components/Navigating/OrderSummary';
import { NoMatch } from './components/Navigating/NoMatch';
import { Product } from './components/Nested-links/Product';
import { FeatureProduct } from './components/Nested-links/FeatureProduct';
import { NewProduct } from './components/Nested-links/NewProduct';
import { Users } from './components/Dynamic-Routes/Users';
import { UserDetails } from './components/Dynamic-Routes/UserDetails';
import { Admin } from './components/Dynamic-Routes/Admin'
import { Profile } from './components/Authentication/Profile'
import { AuthProvider } from './components/Authentication/auth';
import { Login } from './components/Authentication/Login'
import { RequireAuth } from './components/Authentication/RequireAuth';
// import { lazyload } from './components/lazyLoad/lazyload';
 
//dynamic import 
const Lazyload = lazy(() => import('./components/LazyLoad/Lazyload'))

function App() {
  return (
    <AuthProvider>
    {/* <Suspense fallback={<div>Loading..</div>}>
      <div className='App'>
       <header className='App-header'>
                    <Lazyload></Lazyload>
                </header>
                </div>
                 */}
                

    <NavBar />
    
    <Routes>
 

      {/* configure links */}
      <Route path="/" element={<Home />} />
       <Route path="about" element={
        
      <Suspense fallback={<div><h1>Loading...</h1></div>}>
   
       
        <Lazyload />
      </Suspense>} /> 

      {/* Navigating */}
      <Route path='*' element={<NoMatch />} />
      <Route path='order-summary' element={<OrderSummary />} />

      {/* Nested links */}
      <Route path='product' element={<Product />}>

        {/* Index routes */}
        <Route index element={<FeatureProduct/>} />
           <Route path='new' element={<NewProduct />} />
           <Route path='feature' element={<FeatureProduct />} /> 
      </Route>
   
      {/* Dynamic routes */}
      <Route path='users' element={<Users />}>
      <Route path=':usersId' element={<UserDetails />} />
     
     
      <Route path='admin' element={<Admin />} />
      </Route>
        
      {/* Authentication */}
      <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} /> 

      <Route path='login' element={<Login />} /> 



    </Routes>
    {/* <Suspense/> */}
    </AuthProvider>
    
    
  );
}

export default App;

