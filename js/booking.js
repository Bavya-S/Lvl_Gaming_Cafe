// ===================== BOOKING / WHATSAPP FORM =====================
function submitBooking(){
  const name=document.getElementById('bookName').value;
  const phone=document.getElementById('bookPhone').value;
  const console_=document.getElementById('bookConsole').value;
  const time=document.getElementById('bookTime').value;
  if(!phone){alert('Please enter your phone number');return;}
  const msg=`Hello LVL Gaming Café! I'd like to book a slot.%0A%0AName: ${name||'(not provided)'}%0APhone: ${phone}%0AConsole: ${console_||'Not specified'}%0APreferred Time: ${time||'Flexible'}%0A%0APlease confirm availability. Thank you!`;
  window.open(`https://wa.me/919962270902?text=${msg}`,'_blank');
}