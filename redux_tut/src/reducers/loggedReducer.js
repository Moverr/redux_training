 
const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return true;
            break;

        case "SIGNOUT":
            return false
            break;

        default:
            return state;
            break;

    }
}



export default loggedReducer;