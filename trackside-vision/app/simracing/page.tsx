"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../components/LanguageContext";

export default function SimracingPage() {

  const { lang } = useLanguage();

  const content = {
    fr: {
      heroText:
        "Construire une communauté simracing compétitive basée sur des méthodes d’ingénierie issues du sport automobile, l’analyse de performance et le développement structuré des pilotes.",

      supportedSimulations: "Simulations supportées",

      iracingText:
        "Plateforme de simulation professionnelle orientée compétition endurance, travail en équipe et développement de performance à l’aide de la télémétrie et des outils d’ingénierie.",

      lmuText:
        "Simulation orientée endurance alignée avec le sport automobile réel. Utilisée pour la préparation de course, l’entraînement stratégique et le développement de performance en GT et prototype.",

      servicesTitle: "Services Simracing",

      services: [
        {
          title: "Coaching pilote",
          text: "Feedback structuré et analyse de performance basée sur la télémétrie et les données de session.",
        },
        {
          title: "Optimisation setup",
          text: "Analyse des temps au tour et du pilotage pour identifier les améliorations de réglage.",
        },
        {
          title: "Stratégie de course",
          text: "Préparation et exécution des stratégies pour les courses d’endurance et les événements en équipe.",
        },
        {
          title: "Développement d’équipe",
          text: "Construction d’une structure d’équipe simracing professionnelle basée sur des processus d’ingénierie.",
        },
      ],

      communityTitle: "Rejoindre la communauté",

      communityText:
        "Nous construisons un environnement simracing structuré et compétitif axé sur la performance, le travail d’équipe et l’amélioration continue. Que vous soyez pilote, ingénieur ou passionné, vous êtes les bienvenus.",

      ctaTitle:
        "Intéressé pour rejoindre l’équipe ou collaborer ?",

      contact: "Nous contacter",
    },

    en: {
      heroText:
        "Building a competitive simracing community based on real motorsport engineering methods, performance analysis and structured driver development.",

      supportedSimulations: "Supported Simulations",

      iracingText:
        "Professional online racing platform focused on endurance competition, team racing and structured performance development using telemetry and race engineering tools.",

      lmuText:
        "Endurance-focused simulation aligned with real-world motorsport. Used for race preparation, strategy training and driver performance development in GT and prototype racing.",

      servicesTitle: "Simracing Services",

      services: [
        {
          title: "Driver Coaching",
          text: "Structured feedback and performance analysis using telemetry and session data.",
        },
        {
          title: "Setup Optimization",
          text: "Lap time and driving analysis to identify setup improvements.",
        },
        {
          title: "Race Strategy",
          text: "Preparation and execution of race strategies for endurance and team events.",
        },
        {
          title: "Team Development",
          text: "Building a professional simracing team structure based on engineering processes.",
        },
      ],

      communityTitle: "Join the Community",

      communityText:
        "We are building a structured and competitive simracing environment focused on performance, teamwork and continuous improvement. Whether you are a driver, engineer or racing enthusiast, you are welcome to join the team.",

      ctaTitle:
        "Interested in joining the team or collaborating ?",

      contact: "Contact us !",
    },
  };

  const t = content[lang];

  return (
    <main style={{ margin: "auto", fontFamily: "Arial, sans-serif" }}>

      {/* HERO */}
      <section
        style={{
          height: "120vh",
          backgroundImage: "url('/images/hero-simracing.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          position: "relative",
        }}
      >
        <div
          style={{
            background: "rgb(0, 0, 0,0.6)",
            padding: "20px",
            borderRadius: "12px",
            maxWidth: "600px",
            marginBottom: "540px"
          }}
        >
          <h1 style={{ fontSize: "45px", marginBottom: "5px" }}>
            Diocles Racing Team
          </h1>

          <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
            by Trackside Vision
          </h2>

          <p style={{ fontSize: "18px" }}>
            {t.heroText}
          </p>
        </div>
      </section>

      {/* SUPPORTED GAMES */}

      <section style={{ padding: "45px 20px" }}>
        <h2 style={{ marginBottom: "30px", textAlign: "center" }}>
          {t.supportedSimulations}
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
            maxWidth: "1100px",
            margin: "auto",
          }}
        >
          <div
            style={{
              padding: "30px",
              borderRadius: "12px",
              background: "#111",
              color: "white",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "15px" }}>
              <Image
                src="/images/logo-iracing.png"
                alt="iRacing logo"
                width={50}
                height={50}
              />
              <h3>iRacing</h3>
            </div>

            <p>
              {t.iracingText}
            </p>
          </div>

          <div
            style={{
              padding: "30px",
              borderRadius: "12px",
              background: "#111",
              color: "white",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "15px" }}>
              <Image
                src="/images/logo-lmu.png"
                alt="Le Mans Ultimate logo"
                width={128}
                height={50}
              />
              <h3>Le Mans Ultimate</h3>
            </div>

            <p>
              {t.lmuText}
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section
        style={{
          padding: "45px 20px",
          background: "#f4f4f4",
        }}
      >
        <h2 style={{ marginBottom: "30px", textAlign: "center" }}>
          {t.servicesTitle}
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            maxWidth: "1300px",
            margin: "auto",
          }}
        >
          {t.services.map((service, index) => (
            <div
              key={index}
              style={{
                padding: "25px",
                borderRadius: "10px",
                background: "white",
                border: "1px solid #ddd",
              }}
            >
              <h3 style={{ marginBottom: "15px" }}>
                {service.title}
              </h3>

              <p style={{ color: "#555" }}>
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMUNITY */}

      <section
        style={{
          padding: "45px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>
          {t.communityTitle}
        </h2>

        <p style={{ maxWidth: "700px", margin: "auto" }}>
          {t.communityText}
        </p>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          <a
            href="https://discord.gg/YOUR_LINK"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "14px 26px",
              background: "#5865F2",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            Discord
          </a>

          <a
            href="https://instagram.com/YOUR_LINK"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "14px 26px",
              background: "#E1306C",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            Instagram
          </a>

          <a
            href="https://tiktok.com/@YOUR_LINK"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "14px 26px",
              background: "black",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            TikTok
          </a>
        </div>
      </section>

      {/* CTA */}

      <section
        style={{
          padding: "50px",
          background: "#111",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>
          {t.ctaTitle}
        </h2>

        <Link
          href="/contact"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "14px 28px",
            background: "white",
            color: "black",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "bold",
          }}
        >
          {t.contact}
        </Link>
      </section>

    </main>
  );
}