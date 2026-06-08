// 🔴 حط رابط الويب هوك هنا
const WEBHOOK_URL = "https://canary.discord.com/api/webhooks/1509325944328814792/4nkZclRiz4NqPrYZHdTP4wzAqZfVIpqExKArWSLd5mKl802ORawZqUXLbXtHs__4599j";

function send() {
  const name = document.getElementById("name").value.trim();
  const job = document.getElementById("job").value.trim();
  const type = document.getElementById("type").value;
  const mentionType = document.getElementById("mention").value;
  const roleId = document.getElementById("roleId").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !job || !message) {
    alert("❌ عبّ كل البيانات");
    return;
  }

  let content = "";
  let allowed = {};

  if (mentionType === "everyone") {
    content = "@everyone";
    allowed = { parse: ["everyone"] };
  }

  if (mentionType === "role" && roleId) {
    content = `<@&${roleId}>`;
    allowed = { roles: [roleId] };
  }

  fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: content || null,
      allowed_mentions: allowed,
      embeds: [
        {
          title: `📌 ${type}`,
          color: 0x00ffff,
          fields: [
            { name: "👤 الاسم", value: name, inline: true },
            { name: "🧩 المسؤولية", value: job, inline: true },
            { name: "📝 الرسالة", value: message }
          ],
          footer: { text: "MTG Cyber Panel" },
          timestamp: new Date().toISOString()
        }
      ]
    })
  })
  .then(() => alert("✅ تم الإرسال"))
  .catch(() => alert("❌ فشل الإرسال"));
}
