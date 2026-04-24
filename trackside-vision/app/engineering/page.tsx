export default function EngineeringPage() {
  return (
    <main
        className="container"
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
          Race Engineering
        </h1>

        <p
          style={{
            fontSize: "18px",
            maxWidth: "700px",
            margin: "auto",
            color: "#555",
          }}
        >
          Professional race engineering services focused on performance,
          data analysis and race strategy in GT and endurance racing.
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
          Services
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
              className="section-light"
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

      {/* WORKING PROCESS */}

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
          Working Process
        </h2>

        <ol
          style={{
            paddingLeft: "20px",
            lineHeight: "1.8",
          }}
        >
          <li>Preparation and data review before sessions</li>

          <li>Trackside engineering support and communication</li>

          <li>Performance analysis and structured feedback</li>

          <li>Continuous improvement and optimization</li>
        </ol>
      </section>

      {/* DISCIPLINES */}

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
          Disciplines
        </h2>

        <p>
          Main focus on GT and endurance racing, with openness to other
          categories and championships.
        </p>
      </section>

      {/* AVAILABILITY */}

      <section
        style={{
          marginBottom: "60px",
          padding: "30px",
          borderRadius: "10px",
          border: "1px solid #ddd",
        }}
      >
        <h2
          style={{
            marginBottom: "15px",
          }}
        >
          Availability
        </h2>

        <p>
          Freelance race engineer based in France, available for
          trackside support in national and international events.
        </p>
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
          Available for race weekends and projects
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