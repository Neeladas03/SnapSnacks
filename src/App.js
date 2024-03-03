import React from "react"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { Register} from "./pages/login/Register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { DetailsPages } from "./pages/details/DetailsPages"
import { Account } from "./pages/account/Account"
import { Create } from "./components/create/Create"
import Contact from "./pages/contact/Contact"
import About from "./pages/about/About"
import { useState } from "react"
import Recipes from "./pages/recipes/Recipes"   
import Blogs from "./pages/blogs/Blogs"
import Veg from "./pages/recipes/veg/Veg"
import Nonveg from "./pages/recipes/non-veg/Nonveg"
import Fastfood from "./pages/recipes/fast-foods/Fastfood"
import Drinks from "./pages/recipes/drinks/Drinks"

const App = () => {

  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = (newPost) => {
    setBlogPosts([...blogPosts, newPost]);
  };

  


  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/details/:id' component={DetailsPages} />
          <Route exact path='/account' component={Account} />
          <Route exact path='/create'>
            <Create addBlogPost={addBlogPost} />
          </Route>
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/recipes' component={Recipes} />
          <Route exact path='/blogs' component={Blogs} />
          <Route exact path='/recipes/veg' component={Veg} />
          <Route exact path='/recipes/non-veg' component={Nonveg} />
          <Route exact path='/recipes/fast-foods' component={Fastfood} />
          <Route exact path='/recipes/drinks' component={Drinks} />

        </Switch>
        <Footer />
      </Router>
    </>
  )
}
export default App
