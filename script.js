const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("#nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
    menuButton.querySelector("span").textContent = open ? "＋" : "－";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.querySelector("span").textContent = "＋";
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// 公開前に、実際に受信できるメールアドレスへ変更してください。
const CONTACT_EMAIL = "hello@example.com";
const form = document.querySelector("#contact-form");
const note = document.querySelector("#form-note");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    if (CONTACT_EMAIL === "hello@example.com") {
      note.textContent = "公開前に script.js の CONTACT_EMAIL と、ページ内のメールアドレスを実際の連絡先へ変更してください。";
      return;
    }

    const data = new FormData(form);
    const subject = `【サイトからのお問い合わせ】${data.get("type")}`;
    const body = [
      `お名前：${data.get("name")}`,
      `メールアドレス：${data.get("email")}`,
      `お問い合わせ内容：${data.get("type")}`,
      "",
      data.get("message")
    ].join("\\n");

    note.textContent = "メールアプリを開きます。内容を確認して送信してください。";
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
