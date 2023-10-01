import { useState, useEffect } from 'react';
import {
  Routes,
  Route,
  Navigate,
  Outlet,
  useNavigate,
  Link,
} from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import NavBar from "./components/navbar/NavBar";
import Cart from "./components/cart/Cart";
import Landing from "./pages/landing/Landing";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import ProfileEdit from "./pages/profile/ProfileEdit";
import Post from "./components/posts/Post";
import ToolsEditForm from "./components/tools/ToolsEditForm";
import ToolsNewForm from "./components/tools/ToolsNewForm";
import ToolsDetails from "./components/tools/ToolsDetails";
import ToolsUserDetails from "./components/tools/ToolsUserDetails";
import NewPost from "./components/posts/NewPost";
import About from "./pages/about/About";

import FourOFour from './pages/fourOFour/FourOFour';

import Posts from './components/posts/Posts';
import ArtistsGraphic from "./assets/artistsgraphic.jpg";

import "./App.css";
import ToolsUsers from "./components/tools/ToolsUsers";
import { Badge } from "@mui/material";
import CheckoutFormMain from "./components/cart/CheckoutFormMain";
import ToolsIndexSingle from './components/tools/ToolsIndexSingle';
import SuccessPage from "./components/cart/SuccessPage";
const API = import.meta.env.VITE_REACT_APP_API_URL;

