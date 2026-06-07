// ================== إعدادات ==================
const ADMIN_PASSWORD = "mtg"; // غيّرها

// ================== زيارات ==================
let visits = Number(localStorage.getItem("visits") || 0);
visits++;
localStorage.setItem("visits", visits);

// ================== تسجيل دخول الأدمن ==================
function login() {
  const pass = document.getElementById("adminPass").value;
  if (pass === ADMIN_PASSWORD) {
    localStorage.setItem("isAdmin", "true");
    document.getElementById("panel").style.display = "block";
    document.getElementById("stats").innerText =
      "عدد الزيارات: " + visits;
  } else {
    alert("❌ كلمة المرور خطأ");
  }
}

// ================== حفظ Webhooks ==================
function save() {
  localStorage.setItem("appoint", appoint.value.trim());
  localStorage.setItem("remove", remove.value.trim());
  alert("✅ تم حفظ Webhooks");
}

// ================== إرسال ==================
function send() {
  if (localStorage.getItem("isAdmin") !== "true") {
    alert("🚫 لازم تكون أدمن");
    return;
  }

  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const msg = document.getElementById("msg").value;
  const type = document.getElementById("type").value;

  const webhook =
    type === "تعيين"
      ? localStorage.getItem("appoint")
      : localStorage.getItem("remove");

  if (!webhook) {
    alert("❌ Webhook غير محفوظ");
    return;
  }

  fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content:
`**${type}**
👤 الاسم: ${name}
🧩 المسؤولية: ${role}
📝 الرسالة: ${msg}`
    })
  })
  .then(() => alert("✅ تم الإرسال"))
  .catch(() => alert("❌ فشل الإرسال"));
}
