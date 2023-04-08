public class Main {
    public static void main(String[] args) {
        Persona persona = new Persona();
        persona.setNombre("Edwin");
        System.out.println("Mi nombre es " + persona.getNombre());
        persona.setEdad(42);
        System.out.println("Tengo " + persona.getEdad() + " años");
        persona.setTelefono("0963905845");
        System.out.println("Mi teléfono es " + persona.getTelefono());
    }
}

class Persona {
    private String nombre;
    private int edad;
    private String telefono;

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public void setEdad(int edad){
        this.edad = edad;
    }

    public int getEdad() {
        return edad;
    }

    public void setTelefono(String telefono){
        this.telefono = telefono;
    }

    public String getTelefono() {
        return telefono;
    }
}