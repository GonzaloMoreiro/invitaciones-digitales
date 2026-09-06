// Next.js EXIGE este archivo en app/layout.tsx.
// Es el "molde" que envuelve a todas las páginas del sitio
// (el <html> y <body> van acá, una sola vez).

export const metadata = {
  title: "Invitación digital",
  description: "Estás invitado/a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // "children" es la página específica que se está mostrando
  // (por ejemplo, nuestra invitación). React la inserta acá adentro.
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
