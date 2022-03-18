import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./views/Login";
import Reports from "./views/Reports";
import Users from "./views/Users"
import React from "react";
import { getToken } from "./utils/session"
import Tests from "./views/Tests"
import TestsSteps from "./views/TestsSteps"
import TestExecutions from "./views/TestExecutions"



export default class App extends React.Component {
  render() {
    const token = getToken()
    if (!token) return <Login />
    return (
      <BrowserRouter>
        <Header />
        <br/>
        <Container>
          <Routes>
            <Route path="/" element={<Reports />}></Route>
            <Route path="/users" element={<Users />} />
            <Route path="/tests" element={<Tests />}></Route>
            <Route path="/tests/:testId/steps" element={<TestsSteps />}></Route>
            <Route path="/tests/:testId/testExecution" element={<TestExecutions />}></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    )
  }
}