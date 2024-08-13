import Navbar from "./Components/Navbar/Navbar";
import JobList from "./Components/Navbar/JobListings/JobList";
import SearchBar from "./Components/Navbar/SearchBar/SearchBar";

function App() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <JobList />
    </>
  );
}

export default App;
