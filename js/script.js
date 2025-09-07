document.getElementById("subscribeForm").addEventListener("submit", (e)=>{
  e.preventDefault();
  const email = document.getElementById("email").value;
  alert(`Дякуємо за підписку, ${email}!`);
});
