import NavComp from './components/NavComp'
import Textform from './components/Textform';


function App() {
  return (
    <>
      <NavComp title="Text Utils"/>
      <div className='container'>
        <Textform heading="Enter the text to analyze below"/>
      </div>
    </>
  );
}

export default App;
