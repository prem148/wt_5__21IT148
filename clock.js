function d(){
    var currentdate = new Date();
    let disp =  document.getElementById('disp');
    disp.innerText = currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
}
setInterval(d, 1000);