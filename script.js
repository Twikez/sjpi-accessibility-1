document.addEventListener("DOMContentLoaded", () => {
  const messageButton = document.querySelector('button[type="button"]')

  if (!messageButton) return

  messageButton.addEventListener("click", () => {
    let message = document.getElementById("news-message")

    if (!message) {
      message = document.createElement("p")
      message.id = "news-message"
      message.textContent = "Thanks for reading A11y News!"
      message.setAttribute("role", "status")
      message.setAttribute("aria-live", "polite")

      messageButton.insertAdjacentElement("afterend", message)
    }
  })
})