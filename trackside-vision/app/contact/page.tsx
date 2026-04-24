export default function ContactPage() {
  return (
    <main
      style={{
        padding: "60px 20px",
        maxWidth: "900px",
        margin: "auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HERO */}

      <section
        style={{
          marginBottom: "50px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "15px",
          }}
        >
          Contact
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
          }}
        >
          Available for race weekends, engineering projects and
          performance support.
        </p>
      </section>

      {/* CONTACT INFO */}

      <section
        style={{
          marginBottom: "50px",
          padding: "30px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          background: "#f9f9f9",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          Contact Information
        </h2>

        <p>
          <strong>Email:</strong>{" "}
          your@email.com
        </p>

        <p>
          <strong>Location:</strong>{" "}
          France
        </p>

        <p>
          <strong>Status:</strong>{" "}
          Freelance Race Engineer
        </p>

        <p>
          <strong>Availability:</strong>{" "}
          National and international events
        </p>
      </section>

      {/* FORM */}

      <section
        style={{
          padding: "30px",
          borderRadius: "10px",
          border: "1px solid #ddd",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          Send a Message
        </h2>

        <form
          action="https://formspree.io/f/mlgaaqvj"
          method="POST"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            style={inputStyle}
          />

          <textarea
            name="message"
            placeholder="Message"
            required
            rows={6}
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              padding: "12px",
              background: "#111",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Send message
          </button>
        </form>
      </section>
    </main>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "16px",
};