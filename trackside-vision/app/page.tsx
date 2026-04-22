export default function HomePage() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          height: "80vh",
          background: "#111",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "48px",
              marginBottom: "20px",
            }}
          >
            Trackside Vision
          </h1>

          <h2
            style={{
              fontSize: "28px",
              fontWeight: "normal",
              marginBottom: "20px",
            }}
          >
            Race Engineering & Performance
          </h2>

          <p
            style={{
              fontSize: "18px",
              maxWidth: "600px",
              margin: "auto",
              marginBottom: "30px",
              color: "#ccc",
            }}
          >
            Freelance race engineer focused on GT and endurance racing,
            delivering data-driven performance and structured race support.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            <a
              href="/engineering"
              style={{
                padding: "12px 24px",
                background: "white",
                color: "black",
                textDecoration: "none",
                borderRadius: "6px",
                fontWeight: "bold",
              }}
            >
              View Services
            </a>

            <a
              href="/contact"
              style={{
                padding: "12px 24px",
                border: "1px solid white",
                color: "white",
                textDecoration: "none",
                borderRadius: "6px",
              }}
            >
              Contact
            </a>
          </div>
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