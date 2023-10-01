import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Login from './components/login.component'
import SignUp from './components/signup.component'
import UserDetails from './components/userDetails'




function App() {
  return (
  <Router>

      <div className="App opacity">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">

          <div className="container">

          <a className="navbar-brand" href="https://play.google.com/store/apps/details?id=boaula.mhs.com&hl=pt_BR&gl=US">Math High Speed MHS</a>
                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                          <Link className="nav-link" to={'/sign-in'}>
                            Login
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={'/sign-up'}>
                            Register
                          </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Em breve</a>
                        </li>
                    </ul>
                </div>

          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userDetails" element={<UserDetails />} />
            </Routes>
          </div>
        </div>
      </div>
      
    </Router>
  )
}

export default App