
// Example usage (assuming your form is within the <addUser> component)
const addUserComponent = document.querySelector('addUser');
const form = addUserComponent.querySelector('form'); // Or however you select your form
if (form) {
  setupAddUserFormListener(form);
}