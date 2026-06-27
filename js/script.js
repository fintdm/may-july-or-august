// кнопки
const no = document.getElementById("no");
const yes = document.getElementById("yes");
const title = document.getElementById("title");
const langBtn = document.getElementById("langBtn");
const loader = document.getElementById("loader");
const yesRect = yes.getBoundingClientRect();

const emojis = [
    "☯"
];

// const bgMusic = document.getElementById("bgMusic");

// const progress = document.getElementById("progress");
// const percent = document.getElementById("percent");
// черная хуйня
const terminal = document.getElementById("terminal");
const fade = document.getElementById("fade");
const scene = document.getElementById("scene");
const typedText = document.getElementById("typedText");
const finalText = "Ты\nРеально\nНе проигнорила 😲.";
// вода
const essayScene = document.getElementById("essayScene");
const essayText = document.getElementById("essayText");
const essayScene2 = document.getElementById("essayScene2");
const essayText2 = document.getElementById("essayText2");
const essayScene3 = document.getElementById("essayScene3");
const essayText3 = document.getElementById("essayText3");

const essay = `             Привет.                   Сейчас 3 часа ночи 21.06.26.       Я начал писать этот сайт в начале Мая. Он очень простенький, но пришлось помучаться с ним. Писал я его для тебя, но не успел до выпускного вечера. `;

const essay2 = `
ЗДЕСЬ ВТОРОЕ СОЧИНЕНИЕ...
Или продолжение текста.

Переход будет плавный,
как будто открывается новая сцена.
`;

const essay3 = `
ТРЕТЬЯ СЦЕНА.

Можно сделать финал,
последнее сообщение,
или ещё одну часть истории.

Переход такой же плавный.
`;


let isRussian = false;
let essayBackgroundURL = "https://i.pinimg.com/736x/70/ad/b0/70adb01a5ed9311d8df7a6253ae07d76.jpg";
let essayBackgroundURL2 = "https://i.pinimg.com/736x/9e/31/6e/9e316e30b149b601cdd11d2ef888e6d1.jpg";
let essayBackgroundURL3 = "https://i.pinimg.com/736x/64/82/55/648255c99e42367c13a087f9db873ab1.jpg";

function createEmoji(){

    const el = document.createElement("div");
    el.className = "in-yan";

    el.textContent =
        emojis[Math.floor(Math.random()*emojis.length)];

    const size = 16 + Math.random()*22;
    const left = Math.random()*100;
    const duration = 6 + Math.random()*7;
    const drift = (-80 + Math.random()*160) + "px";
    const rot = (-180 + Math.random()*360) + "deg";

    el.style.left = left + "vw";
    el.style.fontSize = size + "px";
    el.style.animationDuration = duration + "s";
    el.style.setProperty("--drift", drift);
    el.style.setProperty("--rot", rot);

    document.body.appendChild(el);

    setTimeout(() => {
        el.remove();
    }, duration * 1000);
}

setInterval(createEmoji, 450);

for(let i=0;i<15;i++){
    setTimeout(createEmoji, i*220);
}

// фу для воды
function setEssayBackground(url){
    essayScene.style.backgroundImage = `url(${url})`;
}

function setEssayBackground2(url){
    essayScene2.style.backgroundImage = `url(${url})`;
}

// function setEssayBackground3(url){
//     essayScene3.style.backgroundImage = `url(${url})`;
// }

langBtn.addEventListener("click", () => {
    isRussian = !isRussian;

    if (isRussian) {
        title.textContent = "Мы друзья?";
        langBtn.textContent = "KR";
    } else {
        title.textContent = "우리는 친구야?";
        langBtn.textContent = "RU";
    }
});

no.addEventListener("click", () => {

    no.classList.add("fall-away");

    setTimeout(() => {
        no.style.display = "none";
    }, 700);
});

window.addEventListener("load", () => {

    const yesRect = yes.getBoundingClientRect();
    const cardRect = document
        .querySelector(".buttons")
        .getBoundingClientRect();

    
    no.style.left =
        (yesRect.left - cardRect.left + yesRect.width/2) + "px";

    no.style.top =
        (yesRect.top - cardRect.top) + "px";

    no.style.transform =
        "translateX(-50%)";
});

window.onload = () => {

    
    no.style.left = "50%";
    no.style.top = "10px";
    no.style.transform = "translateX(-50%)";
};

let scale = 1;

// Сука, я этот переход ненавижу
no.style.left =
    yesRect.right + "px";

no.style.top =
    yesRect.top + "px";

