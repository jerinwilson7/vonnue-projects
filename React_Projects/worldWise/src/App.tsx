import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { CitiesProvider } from "./contexts/CitiesContext"
import { AuthProvider } from "./contexts/FakeAuthContext"
import { ProtectedRoute } from "./Pages/ProtectedRoute"
import { lazy, Suspense } from "react"

import { CityList } from "./components/CityList"
import City from "./components/City"
import Form from './components/Form'
import { CountryList } from "./components/CountryList"
import SpinnerFullPage from "./components/SpinnerFullPage"




const Homepage = lazy(()=>import('./Pages/HomePage'))
const Product = lazy(()=>import('./Pages/Product'))
const Pricing = lazy(()=>import('./Pages/Pricing'))
const Login = lazy(()=>import('./Pages/Login'))
const PageNotFound = lazy(()=>import('./Pages/PageNotFound'))
const AppLayout = lazy(()=>import('./Pages/AppLayout'))



function App() {


  return (
    <CitiesProvider>
      <AuthProvider>


    <BrowserRouter>
    <Suspense fallback={<SpinnerFullPage/>}>

    <Routes>
      <Route index element={<Homepage/>}/>
      <Route path='product' element={<Product/>}/>
      <Route path="pricing" element={<Pricing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="app" element={
        <ProtectedRoute>

          <AppLayout/>
        </ProtectedRoute>
      }>
        <Route index element={<Navigate replace to="cities"/>}/>
        <Route path="cities" element={<CityList/>}/>

        <Route path="cities/:id" element={<City/>}/>

        <Route path="countries" element={<CountryList/>}/>
        <Route path="form" element={<Form/>}/>
      </Route>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
        </Suspense>
    </BrowserRouter>
      </AuthProvider>
    </CitiesProvider>
  )
}

export default App
