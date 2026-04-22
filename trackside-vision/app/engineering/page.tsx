export default function EngineeringPage() {
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
      <section style={{ marginBottom: "60px", textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
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
      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ marginBottom: "20px" }}>
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
            "Data analysis and performance optimization",
            "Race and stint strategy",
            "Driver coaching and feedback",
            "Setup support and session preparation",
            "Post-session performance review",
          ].map((service, index) => (
            <div
              key={index}
              style={{
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                background: "#f9f9f9",
              }}
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* DISCIPLINES */}
      <section
        style={{
          marginBottom: "50px",
          padding: "30px",
          borderRadius: "10px",
          background: "#f4f4f4",
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>
          Disciplines
        </h2>

        <p>
          Main focus on GT and endurance racing, with openness to other
          categories and championships.
        </p>
      </section>

      {/* APPROACH */}
      <section
        style={{
          marginBottom: "50px",
          padding: "30px",
          borderRadius: "10px",
          border: "1px solid #ddd",
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>
          Approach
        </h2>

        <p>
          My work is based on a structured engineering process combining
          data-driven analysis, clear communication with drivers and teams,
          and continuous performance improvement.
        </p>
      </section>

      {/* AVAILABILITY */}
      <section
        style={{
          padding: "30px",
          borderRadius: "10px",
          background: "#111",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>
          Availability
        </h2>

        <p>
          Freelance race engineer based in France, available for trackside
          support in national and international events.
        </p>
      </section>
    </main>
  );
}