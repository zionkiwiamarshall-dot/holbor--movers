document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;

  alert(Thank you ${name}! Your ${service} move has been booked for ${date}. We’ll contact you soon at ${phone}.);

  this.reset();
});
const tooltip = document.getElementById('tooltip');
const counties = document.querySelectorAll('.county');

counties.forEach(county => {
  county.addEventListener('mousemove', (e) => {
    tooltip.style.display = 'block';
    tooltip.style.left = e.pageX + 10 + 'px';
    tooltip.style.top = e.pageY + 10 + 'px';
    tooltip.innerText = county.id.charAt(0).toUpperCase() + county.id.slice(1);
  });

  county.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });
});
