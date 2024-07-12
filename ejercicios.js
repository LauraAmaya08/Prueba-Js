class celular {
    constructor(color, peso, resolucionPantalla, resolucionCamara, ram) {
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = resolucionPantalla;
        this.resolucionCamara = resolucionCamara;
        this.ram = ram;
        this.on = false;
    }
    presionarBotonEncendido() {
        if (this.on == false) {
            alert("encendiendo");
            this.on = true;
        }
        else {
            alert("Apagando")
            this.on = false
        }
    }
    reiniciar(){
        if (this.on == true){
            alert("Reinciando telefono...")
        } 
        else {alert("Telefono apagado")}
    }
}

class gamaAlta extends celular{
    constructor(color,)
}

telefono1 = new celular ("rojo", "100g", "10'", "full HD", "64GB")

telefono1.presionarBotonEncendido()
telefono1.reiniciar()
