import { SectionWrapper, Title } from '../components';
import '../assets/styles/home.css';

const Home = () => {
  return (
    <SectionWrapper>
      <div className='home-header-container'>
        <Title />
      </div>
      <div className='home-content-container'>
        <div className='featured-recipes-container'></div>
      </div>
    </SectionWrapper>
  );
};

export default Home;
