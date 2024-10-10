document.querySelector('.registration-form').addEventListener('submit', function(event) {
    const termsCheckbox = document.getElementById('terms');
    
    if (!termsCheckbox.checked) {
      alert("Anda mesti bersetuju dengan syarat dan peraturan!");
      event.preventDefault();
    }
  });
  