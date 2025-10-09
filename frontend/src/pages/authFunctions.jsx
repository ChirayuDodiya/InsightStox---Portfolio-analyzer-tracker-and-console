function checkPasswordStrength(password) {
  let strength = 0;

  // Check for lowercase letters
  if (/[a-z]/.test(password)) strength++;

  // Check for uppercase letters
  if (/[A-Z]/.test(password)) strength++;

  // Check for digits
  if (/\d/.test(password)) strength++;

  // Check for special characters
  if (/[@$!%*?&]/.test(password)) strength++;

  // Determine strength
  if (strength === 4 && password.length >= 8) {
    return "Strong password";
  } else {
    return "Password Should be Strong";
  }
}
export { checkPasswordStrength };