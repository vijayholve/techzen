const scriptURL = 'https://docs.google.com/spreadsheets/d/1-tyZYNI6ayS9vGEzFuBbbbSFEa1W8gXuK6_gRBe--Y4/edit?usp=sharing'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
//url :https://script.google.com/macros/s/AKfycby2BYyIuY-IWW76dtD67DC6IBrxlbiXj3pFw7KRCsPv_hm2iI96Of52eh_QvzlVjimu/exec
// depAKfycby2BYyIuY-IWW76dtD67DC6IBrxlbiXj3pFw7KRCsPv_hm2iI96Of52eh_QvzlVjimu