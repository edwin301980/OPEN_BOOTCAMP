public class Main {
    public static void main(String[] args) {
        
        Persona persona = new Persona();
        persona.edad = 42;
        persona.nombre = "Edwin";
        persona.telefono = "0963905849";

        System.out.println("edad : "+ persona.edad + "  nombre :" + persona.nombre + "  telefono :"+ persona.telefono);

        Cliente cliente  = new Cliente();
        cliente.credito = 200;

        System.out.println("credito :"+ cliente.credito);

        Trabajador trabajador = new Trabajador();
        trabajador.salario = 500;

        System.out.println("salario :"+ trabajador.salario);

    }
}

class Persona {
    int edad;
    String nombre;
    String telefono;
    
}

class Cliente extends Persona{
    double credito;
}

class Trabajador extends Persona{
    int salario;
}
