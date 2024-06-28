import Navbar from './Navbar';
import '../assets/styles/sectionWrapper.css';

interface Props {
  children: any;
  title: string;
}

const SectionWrapper = ({ children, title }: Props) => {
  return (
    <div className='section-outer'>
      <Navbar />
      <div className='section-content'>
        <span className='section-title'>{title}</span>
        {children}
      </div>
    </div>
  );
};

export default SectionWrapper;
