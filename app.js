// عداد الزيارات
let visits = localStorage.getItem("visits") || 0;
visits++;
localStorage.setItem("visits", visits);

// حفظ webhooks
function save() {
  localStorage.setItem("appoint", appoint.value);
  localStorage.setItem("remove", remove.value);
  alert("تم الحفظ");
}

// إرسال للدسكورد
function send() {
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const msg = document.getElementById("msg").value;
  const type = document.getElementById("type").value;

  const webhook = type === "تعيين"
    ? localStorage.getItem("appoint")
    : localStorage.getItem("remove");

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
  });

  alert("تم الإرسال");
}

// إحصائيات الأدمن
if (document.getElementById("stats")) {
  stats.innerText = "عدد الزيارات: " + visits;
}
