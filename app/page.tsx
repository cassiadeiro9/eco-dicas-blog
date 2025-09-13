export default function Home() {
  const posts = [
    { id: 1, title: 'Como reduzir o lixo em casa', desc: 'Dicas práticas para diminuir seu impacto ambiental.' },
    { id: 2, title: 'Plantas para ambientes internos', desc: 'Escolha plantas que purificam o ar da sua casa.' },
    { id: 3, title: 'Economia de água', desc: 'Técnicas simples para usar água de forma consciente.' },
  ];

  return (
    <div className="home-container">
      <section className="intro max-w-4xl mx-auto text-justify px-6 py-10">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Bem-vindo ao Blog EcoDicas Sustentáveis
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          Conteúdos sobre meio ambiente, sustentabilidade e dicas para viver de forma mais consciente. 
          Aqui você encontra dicas simples e práticas para reduzir o impacto ambiental no dia a dia. 
          Nosso objetivo é mostrar que pequenas mudanças — como economizar água, reduzir o lixo e escolher 
          alternativas mais conscientes — podem transformar seu estilo de vida e contribuir para um futuro mais sustentável.
        </p>
      </section>

      <section className="posts grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {posts.map(post => (
          <div key={post.id} className="card bg-white p-6 rounded-2xl shadow-md text-center">
            <h3 className="text-xl font-semibold text-green-700 mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.desc}</p>
            <button className="btn bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition">
              Ler mais
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
