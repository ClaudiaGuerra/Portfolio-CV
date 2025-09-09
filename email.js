const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.querySelector('#from_name').value;
    const email = document.querySelector('#from_email').value;
    const message = document.querySelector('#message').value;
    const emailValidation = /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:(?:\\[\x00-\x7f]|[^"\\])*)")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[A-Za-z]{2,}|\[(?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d)(?:\.(?:25[0-5]|2[0-4]\d|[01]?\d?\d)){3}|[A-Za-z0-9-]*[A-Za-z0-9]:(?:\\[\x00-\x7f]|[^\\\]])+)\])$/;


    /* Validación 1: No inputs vacíos*/
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      alert('One or two fields are empty');
      return;
    }
    /* Validación 2: Email válido */
    if (!emailValidation.test(email)) {
      alert('Invalid email, please enter a valid email :)');
      return;
    }

    btn.value = 'Sending...';

    const serviceID = 'ClaudiaGuerraBakWebsite';
    const templateID = 'template_n6b4stn';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
      }, (err) => {
        console.error('EmailJS error:', err); // en lugar de console.log
        btn.value = 'Send Email';
        alert(err.text || err.message || 'Oops! Something went wrong. Please contact me at claudiagbak@gmail.com'); // en lugar de JSON.stringify(err)
      });
  });