const ProtectedRoute = ({ user, redirectPath = '/' }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

function App() {
  const [cookies, removeCookie] = useCookies();
  const [modal, setModal] = useState(false);
  const [tab, setTab] = useState(false); 
  const [user, setUser] = useState(undefined);
  const [error, setError] = useState();
  const [cartView, setCartView] = useState(false);
  
  const [cartItems, setCartItems] = useState([]);
  const [posts, setposts] = useState([]);
  const [searchResults, setSearchResults] = useState('');
  const [dataLoader, setDataLoader] = useState(true);
  const [postsCategorized, setPostsCategorized] = useState({
    Painting: [],
    Drawing: [],
    Photography: [],
    Ceramics: [],
    Sculpting: [],
    Printmaking: [],
    Graffiti: [],
    "Fashion Design": [],
    Filmmaking: [],
    "Digital Artistry": [],
  });
  const [grandTotal, setGrandTotal] = useState([]);

  // function handleCheckout() {
  //   // const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  //   fetch('/checkout', {
  //       method: 'POST',
  //       headers: {
  //           'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ amount: grandTotal }),
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //       })
  //   .catch(error => {
  //       console.error('Error:', error);
  //   });
  // }

  useEffect(() => {
    const getPosts = () => {
      axios
        .get(`${API}/posts`)
        .then((response) => {
          const allPosts = response.data;
          let updatedFilteredPosts = {};
          for (let category in postsCategorized) {
            const filteredPosts = allPosts.filter(
              (post) => post.category.toLowerCase() == category.toLowerCase()
            );
            updatedFilteredPosts[category] = filteredPosts;
          }
          setposts(response.data);
          setPostsCategorized(updatedFilteredPosts);

          function confirmFilteredData() {
            for (let category in postsCategorized) {
              if (category.length > 1) {
                setDataLoader(false);
              } else if (category.length < 1) {
                setDataLoader(true);
              }
            }
          }
          if (dataLoader === true) {
            confirmFilteredData();
          }
        })
        .catch((error) => console.error("catch", error));
    };
    getPosts();
  }, []);

  //console.log(posts)

  useEffect(() => {
    checkToken();
    getCart();
  }, []);

  useEffect(() => {
    if (cartItems) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const getCart = () => {
    if (localStorage.getItem("cart")) {
      setCartItems(JSON.parse(localStorage.getItem("cart")));
    }
  };

  const addToCart = (tool) => {
    setCartItems([...cartItems, tool]);
  };

  const removeItem = (i) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(i, 1);
    setCartItems(updatedCart);
  };

  const handleSignIn = (authUser) => {
    setUser(authUser);
  };

  const handleLogout = () => {
    setUser(undefined);
    axios.post(`${API}/auth/logout`);
    removeCookie("token");
  };

  function checkToken() {
    if (cookies.token !== undefined) {
      axios
        .post(
          `${API}/auth/token`,
          { cookie: cookies.token },
          { cookie: cookies.token },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          handleSignIn(res.data.user);
        })
        .catch((err) => {
          setError(err);
          setTimeout(() => {
            setError();
          }, 3000);
        });
    }
  }

  const emptyCart = () => {
    setCartItems([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  return (
    <div className="App">
         <NavBar
          user={user}
          handleLogout={handleLogout}
          handleSignIn={handleSignIn}
          modal={modal}
          setModal={setModal}
          tab={tab}
          setTab={setTab}
          posts={posts}
          dataLoader={dataLoader}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          cartItems={cartItems}
          removeItem={removeItem}
          setGrandTotal={setGrandTotal}
        />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                modal={modal}
                setModal={setModal}
                posts={posts}
                ArtistsGraphic={ArtistsGraphic}
                postsCategorized={postsCategorized}
                dataLoader={dataLoader}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <CheckoutFormMain
              emptyCart={emptyCart}
                grandTotal={grandTotal}
              />
            }
          />

          <Route path='/*' element={<FourOFour />} />
          <Route path="/about" element={<About />} />
          <Route path='/posts' element={<Posts posts={posts} />}  />
          <Route path='/posts/:id' element={<Post />} />
          {/* create public profile view for outside viewers */}
          {/* <Route path='/tools' element={<ToolsDetails />} /> */}
          {/* <Route path='/tools/:id' element={<ToolsUserDetails />} /> */}
          <Route path='/tools/:id' element={<ToolsUserDetails addToCart={addToCart} />} />
          <Route element={<ProtectedRoute user={user} />}>
            {/* <Route path='/home/:username' element={<Home user={user} />} /> */}
            <Route path="/:username/post/:id" element={<Post user={user} />} />
            <Route
              path="/home"
              element={
                <Home
                  user={user}
                  postsCategorized={postsCategorized}
                  ArtistsGraphic={ArtistsGraphic}
                  dataLoader={dataLoader}
                  updateUser={handleSignIn}
                />
              }
            />

            <Route
              path="/:username/post/new"
              element={<NewPost user={user} />}
            />
            <Route
              path="/:username/post/new"
              element={<NewPost user={user} />}
            />
            <Route
              path="/:username/profile"
              element={<Profile user={user} />}
            />
            <Route
              path="/:username/profile/edit"
              element={<ProfileEdit user={user} refreshUser={checkToken} />}
            />
            {/* <Route path="/tools" element={<ToolsUsers user={user} />} />

            <Route path="/tools/:id" element={<ToolsUsers user={user} />} /> */}

            <Route
              path="/:username/tools/:tools_id"
              element={<ToolsEditForm user={user} />}
            />

            <Route
              path="/:username/tools/new"
              element={<ToolsNewForm user={user} />}
            />

            {/* <Route
              path="/:username/tools/:tools_id"
              element={<ToolsDetails addToCart={addToCart} />}
            /> */}
            <Route
              path="/:username/tools/:tools_id"
              element={<ToolsIndexSingle addToCart={addToCart} />}
            />
            <Route
              path="/:username/tools/:tools_id/edit"
              element={<ToolsEditForm user={user} />}
            />
          </Route>

          <Route path="/post/:id" element={<Post />} />

          <Route path="/tools" element={<ToolsUsers />} />
          <Route
            path="/tools/:id"
            element={
              <ToolsUserDetails removeItem={removeItem} addToCart={addToCart} />
            }
          />
          <Route path="/success" element={<SuccessPage emptyCart={emptyCart} user={user} />} />

          {/* create public profile view for outside viewers */}
          {/* <Route path='/tools' element={<Tools />} />
          <Route path='/tools/:tools_id' element={<ToolsUserDetails />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
