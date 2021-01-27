import React from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from 'react-bootstrap'
import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter as Router} from 'react-router-dom'
import Route from "react-router-dom/es/Route";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
    return (
        <Router>
            <Header/>
            <main className='py-3'>
                <Container>
                    <Route path='/' exact component={HomeScreen}/>
                    <Route path='/product/:id' component={ProductScreen} />
                </Container>
            </main>
            <Footer/>
        </Router>
    );
}

export default App;
