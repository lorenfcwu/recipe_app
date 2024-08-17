import { SectionWrapper, Title, Landing } from '../components';
import '../assets/styles/home.css';

const Home = () => {
  return (
    <SectionWrapper>
      <div className='home-header-container'>
        <Title />
      </div>
      <div className='home-content-container'>
        <Landing />
      </div>
    </SectionWrapper>
  );
};

export default Home;
