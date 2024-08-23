
//import react router dom
import { Switch, Route, Link } from "react-router-dom";

import "./index.css";

//import component Home
import Home from "./pages/Home";

//import component Shop
import Shop from "./pages/Shop";

//Product
import Product from "./pages/Product";
import Product2 from "./pages/Product2";
import Product3 from "./pages/Product3";
import Product4 from "./pages/Product4";
import Product5 from "./pages/Product5";
import Product6 from "./pages/Product6";
import Product7 from "./pages/Product7";
import Product8 from "./pages/Product8";

//import component Post Index
import PostIndex from "./pages/posts/Index";

//import component Post Create
import PostCreate from "./pages/posts/Create";

//import component Post Edit
import PostEdit from "./pages/posts/Edit";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Shop" component={Shop} />
        <Route exact path="/Product" component={Product} />
        <Route exact path="/Product2" component={Product2} />
        <Route exact path="/Product3" component={Product3} />
        <Route exact path="/Product4" component={Product4} />
        <Route exact path="/Product5" component={Product5} />
        <Route exact path="/Product6" component={Product6} />
        <Route exact path="/Product7" component={Product7} />
        <Route exact path="/Product8" component={Product8} />

        <Route exact path="/posts" component={PostIndex} />
        <Route exact path="/posts/create" component={PostCreate} />
        <Route exact path="/posts/edit/:id" component={PostEdit} />
      </Switch>
    </div>
  );
}

export default App;
