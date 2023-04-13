// REBUILD AS A CLASS COMPONENT

// 1st IMPORTS
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import SelectedBeast from "./SelectedBeast";
import FilterForm from "./FilterForm";
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';


// 2nd CREATE THE CLASS - will always have a render method


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedBeast: null,
      filterHorns: 0,
    }
  }

  handleSelectedBeast = (beast) => {
    this.setState({ selectedBeast: beast });
  }

  closeSelectedBeast = () => {
    this.setState({ selectedBeast: null });
  }

  handleFilterChange = (filterHorns) => {
    this.setState({ filterHorns });
  }

  render (){
    const filteredBeasts = this.state.filterHorns === 0 ? data : data.filter(beast => beast.horns === this.state.filterHorns);

    return(
    <>
      <Header />
      <FilterForm onFilterChange={this.handleFilterChange} />
      <Main beasts={filteredBeasts} onSelectBeast={this.handleSelectedBeast} />
      <SelectedBeast beast={this.state.selectedBeast} onHide={this.closeSelectedBeast} />
      <Footer />
    </>
    )
  }
}

// EXPORT THE CLASS
export default App;