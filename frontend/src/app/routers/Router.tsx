import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ISidebarItemComponent } from "@/shared/types";
import { Loading } from "@/shared/ui";
import { ProtectedRoute } from "./ProtectedRoute";

const MainPage = lazy(() => import("@/pages/main").then(module => ({ default: module.MainPage})));
const LabelPage = lazy(() => import("@/pages/label").then(module => ({ default: module.LabelPage})));
const LoginPage = lazy(() => import("@/pages/login").then(module => ({ default: module.LoginPage})));
const SignUpPage = lazy(() => import("@/pages/signup").then(module => ({ default: module.SignUpPage})));

interface RouterProps {
    items: ISidebarItemComponent[]
}

export const Router = ({ items }: RouterProps) => {
    return (
      <Suspense fallback={<Loading>Загрузка...</Loading>}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            {items.map(item => 
              <Route 
                element={React.createElement(item.component)} 
                path={item.link} 
                key={item.name}
              />
            )}
            <Route element={<LabelPage />} path="/label" />
            <Route element={<MainPage />} path="*" />
          </Route>
  
          <Route element={<LoginPage />} path="/login" />
          <Route element={<SignUpPage />} path="/sign-up" />
        </Routes>
      </Suspense>
    );
  };