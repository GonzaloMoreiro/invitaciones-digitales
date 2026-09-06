// Esta es la página que ve el invitado cuando abre el link.
// Por ahora los datos están "hardcodeados" (fijos en el código),
// mañana los vamos a traer desde Supabase.

export default function InvitacionPage() {
  // Estos datos en el futuro van a venir de la base de datos.
  // Los dejamos acá arriba, como si fueran variables, para
  // que sea fácil ver qué datos necesita la página.
  const evento = {
    titulo: "María & Juan",
    fecha: "15 de Noviembre, 2026",
    hora: "19:00 hs",
    lugar: "Salón de Eventos El Jardín",
  };

  return (
    <main style={{ textAlign: "center", padding: "40px 20px" }}>
      {/* Todo lo que está entre <main> y </main> es el contenido
          visible de la página. Esto es JSX: se ve como HTML,
          pero en realidad es JavaScript por debajo. */}

      <h1>{evento.titulo}</h1>
      {/* Las llaves { } son la forma de "meter" una variable
          de JavaScript adentro del HTML. Sin las llaves,
          "evento.titulo" se mostraría como texto literal. */}

      <p>{evento.fecha} — {evento.hora}</p>
      <p>{evento.lugar}</p>
    </main>
  );
}
