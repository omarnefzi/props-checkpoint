import CardProfile from "./profle/ProfileComponent";


function App() {
  const printAge=(msg)=>{
    alert(`after five years your age will be ${msg + 5}`)
  }


  return (
    <div className="App">
<CardProfile name='Omar Nefzi' age= '24' country='Tunisia' img='imgs/img.jpg' handleAge={printAge}  />
    </div>
  );
}

export default App;
