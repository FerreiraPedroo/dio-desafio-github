const BASE_URL = "https://picsum.photos/400/600";
const paisagemImg = document.getElementById("img-paisagem");
const paisagemBtn = document.getElementById("btn-paisagem");

const getPaisagem = async () => {
  try {
    const data = await fetch(BASE_URL);
    const urlImg = data.url;

    console.log(data.url)
    
    return urlImg;

  } catch (e) {
    console.log(e.message)
  }

}

const loadImg = async () => {
  paisagemImg.src = await getPaisagem()
}

paisagemBtn.addEventListener("click", loadImg);

loadImg()