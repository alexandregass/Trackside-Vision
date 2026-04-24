export default function ProjectsPage() {
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
          Projects & Experience
        </h1>

        <p
          style={{
            fontSize: "18px",
            maxWidth: "700px",
            margin: "auto",
            color: "#555",
          }}
        >
          Trackside engineering experience in GT and endurance racing,
          focused on performance, data analysis and race operations.
        </p>
      </section>

      {/* PROJECT CARD */}

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
          Selected Experience
        </h2>

        <div
          style={{
            padding: "30px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <h3>GT Endurance Racing</h3>

          <p
            style={{
              color: "#555",
              marginTop: "10px",
            }}
          >
            Trackside race engineering support in endurance racing
            events, focusing on performance optimization, data
            analysis and operational execution during race weekends.
          </p>

          <ul
            style={{
              marginTop: "15px",
              paddingLeft: "20px",
              lineHeight: "1.8",
            }}
          >
            <li>Telemetry and performance data analysis</li>
            <li>Driver support and feedback</li>
            <li>Session preparation and review</li>
            <li>Race strategy execution</li>
          </ul>
        </div>

        <div
          style={{
            padding: "30px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <h3>Freelance Race Engineering</h3>

          <p
            style={{
              color: "#555",
              marginTop: "10px",
            }}
          >
            Freelance engineering services supporting teams and
            drivers during testing and race events, with a focus on
            structured performance processes and reliability.
          </p>

          <ul
            style={{
              marginTop: "15px",
              paddingLeft: "20px",
              lineHeight: "1.8",
            }}
          >
            <li>Trackside engineering support</li>
            <li>Performance analysis</li>
            <li>Operational coordination</li>
            <li>Continuous improvement processes</li>
          </ul>
        </div>
      </section>

      {/* TOOLS */}

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
            marginBottom: "20px",
          }}
        >
          Tools & Environment
        </h2>

        <ul
          style={{
            paddingLeft: "20px",
            lineHeight: "1.8",
          }}
        >
          <li>Telemetry and data analysis software</li>
          <li>Performance and strategy tools</li>
          <li>Engineering documentation and reporting</li>
          <li>Trackside communication and operations</li>
        </ul>
      </section>

      {/* AVAILABILITY */}

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
          Available for race engineering support
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