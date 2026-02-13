import GsapFrom from "./GsapFrom.jsx";
import GsapStagger from "./GsapStagger.jsx";
import GsapTimeline from "./GsapTimeline.jsx";


const App = () =>{
    return(
      <>
        <main className="bg-slate-900 min-h-screen lg:px-24 xl:px-48">
            <GsapFrom/>
            <GsapStagger/>
            <GsapTimeline/>
        </main>
      </>
  )
}

export default App;