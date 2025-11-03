document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;

  alert(Thank you ${name}! Your ${service} move has been booked for ${date}. We’ll contact you soon at ${phone}.);

  this.reset();
});
