export const Validation = (email, password, name) => {
  // eslint-disable-next-line no-useless-escape
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);
  if (name != null && name.length < 3) {
    return "Name should be atleast 3 characters";
  }
  if (!isEmailValid) {
    return "Please enter a valid email address";
  }
  if (!isPasswordValid) {
    return "Invalid Password";
  }
  return null;
};
