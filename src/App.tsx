

import Header from "./components/Header";
import { companyData } from './data';


function App() {
  return (
    <div>
      <Header 
        title={companyData.name} 
        year={companyData.year}
        slogan={companyData.slogan}
        services={companyData.services}
      />
    </div>
  )
}
export default App