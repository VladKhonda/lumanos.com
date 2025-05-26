function updateTime() {
  const timeEl = document.getElementById("time")
  const now = new Date()

  const days = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
  const months = ['Січ', 'Лют', 'Бер', 'Квіт', 'Трав', 'Черв', 'Лип', 'Серп', 'Вер', 'Жовт', 'Лист', 'Груд']

  const day = days[now.getDay()]
  const date = now.getDate()
  const month = months[now.getMonth()]
  const hours = now.getHours().toString().padStart(2, '0')
  const minutes = now.getMinutes().toString().padStart(2, '0')

  timeEl.textContent = `${day} ${date} ${month} ${hours}:${minutes}`
}

updateTime()
setInterval(updateTime, 1000)