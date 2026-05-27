const WEBHOOK_URL = "https://canary.discord.com/api/webhooks/1509325944328814792/4nkZclRiz4NqPrYZHdTP4wzAqZfVIpqExKArWSLd5mKl802ORawZqUXLbXtHs__4599j";

function send() {
  const title = document.getElementById("title").value;
  const msg = document.getElementById("message").value;
  const status = document.getElementById("status");

  if (!title || !msg) {
    status.innerText = "❌ عبّي كل الخانات";
    return;
  }

  fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      embeds: [{
        title: `⚠️ ${title}`,
        description: msg,
        color: 0x8B0000,
        footer: {
          text: "بو قحط • War Zone"
        }
      }]
    })
  })
  .then(() => {
    status.innerText = "✅ تم الإرسال";
  })
  .catch(() => {
    status.innerText = "❌ فشل الإرسال";
  });
}
