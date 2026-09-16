import { useState } from "react";

function FeedbackList({ feedback, setFeedback }) {
  return (
    <div>
      {feedback.isimSoyisim && feedback.email && feedback.yorum ? (
        <div>
          <h2>Feedback Listesi</h2>
          <p>
            <strong>İsim Soyisim:</strong> {feedback.isimSoyisim}
          </p>
          <p>
            <strong>Email:</strong> {feedback.email}
          </p>
          <p>
            <strong>Yorum:</strong> {feedback.yorum}
          </p>
          <p>
            <strong>Tarih:</strong> {feedback.tarih}
          </p>

          <button
            onClick={() =>
              setFeedback({
                isimSoyisim: "",
                email: "",
                yorum: "",
                tarih: "",
              })
            }
          >
            Sil
          </button>
        </div>
      ) : (
        <p>
          <strong>Henüz feedback eklenmemiş.</strong>
        </p>
      )}
    </div>
  );
}

export default FeedbackList;
