const getImages = (numberOfImages: number) => {
  const galery = document.getElementById("interactive__container");
  const imagesPath = "/images/";

  for (let i = 0; i <= numberOfImages; i++) {
    const image = document.createElement("img");

    image.id = "image__frame";
    image.className = `frame${i}`;
    image.alt = `LyL Automotores - frame${i}`;
    image.title = `LyL Automotores - frame${i}`;

    const imagePath = `${imagesPath}${i}.webp`;

    image.src = imagePath;

    galery?.appendChild(image);
  }
};

export default getImages;
