import ApAbout from "./components/ApAbout/ApAbout";
import ApFooter from "./components/ApFooter/ApFooter";
import ApHeader from "./components/ApHeader/ApHeader";
import ApMenu from "./components/ApMenu/ApMenu";
import ApProjects from "./components/ApProjects/ApProjects";
//import ApServices from "./components/ApServices";
import ApSkills from "./components/ApSkills/ApSkills";
import FetchingData from "./components/hooks/FetchingData";

function App() {
  const {data, error} = FetchingData('data.json')
  const titleClassStyle = "uppercase text-2xl font-semibold md:text-3xl tracking-widest grid grid-cols-title grid-rows-title gap-6 before:content-[''] after:content-[''] before:block after:block before:border-b-2 after:border-b-2 before:border-secondary-color after:border-secondary-color"
  const buttonClassStyle = "border-2 border-secondary-color p-2 px-4 inline-block rounded-md shadow-md transition-all font-bold duration-300 relative hover:text-white before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:-z-10 before:bg-primary-color before:transition-all before:duration-300 before:hover:w-full"

  if (error) {
    <p>Hubo un error al cargar los datos</p>
  }
    return (
      <div>
        <ApMenu data={data}/>
        <div className="main">
          <ApHeader data={data}/>
          <div className="container mx-auto mt-10">
            <ApAbout data={data} titleClassStyle={titleClassStyle} buttonClassStyle={buttonClassStyle}/>
            <ApSkills data={data} titleClassStyle={titleClassStyle}/>
            <ApProjects data={data} titleClassStyle={titleClassStyle} buttonClassStyle={buttonClassStyle}/>
            {/* <ApServices data={data} titleClassStyle={titleClassStyle}/> */}
          </div>      
        </div>
        <ApFooter data={data} titleClassStyle={titleClassStyle} buttonClassStyle={buttonClassStyle}/>
      </div>
  );
}

export default App;
