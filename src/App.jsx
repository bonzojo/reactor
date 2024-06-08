import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Profile from "./Profile.jsx";
import MyExprimonent from "./Exprimonent.jsx";
function App() {
  return(
    <>
    <MyExprimonent
      experiment="hello" description="shalom"
    />
    <Header/>
    <Profile/>
    <Footer/>
    </>
  );
}

export default App
