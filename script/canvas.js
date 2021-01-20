function cargaContextoCanvas(idCanvas) {

    let elemento = document.getElementById(idCanvas);
    if (elemento && elemento.getContext) {
        let contexto = elemento.getContext('2d');
        if (contexto) {
            return contexto;
        }
        return false;
    }
}

window.onload = function () {

    let contexto = cargaContextoCanvas('micanvas');
    if (contexto) {

        let grd = contexto.createLinearGradient(0, 0, 0, 500);
        grd.addColorStop(0.001, "snow");
        grd.addColorStop(0.999, "#DEB887")

        //MONTAÑA.
        function montaña() {
            contexto.beginPath();
            contexto.moveTo(250, 250)
            contexto.lineTo(350, 50);
            contexto.lineTo(450, 250);
            contexto.lineTo(250, 250);
            contexto.stroke();
            contexto.fillStyle = grd;
            contexto.fill();
        }

        //variables de movimiento del muñeco
        let x = 0;
        let incx = 1;

        let y=0;
        let incy = -2;

        //muñeco
        function muñeco() {
            contexto.moveTo(275 + x, 245+y);
            contexto.lineTo(280 + x, 235+y);
            contexto.lineTo(285 + x, 245+y);
            contexto.moveTo(280 + x, 235+y);
            contexto.lineTo(280 + x, 223+y);
            contexto.lineTo(275 + x, 233+y);
            contexto.moveTo(280 + x, 223+y);
            contexto.lineTo(285 + x, 233+y);
            contexto.moveTo(285 + x, 218+y);
            contexto.arc(280 + x, 218+y, 5, 0, 2 * Math.PI);
            contexto.stroke();
            
            if (x > 150 && incx == 1 ) {
                incx=-1;
            }else if(x<0 && incx == -1){
                incx=1;
            }

            if (y < -75 && incy == -2 ) {
                incy= 2;
            }else if(y > 0 && incy == 2 ){
                incy= -2;
            }

            y += incy;
            x += incx;
        }

        function bucle() {
            contexto.clearRect(0, 0, 10000, 10000);
            montaña();
            muñeco();

        }


        let intervalo = setInterval(() => { bucle() }, 20);


    }
}