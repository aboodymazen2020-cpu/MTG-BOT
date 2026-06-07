// عداد الزوار
if (!localStorage.getItem("mtg_visited")) {
  let count = Number(localStorage.getItem("mtg_visits") || 0);
  localStorage.setItem("mtg_visits", count + 1);
  localStorage.setItem("mtg_visited", "yes");
}
