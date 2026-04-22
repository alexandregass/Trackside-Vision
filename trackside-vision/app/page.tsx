"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type Lang = "fr" | "en";


export default function TracksideVisionSite() {
  const [lang, setLang] = React.useState<Lang>("fr");
  const [page, setPage] = React.useState("home");

  const content = {
    fr: {
      nav: {
        home: "Accueil",
        engineering: "Engineering",
        simracing: "Simracing",
        projects: "Projets",
        contact: "Contact"
      },
      heroTitle: "Trackside Vision",
      heroSubtitle: "Ingénierie de performance pour le sport automobile",
      engineeringTitle: "Services d’ingénierie",
      engineeringText:
        "Support en ingénierie de course pour pilotes et équipes en GT et endurance : analyse de données, stratégie, optimisation performance et coaching.",
      simTitle: "Division Simracing",
      simText:
        "Développement d’une activité simracing basée sur des méthodes d’ingénierie issues du sport automobile réel.",
      projectsTitle: "Projets & Études de cas",
      projectsText:
        "Analyses de performance, optimisation de stratégie, amélioration de la constance et développement pilote.",
      contactTitle: "Contact",
      contactText:
        "Disponible pour missions freelance en France et à l’international."
    },
    en: {
      nav: {
        home: "Home",
        engineering: "Engineering",
        simracing: "Simracing",
        projects: "Projects",
        contact: "Contact"
      },
      heroTitle: "Trackside Vision",
      heroSubtitle: "Performance engineering for motorsport",
      engineeringTitle: "Engineering Services",
      engineeringText:
        "Race engineering support for drivers and teams in GT and endurance racing: data analysis, strategy, performance optimisation and coaching.",
      simTitle: "Simracing Division",
      simText:
        "Development of a simracing activity based on real-world motorsport engineering methods.",
      projectsTitle: "Projects & Case Studies",
      projectsText:
        "Performance analysis, strategy optimisation, consistency improvement and driver development.",
      contactTitle: "Contact",
      contactText:
        "Available for freelance missions in France and internationally."
    }
  };

  const renderPage = () => {
    switch (page) {
      case "engineering":
        return (
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <h1 className="text-2xl font-bold">
                {content[lang].engineeringTitle}
              </h1>
              <p className="mt-4 text-gray-400">
                {content[lang].engineeringText}
              </p>
            </CardContent>
          </Card>
        );

      case "simracing":
        return (
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <h1 className="text-2xl font-bold">
                {content[lang].simTitle}
              </h1>
              <p className="mt-4 text-gray-400">
                {content[lang].simText}
              </p>
            </CardContent>
          </Card>
        );

      case "projects":
        return (
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <h1 className="text-2xl font-bold">
                {content[lang].projectsTitle}
              </h1>
              <p className="mt-4 text-gray-400">
                {content[lang].projectsText}
              </p>
            </CardContent>
          </Card>
        );

      case "contact":
        return (
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6 space-y-4">
              <h1 className="text-2xl font-bold">
                {content[lang].contactTitle}
              </h1>
              <p className="text-gray-400">
                {content[lang].contactText}
              </p>
              <input
                className="w-full p-3 bg-zinc-800 rounded"
                placeholder="Nom / Name"
              />
              <input
                className="w-full p-3 bg-zinc-800 rounded"
                placeholder="Email"
              />
              <textarea
                className="w-full p-3 bg-zinc-800 rounded"
                placeholder="Message"
              />
              <Button className="w-full">Envoyer / Send</Button>
            </CardContent>
          </Card>
        );

      default:
        return (
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold"
            >
              {content[lang].heroTitle}
            </motion.h1>
            <p className="mt-4 text-lg text-gray-300">
              {content[lang].heroSubtitle}
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-800">
        <div className="font-bold text-lg">Trackside Vision</div>

        <div className="flex gap-4">
          {Object.entries(content[lang].nav).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setPage(key)}
              className="hover:text-gray-300"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setLang("fr")}
            className="px-3 py-1 bg-zinc-800 rounded"
          >
            FR
          </button>
          <button
            onClick={() => setLang("en")}
            className="px-3 py-1 bg-zinc-800 rounded"
          >
            EN
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="py-20 px-6">{renderPage()}</div>

      {/* Footer */}
      <div className="text-center py-6 text-gray-500 text-sm border-t border-zinc-800">
        © {new Date().getFullYear()} Trackside Vision
      </div>
    </div>
  );
}
