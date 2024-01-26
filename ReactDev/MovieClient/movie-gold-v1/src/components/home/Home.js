import Hero from '../hero/Hero';

const Home = ({movies}) => { // make sure the movies is subsequently passed down from App.js and pass down to Hero.js
  return (
    // <div>
    //     Welcome to the home page.
    // </div>
    <Hero movies = {movies}/>
  )
}

export default Home