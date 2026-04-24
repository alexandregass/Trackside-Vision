"use client";

import { useLanguage } from "../components/LanguageContext";


export default function HomePage() {
  const { lang } = useLanguage();
    const content = {
    en: {
      heroTitle: "Trackside Vision",
      heroSubtitle: "Race Engineering & Performance",

      heroText:
        "Freelance race engineer focused on GT and endurance racing, delivering data-driven performance and structured race support.",

      metrics: [
        { value: "50+", label: "Race Weekends" },
        { value: "GT", label: "Endurance Focus" },
        { value: "FR / EU", label: "Trackside Support" },
        { value: "Data", label: "Performance Driven" },
      ],

      servicesTitle: "Services",

      services: [
        {
          title: "Data Analysis",
          text: "Telemetry and performance data analysis to identify improvements and optimize lap time.",
        },
        {
          title: "Race Strategy",
          text: "Stint planning, fuel management and decision support during race weekends.",
        },
        {
          title: "Driver Coaching",
          text: "Structured feedback and performance guidance based on data and on-track observation.",
        },
        {
          title: "Performance Engineering",
          text: "Setup support and engineering approach focused on consistency and performance.",
        },
      ],

      viewServices: "View all services",
    },

    fr: {
      heroTitle: "Trackside Vision",
      heroSubtitle: "Ingénierie de Course & Performance",

      heroText:
        "Ingénieur de course freelance spécialisé en GT et endurance, avec une approche basée sur l'analyse de données et la performance.",

      metrics: [
        { value: "50+", label: "Week-ends de course" },
        { value: "GT", label: "Spécialité Endurance" },
        { value: "FR / EU", label: "Support circuit" },
        { value: "Data", label: "Approche performance" },
      ],

      servicesTitle: "Services",

      services: [
        {
          title: "Analyse de données",
          text: "Analyse télémétrie et performance pour identifier les axes d'amélioration.",
        },
        {
          title: "Stratégie de course",
          text: "Planification des relais, gestion carburant et support décisionnel.",
        },
        {
          title: "Coaching pilote",
          text: "Feedback structuré basé sur les données et l'observation piste.",
        },
        {
          title: "Ingénierie performance",
          text: "Support setup et approche orientée régularité et performance.",
        },
      ],

      viewServices: "Voir tous les services",
    },
    
  }
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          height: "95vh",
          backgroundImage: "url('/images/hero.jpg')",
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
        {/* Overlay sombre */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.6)",
          }}
        />

        <div
          style={{
            position: "relative",
            padding: "0px",
            maxWidth: "700px",
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              marginBottom: "20px",
            }}
          >
            {content[lang].heroTitle}
          </h1>

          <h2
            style={{
              fontSize: "28px",
              fontWeight: "normal",
              marginBottom: "20px",
            }}
          >
            {content[lang].heroSubtitle}
          </h2>

          <p
            style={{
              fontSize: "18px",
              marginBottom: "30px",
            }}
          >
            {content[lang].heroText}
          </p>
        </div>
      </section>

      {/* KEY METRICS */}

      <section
        style={{
          padding: "60px 20px",
          background: "#f5f5f5",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "30px",
            textAlign: "center",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "36px",
                marginBottom: "10px",
              }}
            >
              20+
            </h3>

            <p>Race Weekends</p>
          </div>

          <div>
            <h3
              style={{
                fontSize: "36px",
                marginBottom: "10px",
              }}
            >
              GT3 / GT4
            </h3>

            <p>Endurance Focus</p>
          </div>

          <div>
            <h3
              style={{
                fontSize: "36px",
                marginBottom: "10px",
              }}
            >
              FR / EU
            </h3>

            <p>Trackside Support</p>
          </div>

          <div>
            <h3
              style={{
                fontSize: "36px",
                marginBottom: "10px",
              }}
            >
              Data
            </h3>

            <p>Performance Driven</p>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}

      <section
        style={{
          padding: "70px 20px",
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "32px",
          }}
        >
          Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >
          {[
            {
              title: "Data Analysis",
              text: "Telemetry and performance data analysis to identify improvements and optimize lap time.",
            },
            {
              title: "Race Strategy",
              text: "Stint planning, fuel management and decision support during race weekends.",
            },
            {
              title: "Driver Coaching",
              text: "Structured feedback and performance guidance based on data and on-track observation.",
            },
            {
              title: "Performance Engineering",
              text: "Setup support and engineering approach focused on consistency and performance.",
            },
          ].map((service, index) => (
            <div
              key={index}
              style={{
                padding: "25px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                background: "white",
                transition: "0.2s",
              }}
            >
              <h3
                style={{
                  marginBottom: "15px",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "#555",
                }}
              >
                {service.text}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          <a
            href="/engineering"
            style={{
              padding: "12px 24px",
              background: "#111",
              color: "white",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: "bold",
            }}
          >
            View all services
          </a>
        </div>
      </section>

      {/* QUICK OVERVIEW */}
      <section
        style={{
          padding: "60px 20px",
          maxWidth: "1000px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>
          Engineering Services
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
          }}
        >
          Data analysis, race strategy, driver support and performance
          optimization for professional motorsport teams and drivers.
        </p>
      </section>
    </main>
  );
}