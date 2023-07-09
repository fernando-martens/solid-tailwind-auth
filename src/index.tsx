/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import { Route, Router, Routes } from "@solidjs/router";
import { lazy } from "solid-js";

const LoginPage = lazy(() => import("./pages/login"));
const RegisterPage = lazy(() => import("./pages/register"));

const root = document.getElementById('root')

render(() => (
  <Router>
    <Routes>
      <Route path="/" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
    </Routes>
  </Router>
), root!)
