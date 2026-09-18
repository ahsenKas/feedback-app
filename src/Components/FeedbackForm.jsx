import { useState } from "react";
function FeedbackForm({ feedback, setFeedback }) {
  const [adSoyad, setAdSoyad] = useState(feedback.isimSoyisim);
  const [email, setEmail] = useState(feedback.email);
  const [yorum, setYorum] = useState(feedback.yorum);

  const [bildirim, setBildirim] = useState("");

  return (
    <div className="form-container">
      <h1>Geri Bildirim Formu</h1>
      {bildirim && <p>{bildirim}</p>}
      <form>
        <label htmlFor="adSoyad">Ad Soyad:</label>
        <input
          type="text"
          id="adSoyad"
          value={adSoyad}
          onChange={(e) => setAdSoyad(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="yorum">Yorum:</label>
        <textarea
          id="yorum"
          value={yorum}
          onChange={(e) => setYorum(e.target.value)}
        ></textarea>

        <button
          onClick={(e) => {
            e.preventDefault();

            setBildirim("Teşekkürler");

            setTimeout(() => {
              setBildirim("");
            }, 3000);



            
            setFeedback({
              isimSoyisim: adSoyad,
              email: email,
              yorum: yorum,
              tarih: new Date().toLocaleString(),
            });
            setBildirim("Teşekkürler");
          }}
        >
          Gönder
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;
