export function Settings({steps,row}){ 
  let scale=getRootCssVariables()["--scale"];
  let offset=(13-steps)*(32*scale);
  document.body.style.setProperty("--row",row);
  document.body.style.setProperty("--end-position",`${(416*scale)-offset}px`);
  document.body.style.setProperty("--step-count",steps);
}
export function Controller() {

  return( 
    <>
      <div className="Controller">
        <div className="Button" onClick={()=>Settings(Animation["Attack"])}> Attack </div>
        <div className="Button" onClick={()=>Settings(Animation["Jump"])}> Jump </div>
        <div className="Button" onClick={()=>Settings(Animation["Still"])}> Still </div>
        <div className="Button" onClick={()=>Settings(Animation["Hurt"])}> Hurt </div>
        <div className="Button" onClick={()=>Settings(Animation["Die"])}> Die </div>
        <div className="Button" onClick={()=>Settings(Animation["Move"])}> Move </div>
      </div>
    </>
  );
}
//function to get css rooot variables 
export function getRootCssVariables(){
  return {
    "--row":getComputedStyle(document.body).getPropertyValue("--row"),
    "--scale":getComputedStyle(document.body).getPropertyValue("--scale"),
    "--end-position":getComputedStyle(document.body).getPropertyValue("--end-position"),
    "--step-count":getComputedStyle(document.body).getPropertyValue("--step-count"),
  };
}
export const Animation={
  "Still" : { "row":0,  "steps":13, },
  "Move"  : { "row":1,  "steps":8,  },
  "Attack": { "row":2,  "steps":10, },
  "Slice" : { "row":3,  "steps":9,  },
  "Poke"  : { "row":4,  "steps":9,  },
  "Jump"  : { "row":5,  "steps":6,  },
  "Hurt"  : { "row":6,  "steps":4,  },
  "Die"   : { "row":7,  "steps":7,  },
}