import Link from "next/link";

export const metadata = {
  title: "Como reduzir o lixo em casa",
  description: "Dicas práticas para reduzir o lixo em casa.",
};

export default function ReduzirLixo() {
  return (
    <div className="home-container">
      <h2>Como reduzir o lixo em casa</h2>
      <p>Reduzir o lixo é fundamental para proteger o meio ambiente. Algumas dicas:</p>
      <ul>
        <li>Use sacolas reutilizáveis ao fazer compras.</li>
        <li>Evite produtos descartáveis.</li>
        <li>Recicle papel, plástico e vidro sempre que possível.</li>
        <li>Composte restos de comida para reduzir o lixo orgânico.</li>
      </ul>
    </div>
  );
}
