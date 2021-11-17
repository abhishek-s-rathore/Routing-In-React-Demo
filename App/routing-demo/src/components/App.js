import React from "react";
import Header from "./Header";
import Aside from "./Aside";
import Main from  "./Main";


class  App extends React.Component{
    constructor(props){
      super(props);
}
 render(){
     return(
      <>
       <Header />
       <div className='flex justify-between align-center'>
           <Aside />
           <Main />
       </div>
      </>

     );
 }

}


export default App;