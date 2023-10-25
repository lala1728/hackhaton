import SideBar from "./SideBar"
import Main from "./Main"


const Home = () => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <Main />
    </div>
  )
}

export default Home