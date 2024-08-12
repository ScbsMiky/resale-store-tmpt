import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Container from "./components/Container/Container";

import HomeScreen from "./screens/Home/Home";

import SigninScreen from "./screens/Signin/Signin";
import SignupScreen from "./screens/Signup/Signup";

import ProfileScreen from "./screens/Profile/Profile";
import ProfileCartScreen from "./screens/ProfileCart/ProfileCart";
import ProfileEditorScreen from "./screens/ProfileEditor/ProfileEditor";

import ProductViewScreen from "./screens/ProductView/ProductView";
import ProductEditorScreen from "./screens/ProductEditor/ProductEditor";
import ProductCreatorScreen from "./screens/ProductCreator/ProductCreator";

export default function App( ) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(( ) => {
    setTimeout(( ) => setIsAuthenticated(true), 1000);
  }, [ ]);

  return (
    <Container authenticating={!isAuthenticated}>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SigninScreen />} />
          <Route path="/signup" element={<SignupScreen />} />

          <Route path="/" element={<HomeScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/profile/cart" element={<ProfileCartScreen />} />
          <Route path="/profile/editor" element={<ProfileEditorScreen />} />

          <Route path="/product" element={<ProductViewScreen />} />
          <Route path="/product/editor" element={<ProductEditorScreen />} />
          <Route path="/product/creator" element={<ProductCreatorScreen />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};