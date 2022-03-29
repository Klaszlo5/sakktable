function init() {
  const kockanagysag = 50;
  const Felso = 50;
  const Also = 50;
  let ID = document.getElementById("Sakktablazat");
  context = ID.getContext("2d");
  for(let i=0; i<8; i++) {
    for(let j=0; j<8; j++) {
      context.fillStyle = ((i+j)%2==0) ? "yellow":"black";
      let elsoegyen = Felso + j*kockanagysag;
      let masodikegyen = Also + i*kockanagysag;
      context.fillRect(elsoegyen, masodikegyen, kockanagysag, kockanagysag);
    }
  }
  context.strokeStyle = "black";
  context.strokeRect(Felso, Also, kockanagysag*8, kockanagysag*8)
} 
