const passwordInput = document.querySelector(".password-field input");
const eyeIcon = document.querySelector(".eye-icon");
const circleIcon = document.querySelectorAll(".circle-icon");

passwordInput.addEventListener("keyup", function()
{
  const password = this.value;
  if(password.length >= 8) circleIcon[0].src = "../icons/check-solid.svg";
  else circleIcon[0].src = "../icons/circle-solid.svg";

  if(/[a-z]/.test(password)) circleIcon[1].src = "../icons/check-solid.svg";
  else circleIcon[1].src = "../icons/circle-solid.svg";

  if(/[A-Z]/.test(password)) circleIcon[2].src = "../icons/check-solid.svg";
  else circleIcon[2].src = "../icons/circle-solid.svg";

  function hasSpecialCharacter(password)
  {
    const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', ':', ';', '<', '>', '.', ',', '?', '/', '|', '\\', '\'', '\"', '`', '~'];
    for(let i = 0; i < password.length; i++)
    {
      if(specialCharacters.includes(password[i])) return true;
    }
    return false;
  }
  if(hasSpecialCharacter(password)) circleIcon[3].src = "../icons/check-solid.svg";
  else circleIcon[3].src = "../icons/circle-solid.svg";

  if(/[0-9]/.test(password)) circleIcon[4].src = "../icons/check-solid.svg";
  else circleIcon[4].src = "../icons/circle-solid.svg";
});

eyeIcon.addEventListener("click", () => 
{
  if(passwordInput.type === "password")
  {
    passwordInput.type = "text";
    eyeIcon.src = "../icons/eye-slash-solid.svg";
  }
  else
  {
    passwordInput.type = "password";
    eyeIcon.src = "../icons/eye-solid.svg";
  }
});