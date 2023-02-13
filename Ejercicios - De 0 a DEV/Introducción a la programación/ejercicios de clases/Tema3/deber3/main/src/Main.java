public class Main {
    public static void main(String[] args) {
        int resultado = 0;
        resultado = suma(10, 20, 30);

        Coche miCoche = new Coche();
        miCoche.sumpuerta();
        miCoche.sumpuerta();
        System.out.println("El numero de puertas es: " + miCoche.numpuertas);
        System.out.println(resultado);

    }

    public static int suma(int a, int b, int c){
        return a + b + c;
    }

}

class Coche{
    int numpuertas = 4;

    public void sumpuerta() {
        this.numpuertas++;
    }
}