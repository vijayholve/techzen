const scriptURL = 'https://script.google.com/macros/s/AKfycbyCWmoWS3ur2EKOTGlZrpS0vM-LZ7on8a9M3QwYeWcCUKkldpQW0JohYvBOMD_K8xhY/exec';


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