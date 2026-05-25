import React from "react";
import Title from "../components/Title";

// Transformed data to fit the fine-dining spice concept
const experiences = [
  {
    title: "La Table du Chef",
    desc: "Vivez le coup de feu aux premières loges. Un menu dégustation exclusif servi et commenté directement par notre Chef.",
    icon: "👨‍🍳",
  },
  {
    title: "Voyage Sensoriel à l'Aveugle",
    desc: "Un dîner les yeux bandés où vos sens du goût et de l'odorat sont décuplés pour deviner les épices secrètes de nos plats.",
    icon: "👁️‍🗨️",
  },
  {
    title: "Atelier Mixologie Épicée",
    desc: "Apprenez l'art des cocktails et mocktails infusés. Créez vos propres sirops épicés sous la coupe de notre chef barman.",
    icon: "🍹",
  },
  {
    title: "Masterclass : L'Art du Safran",
    desc: "Découvrez l'histoire, la culture et l'utilisation de l'or rouge à travers un cours de cuisine interactif en petit comité.",
    icon: "🌺",
  },
  {
    title: "Accords Mets & Thés",
    desc: "Une alternative fascinante à l'oenologie. Découvrez comment les tanins du thé subliment la chaleur de nos épices.",
    icon: "🫖",
  },
  {
    title: "Le Marché de l'Épicier",
    desc: "Repartez avec un bout de L'Univers Épik. Visitez notre corner épicerie fine et composez votre propre mélange d'épices sur mesure.",
    icon: "⚖️",
  },
];

const Experience = () => {
  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-32 bg-[#FAF9F6] min-h-screen">
      
      <Title
        font="playfair"
        title="L'Art des Épices"
        subTitle="Allez au-delà de l'assiette. Découvrez nos expériences immersives conçues pour éveiller vos sens et votre curiosité culinaire."
      />

      <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group bg-white shadow-sm rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 relative overflow-hidden"
          >
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -z-10 group-hover:bg-[#C53030]/10 transition-colors duration-300"></div>

            <div className="text-4xl mb-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm border border-gray-50 group-hover:scale-110 transition-transform duration-300">
                {exp.icon}
            </div>

            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-3 group-hover:text-[#C53030] transition-colors">
                {exp.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
                {exp.desc}
            </p>
            
            {/* Optional call to action link */}
            <div className="mt-6 flex items-center gap-2 text-[#C53030] font-bold text-xs uppercase tracking-widest cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Découvrir l'expérience <span className="text-lg">→</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Experience;