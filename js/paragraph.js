const paragraph = document.querySelector("#paragraph");
const sentence = document.querySelector("#paragraph div:first-child");
const author = document.querySelector("#paragraph div:last-child");

const AUTHOR = "땅콩일기 -쩡찌-";
const bundle = [
  {
    sentence:
      "나도 그 마음이 뭔지 알아요. 좋아하는 것을 나누는 마음도, 나의 좋음을 나눈 후 살짝 초조하고 긴장되는 그 마음도.",
  },
  {
    sentence: "우리는 상심하지 않아도 서로의 곁에 있을 수 있다.",
  },
  {
    sentence:
      "나도 그 마음이 뭔지 알아요. 좋아하는 것을 나누는 마음도, 나의 좋음을 나눈 후 살짝 초조하고 긴장되는 그 마음도. ",
  },
  {
    sentence:
      "쿠키의 맛은 기억하지 못하지만 그 접시의 아름다움은, 친구에게 새 접시를 내어주는 마음은 영영 잊지 못할 것이라고",
  },
  {
    sentence: "아무것도 아닌 날을 아무것도 아닌 날로 받아들이기로 했다.",
  },
  {
    sentence:
      "아침 인사를 주고받는 우리 그 아침의 인사가 몇 번이나 몇 번이나 나를 일으켰다는 걸 친구여 알까.",
  },
  {
    sentence: "그래도. 그렇더라도.",
  },
  {
    sentence:
      "나는 평생 이 애의 친구가 될 거야. 무슨 일이 있더라도. 평생 문을 열어줄 거야.",
  },
  {
    sentence: "여전한 나의 슬픔에도 너의 사랑 또한 여전히 나의 사랑이라는 것.",
  },
  {
    sentence: "꽤 자주, 고개를 쳐들고 하염없이 밤하늘을 바라보곤 했다.",
  },
  {
    sentence: "네가 좋은 것을 많이 가졌으면 좋겠다.",
  },
  {
    sentence: "그래도 먹었고, 그래도 썼고, 그래도 그렸고, 그래도 사랑했다.",
  },
];

const random = Math.floor(Math.random() * bundle.length);

sentence.innerText = `${bundle[random].sentence}`;
author.innerText = AUTHOR;
