function toggleMode() {
  // Pega a parte principal da página (<html>)
  const html = document.documentElement
  html.classList.toggle("light")


  // pegar a tag img
  const img = document.querySelector("#profile img")

  // depois que pegar a tag img, substiuit a imagem
  if (html.classList.contains("light")) {
  // condição: se tiver light mode, adicionar a imagem light

    img.setAttribute('src', 'assets/assets/sui-light.png')
  } else {
  // condição: se tiver dark mode, manter a imagem normal
    img.setAttribute("src", "assets/assets/sui-dark.png")
  }
}
