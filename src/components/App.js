// import React, { useState } from "react";
// import "../styles/App.css";
// const App = () => {
//   //code here
//   const [ok, setok] = useState("OFF");
//   const [No, setNo] = useState("ON");
//   // const handleClick = (e) => {
//   //   if (e.target.id === "btn1") {
//   //     setok("NO");
//   //     setNo("OFF");
//   //   } else {
//   //     setok("OFF");
//   //     setNo("ON");
//   //   }
//   // };
// function handleClick(e){
//   if (e.target.id === "btn1") {
//     //     setok("NO");
//     //     setNo("OFF");
//     //   } else {
//     //     setok("OFF");
//     //     setNo("ON");
//     //   }
// }
//   return (
//     <div className="App">
//       <button id="btn1" onClick={(e) => handleClick(e)}>
//         {ok}
//       </button>
//       <br />
//       <br />
//       <button id="btn2" onClick={(e) => handleClick(e)}>
//         {No}
//       </button>
//     </div>
//   );
// };

// export default App;



import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  //code here

  const [Data1, setData1] = useState("OFF");
  const [Data2, setData2] = useState("ON");

  function handleClick(event) {
    if (event.target.id === "btn1") {
      setData1("ON");
      setData2("OFF");
    } else {
      setData1("OFF");
      setData2("ON");
    }
  }

  return (
    <div className="App">
      <button id="btn1" onClick={(e) => handleClick(e)}>
        {Data1}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={(e) => handleClick(e)}>
        {Data2}
      </button>
    </div>
  );
};

export default App;

