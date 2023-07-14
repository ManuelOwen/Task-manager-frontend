

const Reducer = (state, action) => {
      switch (action.type) {
           
  
          case "Comments":
              return {
                  
                navigator : action.payload 
                           
              } 
              case "Yourtasks":
                  return {
                    navigator: action.payload
                   
                  } 
        
          case "Calendar":
              return {
                navigator: action.payload
              }
              
          default:

              return state;
      }
  }
  
  export default Reducer;