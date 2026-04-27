import Image from "next/image";

export default function SimracingPage() {
  return (
    <main
      style={{
        padding: "60px 20px",
        maxWidth: "1100px",
        margin: "auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HERO */}

      <section
        style={{
          marginBottom: "60px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "20px",
          }}
        >
          <Image
            src="/Images/logo-simracing.png"
            alt="Simracing team logo"
            width={250}
            height={250}
            style={{
              marginTop: "20px",
              marginBottom: "20px",
            }}
          />
        </h1>

        <p
          style={{
            fontSize: "18px",
            maxWidth: "700px",
            margin: "auto",
            color: "#555",
          }}
        >
          Development of a simracing activity built on real motorsport
          engineering methods, performance analysis and structured
          driver support.
        </p>
      </section>

      {/* VISION */}

      <section
        style={{
          marginBottom: "60px",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          Vision
        </h2>

        <p>
          The simracing project is designed as an extension of real
          motorsport engineering, using data-driven performance
          analysis and professional working methods.
        </p>

        <p
          style={{
            marginTop: "15px",
          }}
        >
          The objective is to create a structured environment for
          driver development, performance improvement and competitive
          participation in endurance and GT categories.
        </p>
      </section>

      {/* SERVICES */}

      <section
        style={{
          marginBottom: "60px",
        }}
      >
        <h2
          style={{
            marginBottom: "30px",
          }}
        >
          Simracing Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            {
              title: "Driver Coaching",
              text: "Structured feedback and performance analysis using telemetry and session data.",
            },
            {
              title: "Data Analysis",
              text: "Lap time and driving analysis to identify performance improvements.",
            },
            {
              title: "Race Strategy",
              text: "Strategy preparation for endurance events and team racing.",
            },
            {
              title: "Team Development",
              text: "Building a professional and structured simracing team environment.",
            },
          ].map((service, index) => (
            <div
              key={index}
              style={{
                padding: "25px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                background: "#f9f9f9",
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
      </section>

      {/* PROJECT */}

      <section
        style={{
          marginBottom: "60px",
          padding: "30px",
          borderRadius: "10px",
          background: "#f4f4f4",
        }}
      >
        <h2
          style={{
            marginBottom: "15px",
          }}
        >
          Team Project
        </h2>

        <p>
          The simracing team is currently under development, with the
          objective of participating in endurance and competitive
          events using a professional engineering approach.
        </p>
      </section>

      {/* FUTURE */}

      <section
        style={{
          marginBottom: "60px",
        }}
      >
        <h2
          style={{
            marginBottom: "15px",
          }}
        >
          Future Development
        </h2>

        <ul
          style={{
            paddingLeft: "20px",
            lineHeight: "1.8",
          }}
        >
          <li>Participation in endurance simracing events</li>

          <li>Driver development and coaching programs</li>

          <li>Team structure and performance processes</li>

          <li>Integration between real and virtual motorsport</li>
        </ul>
      </section>

      {/* CONTACT CTA */}

      <section
        style={{
          padding: "40px",
          borderRadius: "10px",
          background: "#111",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            marginBottom: "15px",
          }}
        >
          Interested in simracing collaboration
        </h2>

        <a
          href="/contact"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 24px",
            background: "white",
            color: "black",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "bold",
          }}
        >
          Contact
        </a>
      </section>
    </main>
  );
}