async function kirim() {
  const input = document.getElementById("input");
  const chatbox = document.getElementById("chatbox");
  const msg = input.value;

  if (!msg) return;

  chatbox.innerHTML += `<p><b>Kamu:</b> ${msg}</p>`;
  input.value = "";

  const res = await fetch("https://rapzz.dotco.biz.id/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: msg })
  });

  const data = await res.json();
  chatbox.innerHTML += `<p><b>RapzAI:</b> ${data.reply}</p>`;
  chatbox.scrollTop = chatbox.scrollHeight;
}