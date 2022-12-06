export const api = async (req, res) => {
  res.send('PDT API endpoint');
};

export const signUp = async (req, res) => {
  res.send('sign up endpoint.');
};
//destructure form information from the req.body
//first name, last name, email, password, confirmPassword
//and any user details we need to sign up
//check if user exists in db, if so send response 422 and an error message.
//check if passwords match
//if passwords match, use bcrypt to hash
//create the user in the db
//sign json webtoken
//send back to client token, userid also as cookie.
