import { SectionWrapper } from '../components';
import '../assets/styles/home.css';

const Home = () => {
  return (
    <SectionWrapper>
      <div className='home-header-container'>
        <div className='text-form-placeholder'></div>
      </div>
      <div className='home-content-container'>
        <div className='featured-recipes-container'></div>
      </div>
    </SectionWrapper>
  );
};

export default Home;
