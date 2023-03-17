const initialState = "";

const tellDirection=(state=initialState,action)=>{

    switch(action.type){
  
        
        case "EAST": return "Moving towards East";
        case "WEST": return "Moving towards West";
        case "NORTH": return "Moving towards North";
        case "SOUTH": return "Moving towards South";
        
        default : return state;
        

    }
}
export default tellDirection;