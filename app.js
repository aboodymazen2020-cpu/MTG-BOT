// 🔴 حط رابط الويب هوك هنا
const WEBHOOK_URL = "https://canary.discord.com/api/webhooks/1509325944328814792/4nkZclRiz4NqPrYZHdTP4wzAqZfVIpqExKArWSLd5mKl802ORawZqUXLbXtHs__4599j";

// زر الإرسال
function send() {
  const name = document.getElementById("name").value.trim();
  const role = document.getElementById("role").value.trim();
  const msg  = document.getElementById("msg").value.trim();
  const type = document.getElementById("type").value;

  if (!name || !role || !msg) {
    alert("❌ عبّ كل الخانات");
    return;
  }

  fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content:
`**${type}**
 ***الاسم:*** ${name}
 ***المسؤولية***: ${role}
 ***الرسالة***: ${msg}`
    })
  })
  .then(() => alert("✅ تم الإرسال"))
  .catch(err => {
    console.error(err);
    alert("❌ فشل الإرسال");
  });
}
