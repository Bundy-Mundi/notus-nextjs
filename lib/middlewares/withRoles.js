/* This is an example of protecting some specific routes by their users roles */
/* So to use this middleware,  */
import errorMessages from "../ErrorMessages";
const withRoles = (handler, ...roles) => { // roles is going to be an array of strings
    return async(req, res) => {
        if(roles.includes(req.session.user.role)){ // assuming that we are using a session based authentication
            return res.status(403).json({
                success:false,
                message: errorMessages.noPermission
            })
        }
    }
}

export default withRoles;