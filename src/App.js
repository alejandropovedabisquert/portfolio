import ApAbout from "./components/ApAbout/ApAbout";
import ApContact from "./components/ApContact";
import ApFooter from "./components/ApFooter";
import ApHeader from "./components/ApHeader";
import ApMenu from "./components/ApMenu/ApMenu";
import ApProjects from "./components/ApProjects/ApProjects";
import ApServices from "./components/ApServices";
import ApSkills from "./components/ApSkills/ApSkills";
import FetchingData from "./components/hooks/FetchingData";

function App() {
  const {data, error} = FetchingData('data.json')
  const titleClassStyle = "text-4xl pb-5 font-bold"

  if (error) {
    <p>Hubo un error al cargar los datos</p>
  }
    return (
      <div>
        <ApMenu data={data}/>
        <div className="main">
          <ApHeader data={data}/>
          <div className="container mx-auto mt-40">
            <div className="grid grid-cols-1 md:flex flex-row">
              <ApAbout data={data} titleClassStyle={titleClassStyle}/>
              <ApSkills data={data} titleClassStyle={titleClassStyle}/>
            </div>
            <ApProjects data={data} titleClassStyle={titleClassStyle}/>
            <ApServices data={data} titleClassStyle={titleClassStyle}/>
          </div>      
        </div>
        <ApFooter data={data} titleClassStyle={titleClassStyle}/>
      </div>
  );
}

export default App;
