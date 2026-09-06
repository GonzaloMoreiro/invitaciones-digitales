export default function InvitacionPage() {
  const evento = {
    titulo: "María & Juan",
    fecha: "15 de Noviembre, 2026",
    hora: "19:00 hs",
    lugar: "Salón de Eventos El Jardín",
    mostrarGaleria: true,
    mostrarHistoria: true,
    historia:
      "Nos conocimos hace 5 años en la facultad, y desde entonces no nos separamos más.",
    fotos: [
      "https://placehold.co/300x300?text=Foto+1",
      "https://placehold.co/300x300?text=Foto+2",
      "https://placehold.co/300x300?text=Foto+3",
    ],
  };

  return (
    <main style={{ textAlign: "center", padding: "40px 20px" }}>
      <h1>{evento.titulo}</h1>
      <p>
        {evento.fecha} — {evento.hora}
      </p>
      <p>{evento.lugar}</p>

      {evento.mostrarHistoria && (
        <section style={{ marginTop: 32 }}>
          <h2>Nuestra historia</h2>
          <p>{evento.historia}</p>
        </section>
      )}

      {evento.mostrarGaleria && (
        <section style={{ marginTop: 32 }}>
          <h2>Galería</h2>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {evento.fotos.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Foto ${index + 1}`}
                width={150}
                height={150}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
