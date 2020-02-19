import { LoremIpsum } from "lorem-ipsum";
import image0 from "./image0.jpg";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";
import image5 from "./image5.jpg";
import image6 from "./image6.jpg";
import image7 from "./image7.jpg";
import image8 from "./image8.jpg";

const images = [
  image0,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8
];

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

export const listInfo = [];
for (let i = 0; i < 400; i++) {
  listInfo.push({
    name: lorem.generateWords(2),
    id: i,
    rating: (Math.round(Math.random() * 4) + 1).toString(),
    image: images[Math.round(Math.random() * 8)]
  });
}
