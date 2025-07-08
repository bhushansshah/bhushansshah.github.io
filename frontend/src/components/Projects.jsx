export default function Projects() {
  const projects = [
    {
      title: 'Decoding News Bias: Multi Bias Detection in News Articles',
      description: 'I developed an approach which leverages LLMs for data annotations and uses pretrained models to detect multiple, nuanced forms of bias in news articles—expanding beyond traditional bias detection approaches. Through this work, I deepened my expertise in natural language processing, model evaluation, and dataset curation, while contributing to the broader goal of building more trustworthy and socially responsible AI systems.'
    },
    {
      title: 'PrajaPoshan',
      description: 'In this Generative AI-driven project, developed in collaboration with IBM, we built an application that provides health scores for food products by analyzing ingredient and nutrient content. The system uses embeddings and a Retrieval-Augmented Generation (RAG) framework to enhance its reasoning capabilities. Users can upload product label images, from which OCR and Vision models extract ingredient and nutrient details for scoring.We also conducted a comparative analysis of multiple LLMs—GPT-4o, Mistral Large 2, Gemini Flash 2, and LLaMA 3.1 405B—evaluating their performance across three context levels: (1) without additional context, (2) with added ingredient context, and (3) with both ingredient and nutrient context.'
    },
    {
      title: 'Smart Inboxer',
      description: 'Smart Inboxer is an AI-powered assistant that uses LLMs to prioritize tasks and classify emails based on urgency and importance. Integrated with Gmail, it auto-labels emails based on user-defined categories, identifies unnecessary subscription emails with unsubscribe options, and provides a daily summary of important messages. Smart Inboxer helps reduce inbox clutter and streamline task management, keeping users organized and focused.'
    },
    {
      title: 'Optimizing Insertion Operator in Dynamic Ridesharing',
      description: 'This project provides an implementation of a research paper to optimie the insertion operator in dynamic ridesharing applications. Implementing the three algorithms suggested by the paper, each more efficient than the previous, allowed me to apply advanced techniques such as Dynamic Programming and segment tree data structures to reduce time complexity, enhance scalability, and make the ridesharing systems more capable of handling large user requests in real-time.'
    }
  ];

  return (
    <section id="projects" className="mb-12">
      <h2 className="text-sky-500 text-2xl font-bold mb-4">Projects</h2>
      {projects.map((proj, idx) => (
        <div key={idx} className="mb-4">
          <div className="font-bold text-slate-800">{proj.title}</div>
          <p>{proj.description}</p>
        </div>
      ))}
    </section>
  );
}