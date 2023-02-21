import ApAbout from "./components/ApAbout";
import ApContact from "./components/ApContact";
import ApFooter from "./components/ApFooter";
import ApHeader from "./components/ApHeader";
import ApMenu from "./components/ApMenu";
import ApProjects from "./components/ApProjects";
import ApServices from "./components/ApServices";
import ApSkills from "./components/ApSkills";
import FetchingData from "./components/hooks/FetchingData";

function App() {
  const {data, error} = FetchingData('data.json')

  if (error) {
    <p>Hubo un error al cargar los datos</p>
  }
  return (
    <div className="main">
      {/* Pasar datos de titulos de secciones como propiedades */}
      <ApMenu data={data}/>
      <ApHeader data={data}/>
      <div className="container mx-auto mt-40">
        <div className="flex flex-row">
          <ApAbout data={data}/>
          <ApSkills data={data}/>
        </div>
        <ApProjects data={data}/>
        <ApServices data={data}/>
        <ApContact/>
        <ApFooter data={data}/>
      </div>      
    </div>
  );
}

export default App;
