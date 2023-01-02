import './ExternalFrame.css';

const ExternalFrame = ({ children }) => {
  return (
    <div className='gradientBlue'>
      {children}
    </div>
  )
};

export default ExternalFrame