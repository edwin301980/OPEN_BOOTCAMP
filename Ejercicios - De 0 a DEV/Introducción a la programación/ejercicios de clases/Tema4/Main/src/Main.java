public class Main {
    public static void main(String[] args) {
        int acumulador = -3;
        while (acumulador <= 3) {
                if (acumulador < 0) {
                    System.out.println("Numero es Negativo:" + acumulador);
                    acumulador++;
                }
                else if (acumulador == 0){
                    System.out.println("Numero es neutro:" + acumulador);
                    acumulador++;
                }
                else if (acumulador <= 3){
                    System.out.println("Numero es Positivo:" + acumulador);
                    acumulador++;
                }
        }
        do {
           System.out.println("Numero es >  " + acumulador);
        } while (acumulador == 3);

        for (int acumulado = -3; acumulado <= 3; acumulado++) {
            if (acumulado < 0) {
                System.out.println("Negativo:" + acumulado);
            }
            else if (acumulado == 0){
                System.out.println("neutro:" + acumulado);
            }
            else if (acumulado <= 3){
                System.out.println("Positivo:" + acumulado);
            }
        }   
        
        String estacion = "Invierno";
        switch (estacion){
            case "Otoño":
                System.out.println("Estacion del año: " + estacion);
                break;
            case "Verano":
                System.out.println("Estacion del año: " + estacion);
                break;
            case "Invierno":
                System.out.println("Estacion del año: " + estacion);
                break;
            case "Primavera":
                System.out.println("Estacion del año: " + estacion);
                break;
            default:
                System.out.println("Error: No existe estacion del año");
        }

    }
}

