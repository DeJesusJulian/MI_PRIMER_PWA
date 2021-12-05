console.log('hola desde el js');
if(navigator.serviceWorker){
    console.log('Muy bien podemos jugar :v');
    navigator.serviceWorker.register('/sw.js')
}else{
    console.log('Lastima cambia de navegador');
}