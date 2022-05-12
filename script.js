const misfortunes = [
    //Timely:
    "Trump 2024.",
    //Timeless:
    "Your lucky colour is green; avoid all other colours.",
    "You amuse others.",
    "Imitation is the most sincere form of mockery.",
    "The only way to have a friend is to be your own.",
    "Love is on its way - make sure to have cash on hand.",
    "We have been trying to reach you about your car's extended warranty.",
    "A cheerful message from the government is on its way to you.",
    "Things couldn't possibly get any worse.",
    "At least the fortune cookie tasted good.",
    "When you come to a fork in the road, take it.",
    "You can observe a lot by just watching.",
    "A nickel ain’t worth a dime anymore.",
    "The future ain’t what it used to be.",
    "If you don't know where you're going, you might not get there.",
    "What people call love is just a chemical reaction that compels animals to breed.",
    "Nobody exists on purpose. Nobody belongs anywhere. Everybody's gonna die. Come watch TV.",
    "Get your shit together. Get it all together. And put it in a backpack. All your shit. So it’s together. And if you gotta take it somewhere, take it somewhere, you know, take it to the shit store and sell it… Or put it in a shit museum, I don’t care what you do, you just gotta get it together. Get your shit together!",
    "If something is hard to do then it's not worth doing.",
    "You tried your best and you failed miserably. The lesson is: never try.",
    "Trying is the first step towards failure.",
    "If you're out of people's sight, you must constantly Twitter them what you're up to.",
    "One person can make a difference. But most of the time, they probably shouldn’t.",
    "Romance is dead. It was acquired by Hallmark and Disney in a hostile takeover, homogenized, and sold off piece by piece.",
    "Happiness is limited but misery has no end.",
    "You can just hang around outside in the sun all day, tossing a ball around, or you can sit at your computer and do something that matters!",
    "Life is short and that's why you have to do whatever you want all the time.",
    "Whatever you do, always give 100%. Unless you're donating blood.",
    "It's never too late to go back to bed.",
    "Silence is golden. Unless you have kids. Then silence is suspicious.",
    "An apple a day keeps anyone away if you throw it hard enough.",
    "Housework can't kill you, but why take a chance?",
    "This too shall pass. It might pass like a kidney stone, but it will pass.",
    "Happiness is like a cake. Have too much and you get sick of it.",
    "If you are living the dream, how do you know if you are asleep or awake?",
    "People say having kids is life changing, well that doesn't necessarily mean a good thing, does it?",
    "You won't get anything done by planning.",
    "Error 404: fortune not found.",
    "Mirrors don't lie. Fortunately for you they don't laugh.",
    "Better to remain silent and be thought a fool than to speak out loud and remove all doubt.",
    "Don't worry about what people think. They don't do it very often.",
    "If one door closes and another one opens, your house is haunted and you need to run.",
    "Little things affect little minds.",
    "The sad truth is so many people are in love and not together, and so many people are together and not in love.",
    "If age is just a state of mind then you're ageless.",
    "Due to recent budget cuts we couldn't come up with a better fortune than this one.",
    "Due to recent budget cuts, the rising cost of electricity, gas, and oil, plus the current state of the economy, the light at the end of the tunnel has been turned off. Have a nice day!",
    "Error 400: bad request.",
    "Theory is when you know everything, but nothing works. Practice is when you don't know anything, yet everything works. In programming we combine theory and practice; nothing works, and we don't know why.",
    "Some people just need a high five. In the face. With a chair.",
    "Don't let your mind wander - it might not come back.",
    "You are always welcome in any gathering, so let's crash some weddings.",
    "Luck is coming your way though it may be good or bad.",
    "The news repeats itself so often they should call it the olds."
];

const cookie = document.getElementById('cookie');
const openCookie = document.getElementById('open-cookie');
const fortune = document.getElementById('fortune');
const btnFortune = document.getElementById('btn-fortune');

let deck = misfortunes.slice();

const shuffle = (array) => {
    let currentIndex = array.length;
    let randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    };
};

btnFortune.addEventListener("click", function(){
    if (btnFortune.innerText === "Open Fortune Cookie"){
        let index = Math.floor(Math.random() * deck.length);
        shuffle(deck);
        let message = deck[index];
        fortune.innerText = message;
        cookie.classList.add("open");
        openCookie.classList.add("reveal");
        fortune.classList.add("reveal");
        setTimeout(function(){ 
            btnFortune.innerText = "Get Another Cookie";  
        }, 3000);      
    } else {
        cookie.classList.remove("open");
        openCookie.classList.remove("reveal");
        fortune.classList.remove("reveal");
        btnFortune.innerText = "Open Fortune Cookie";
    }
});