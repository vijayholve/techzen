const scriptURL = 'https://script.google.com/macros/s/AKfycby2BYyIuY-IWW76dtD67DC6IBrxlbiXj3pFw7KRCsPv_hm2iI96Of52eh_QvzlVjimu/exec';


          name="" method="post">
const form = document.forms['']


form.addEventListener('submit', e => {
console.log("success")
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))

  return ContentService
  .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
  .setMimeType(ContentService.MimeType.JSON)
  .setHeader('Access-Control-Allow-Origin', '*');

})
//url :https://script.google.com/macros/s/AKfycby2BYyIuY-IWW76dtD67DC6IBrxlbiXj3pFw7KRCsPv_hm2iI96Of52eh_QvzlVjimu/exec
// depl id : AKfycby2BYyIuY-IWW76dtD67DC6IBrxlbiXj3pFw7KRCsPv_hm2iI96Of52eh_QvzlVjimu