function cinematicText(text, element, speed = 180, callback){

    element.innerHTML = "";

    const words = text.split(" ");

    words.forEach((word, index) => {

        const span = document.createElement("span");
        span.className = "word";

        span.textContent = word;

        element.appendChild(span);

        setTimeout(() => {
            span.classList.add("show");
        }, index * speed);

        // добавляем пробел отдельным элементом (ВАЖНО)
        const space = document.createElement("span");
        space.textContent = " ";
        element.appendChild(space);
    });

    setTimeout(() => {
        if(callback) callback();
    }, words.length * speed + 800);
}

function typeWriter(text, element, speed = 30, callback){

    element.innerHTML = "";
    let i = 0;

    function type(){

        if(i >= text.length){
            if(callback) callback();
            return;
        }

        const char = text[i];

        if(char === "\n"){
            element.appendChild(document.createElement("br"));
            i++;
            setTimeout(type, 35);
            return;
        }

        const span = document.createElement("span");
        span.className = "char";
        span.textContent = char === " " ? "\u00A0" : char;

        element.appendChild(span);

        requestAnimationFrame(() => {
            span.classList.add("show");
        });

        let delay = speed + Math.random()*20;

        // плавные живые паузы
        if(",;:".includes(char)) delay += 120;
        if(".!?".includes(char)) delay += 260;
        if(char === " ") delay -= 5;

        i++;
        setTimeout(type, delay);
    }

    type();
}

// function typeWriter(text, element, speed = 40, callback) {
//     let i = 0;
//     element.textContent = "";

//     const interval = setInterval(() => {
//         element.textContent += text[i];
//         i++;

//         if (i >= text.length) {
//             clearInterval(interval);
//             if (callback) callback();
//         }
//     }, speed);
// }

// yes.onclick = () => {
//     fade.style.opacity = "1";

//     setTimeout(() => {

//     loader.style.display = "none";

//     scene.style.display = "flex";

//     setTimeout(() => {
//         scene.classList.add("show");

//         typeWriter(finalText, typedText, 40, () => {

//             setTimeout(() => {

//                 scene.style.opacity = "0";

//                 setTimeout(() => {
//                     scene.style.display = "none";
//                     essayScene.style.display = "flex";
//                     setEssayBackground(essayBackgroundURL);
//                     setTimeout(() => {
//                         essayScene.style.opacity = "1";
//                         typeWriter(essay, essayText, 90);

//                     }, 300);

//                 }, 800);

//             }, 1200);

//         });

//     }, 300);

// }, 800);
// };

// эту дичь лучше не трогать, в JS не силен(в рот его ебал)
yes.onclick = () => {

    // bgMusic.volume = 0;
    // bgMusic.play();

    // let vol = 0;

    // const musicFade = setInterval(() => {
    //     vol += 0.03;

    //     if(vol >= 0.35){
    //         vol = 0.35;
    //         clearInterval(musicFade);
    //     }

    //     bgMusic.volume = vol;
    // }, 120);

    fade.style.opacity = "1";

    setTimeout(() => {

        loader.style.display = "none";
        scene.style.display = "flex";

        setTimeout(() => {

            scene.classList.add("show");

            typeWriter(finalText, typedText, 50, () => {
               
                setTimeout(() => {

                    scene.style.opacity = "0";

                    setTimeout(() => {

                        scene.style.display = "none";

                        essayScene.style.display = "flex";
                        setEssayBackground(essayBackgroundURL);

                        setTimeout(() => {

                            essayScene.style.opacity = "1";

                            cinematicText(essay, essayText, 260, () => {

                                setTimeout(() => {

                                    essayScene.style.opacity = "0";

                                    setTimeout(() => {

                                        essayScene.style.display = "none";

                                        essayScene2.style.display = "flex";
                                        setEssayBackground2(essayBackgroundURL2);

                                        setTimeout(() => {

                                            essayScene2.style.opacity = "1";

                                            cinematicText(
                                                essay2,
                                                essayText2,
                                                260,
                                                () => {

                                                    // setTimeout(() => {
                                                 
                                                    //     essayScene2.style.opacity = "0";

                                                    //     setTimeout(() => {

                                                    //         essayScene2.style.display = "none";

                                                    //         essayScene3.style.display = "flex";
                                                    //         setEssayBackground3(essayBackgroundURL3);

                                                    //         setTimeout(() => {

                                                    //             essayScene3.style.opacity = "1";

                                                    //             cinematicText(
                                                    //                 essay3,
                                                    //                 essayText3,
                                                    //                 260
                                                    //             );

                                                    //         }, 300);

                                                    //     }, 800);

                                                    // }, 1500);

                                                }
                                            );

                                        }, 300);

                                    }, 800);

                                }, 1500);

                            });

                        }, 300);

                    }, 800);

                }, 1200);

            });

        }, 300);

    }, 800);
};