const scriptURL = 'https://script.google.com/macros/s/AKfycbymOGTKjXe8ID_TgVMuJPmxGOuSqW2hs3T054ZdxN3DCtpSu4NEK7tjc8E9GfljU1T-vA/exec';


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      alert("Thank you! Your form has been submitted successfully.");
      window.location.reload();
    })
    .catch(error => {
      console.error('Error!', error.message);
    });
});
//url :https://script.google.com/macros/s/AKfycby2BYyIuY-IWW76dtD67DC6IBrxlbiXj3pFw7KRCsPv_hm2iI96Of52eh_QvzlVjimu/exec
// depl id : AKfycby2BYyIuY-IWW76dtD67DC6IBrxlbiXj3pFw7KRCsPv_hm2iI96Of52eh_QvzlVjimu