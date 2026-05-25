import React from "react";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

// Transformed from regions/months to the restaurant's core philosophies
const philosophies = [
  {
    title: "L'Origine des Saveurs",
    subtitle: "La quête de l'excellence",
    sections: [
      {
        name: "Sélection Haute Couture",
        description: "Nous parcourons le monde et les terroirs pour dénicher des épices rares, cultivées dans le respect de la terre. Chaque grain de poivre, chaque pistil de safran est choisi pour sa pureté absolue et son profil aromatique unique.",
        image: "/spice-market.jpg", // Note: Add a nice spice market or ingredient photo to your public folder!
      },
      {
        name: "L'Alchimie Culinaire",
        description: "Dans nos cuisines, l'épice n'est pas un simple assaisonnement, c'est l'âme du plat. Notre brigade travaille chaque ingrédient avec une précision chirurgicale pour révéler des notes insoupçonnées et créer des accords parfaits.",
        image: "/kitchen-prep.jpg", // Note: Add a photo of a chef cooking or plating
      },
    ],
  },
  {
    title: "L'Expérience Sensorielle",
    subtitle: "Au-delà de l'assiette",
    sections: [
      {
        name: "Un Cadre Intimiste",
        description: "L'Univers Épik est conçu comme un écrin. Lumières tamisées, matériaux nobles et acoustique feutrée créent une atmosphère élégante où le temps s'arrête et où seul le goût compte.",
        image: "/restaurant-interior.jpg", // Note: Add a photo of a moody, elegant dining room
      },
      {
        name: "Service Sur-Mesure",
        description: "Notre équipe en salle orchestre votre repas comme un ballet. Chaque plat est présenté avec son histoire, ses origines et les secrets de sa conception, pour une immersion totale dans notre univers.",
        image: "/fine-dining-service.jpg", // Note: Add a photo of wine pouring or elegant table service
      },
    ],
  },
];

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col pt-28 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32 bg-[#FAF9F6] min-h-screen">

      {/* Page Title */}
      <Title
        title="Notre Histoire"
        subTitle="L'Univers Épik : L'Élégance de la Gastronomie Épicée"
        align="left"
        font="playfair"
      />

      {/* Description */}
      <div className="mt-6 max-w-3xl text-gray-600 leading-relaxed text-base md:text-lg">
        <p>
          Né d'une passion pour la haute gastronomie et la richesse des terroirs, 
          <span className="font-bold text-gray-900"> L'Univers Épik</span> repousse les frontières de l'art culinaire.
        </p>
        <p className="mt-4">
          Ici, l'intelligence de la création rencontre la tradition. Nous concevons chaque menu comme une œuvre d'art 
          où l'épice dicte le rythme, l'émotion et le souvenir indélébile de votre dégustation.
        </p>
      </div>

      {/* Philosophies Section (Formerly Themes) */}
      <div className="mt-20">
        {philosophies.map((philosophy, index) => (
          <div key={index} className="mb-24">

            {/* Theme Header */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900">
                {philosophy.title}
              </h2>
              <p className="text-sm text-[#C53030] font-bold mt-2 tracking-widest uppercase">
                {philosophy.subtitle}
              </p>
            </div>

            {/* Sections (Formerly Regions) */}
            {philosophy.sections.map((section, secIndex) => (
              <div
                key={secIndex}
                className={`flex flex-col md:flex-row items-center gap-10 py-12 border-b border-gray-200 last:border-0 ${
                  secIndex % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >

                {/* Image with Hover Zoom */}
                <div className="md:w-1/2 w-full overflow-hidden rounded-xl shadow-md group">
                    <img
                    src={section.image}
                    alt={section.name}
                    className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                </div>

                {/* Text Content */}
                <div className="md:w-1/2 flex flex-col gap-4 text-left">

                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                    Notre Vision
                  </p>

                  <h3 className="text-3xl font-playfair font-bold text-gray-800">
                    {section.name}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    {section.description}
                  </p>

                  {/* Updated Navigation Link */}
                  <button
                    onClick={() => {
                      navigate("/menu");
                      scrollTo(0, 0);
                    }}
                    className="mt-6 w-fit text-[#C53030] hover:text-red-800 font-bold text-sm tracking-wide transition-colors border-b-2 border-transparent hover:border-[#C53030] pb-1"
                  >
                    Découvrir la Carte →
                  </button>

                </div>
              </div>
            ))}

          </div>
        ))}

      </div>
    </div>
  );
};

export default AboutUs;