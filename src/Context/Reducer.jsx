

const Reducer = (state, action) => {
      switch (action.type) {
           
  
          case "Previoustasks":
              return {
                  
                navigator : action.payload 
                           
              } 
              case "Pendingtask":
                  return {
                    navigator: action.payload
                   
                  } 
        
          case "Currenttask":
              return {
                navigator: action.payload
              }
              case "Nexttask":
              return {
                navigator: action.payload
              }
              case "Completedtask":
              return {
                navigator: action.payload
              }
          default:

              return state;
      }
  }
  
  export default Reducer;