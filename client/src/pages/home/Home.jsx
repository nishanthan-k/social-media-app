import Story from "../../components/story/Story"
import Posts from "../../components/posts/Posts"
import "./Home.scss"

const Home = () => {
  return (
    <div className="home">
      <Story />
      <Posts />
    </div>
  )
}

export default Home
