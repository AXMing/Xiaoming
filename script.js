// 分院帽测试器 - JavaScript

// 题目数据
const questions = [
    {
        question: "当你面对困难时，你通常会怎么做？",
        options: [
            { text: "勇敢地面对，毫不退缩", house: "gryffindor" },
            { text: "冷静分析，制定策略", house: "slytherin" },
            { text: "寻求智慧，查阅资料", house: "ravenclaw" },
            { text: "坚持不懈，脚踏实地", house: "hufflepuff" }
        ]
    },
    {
        question: "你最看重以下哪种品质？",
        options: [
            { text: "勇气和胆识", house: "gryffindor" },
            { text: "野心和决心", house: "slytherin" },
            { text: "智慧和学识", house: "ravenclaw" },
            { text: "忠诚和耐心", house: "hufflepuff" }
        ]
    },
    {
        question: "在霍格沃茨，你最想去哪里探索？",
        options: [
            { text: "禁林，寻找冒险", house: "gryffindor" },
            { text: "斯莱特林地牢的秘密房间", house: "slytherin" },
            { text: "图书馆的禁书区", house: "ravenclaw" },
            { text: "厨房，和小精灵们交朋友", house: "hufflepuff" }
        ]
    },
    {
        question: "如果你有一根魔杖，你会用它来做什么？",
        options: [
            { text: "保护朋友和家人", house: "gryffindor" },
            { text: "获得权力和影响力", house: "slytherin" },
            { text: "探索未知的魔法知识", house: "ravenclaw" },
            { text: "帮助需要帮助的人", house: "hufflepuff" }
        ]
    },
    {
        question: "你的朋友遇到困难时，你会怎么做？",
        options: [
            { text: "立刻冲上去帮忙，不管危险", house: "gryffindor" },
            { text: "评估情况，选择最佳方案", house: "slytherin" },
            { text: "提供智慧的建议和解决方案", house: "ravenclaw" },
            { text: "一直陪伴在身边，给予支持", house: "hufflepuff" }
        ]
    },
    {
        question: "你最喜欢的魔法课程是什么？",
        options: [
            { text: "黑魔法防御术", house: "gryffindor" },
            { text: "魔药学", house: "slytherin" },
            { text: "变形术或古代魔文", house: "ravenclaw" },
            { text: "草药学或保护神奇生物", house: "hufflepuff" }
        ]
    },
    {
        question: "如果你可以拥有一种魔法能力，你会选择什么？",
        options: [
            { text: "无敌的勇气和战斗能力", house: "gryffindor" },
            { text: "读心术或说服他人的能力", house: "slytherin" },
            { text: "过目不忘和超凡的智慧", house: "ravenclaw" },
            { text: "治愈他人和与自然沟通", house: "hufflepuff" }
        ]
    },
    {
        question: "面对不公平的事情，你会怎么做？",
        options: [
            { text: "挺身而出，为正义而战", house: "gryffindor" },
            { text: "利用规则为自己争取利益", house: "slytherin" },
            { text: "理性分析，找出最佳解决方案", house: "ravenclaw" },
            { text: "默默努力，用实际行动改变", house: "hufflepuff" }
        ]
    }
];

// 学院信息
const houses = {
    gryffindor: {
        name: "格兰芬多",
        crest: "🦁",
        traits: "勇气 · 胆识 · 骑士精神",
        description: "欢迎来到格兰芬多！你拥有无畏的勇气和坚定的信念。在这里，你会找到愿意为你赴汤蹈火的朋友。记住，真正的勇气不是无所畏惧，而是即使害怕也要前行。",
        color: "#D3A625"
    },
    slytherin: {
        name: "斯莱特林",
        crest: "🐍",
        traits: "野心 · 狡黠 · 领导才能",
        description: "欢迎来到斯莱特林！你拥有远大的抱负和实现目标的决心。在这里，你会学会如何利用自己的优势，达成伟大的成就。记住，野心不是贬义词，它是成功的动力。",
        color: "#5a8c6a"
    },
    ravenclaw: {
        name: "拉文克劳",
        crest: "🦅",
        traits: "智慧 · 学识 · 机智",
        description: "欢迎来到拉文克劳！你拥有敏锐的思维和对知识的渴望。在这里，你会与最聪明的人为伍，探索魔法的奥秘。记住，智慧是人类最伟大的力量。",
        color: "#6a8ccc"
    },
    hufflepuff: {
        name: "赫奇帕奇",
        crest: "🦡",
        traits: "忠诚 · 耐心 · 公正",
        description: "欢迎来到赫奇帕奇！你拥有善良的心和坚定的忠诚。在这里，你会找到最真诚的朋友和最温暖的家。记住，善良和勤奋同样值得尊敬。",
        color: "#ECB939"
    }
};

// 思考时的台词
const thinkingQuotes = [
    "嗯... 让我想想...",
    "有趣... 非常有趣...",
    "难办... 难办...",
    "我看到了... 我看到了...",
    "你很有潜力...",
    "让我再看看你的内心...",
    "啊... 原来如此...",
    "这很罕见... 非常罕见..."
];

// 状态变量
let currentQuestion = 0;
let scores = {
    gryffindor: 0,
    slytherin: 0,
    ravenclaw: 0,
    hufflepuff: 0
};

// DOM 元素
const screens = {
    welcome: document.getElementById('welcome-screen'),
    quiz: document.getElementById('quiz-screen'),
    thinking: document.getElementById('thinking-screen'),
    result: document.getElementById('result-screen')
};

// 初始化
function init() {
    createParticles();
    createStars();
}

// 创建魔法粒子
function createParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (8 + Math.random() * 6) + 's';
        container.appendChild(particle);
    }
}

// 创建星星背景
function createStars() {
    const body = document.body;
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (2 + Math.random() * 2) + 's';
        starsContainer.appendChild(star);
    }
    
    body.insertBefore(starsContainer, body.firstChild);
}

// 切换屏幕
function switchScreen(screenName) {
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    screens[screenName].classList.add('active');
}

// 开始测试
function startQuiz() {
    playMagicSound();
    currentQuestion = 0;
    scores = {
        gryffindor: 0,
        slytherin: 0,
        ravenclaw: 0,
        hufflepuff: 0
    };
    switchScreen('quiz');
    showQuestion();
}

// 显示问题
function showQuestion() {
    const question = questions[currentQuestion];
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.getElementById('progress-text');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    
    // 更新进度
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.setProperty('--progress', progress + '%');
    progressBar.querySelector('::after') && (progressBar.style.width = progress + '%');
    progressText.textContent = `${currentQuestion + 1} / ${questions.length}`;
    
    // 更新问题文本
    questionText.textContent = question.question;
    
    // 更新选项
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option.text;
        btn.style.animationDelay = (index * 0.1) + 's';
        btn.onclick = () => selectOption(option.house);
        optionsContainer.appendChild(btn);
    });
}

// 选择选项
function selectOption(house) {
    playMagicSound();
    scores[house]++;
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showThinking();
    }
}

// 显示思考页面
function showThinking() {
    switchScreen('thinking');
    
    const thinkingText = document.getElementById('thinking-text');
    let quoteIndex = 0;
    
    // 随机更换台词
    const quoteInterval = setInterval(() => {
        thinkingText.textContent = thinkingQuotes[Math.floor(Math.random() * thinkingQuotes.length)];
    }, 1500);
    
    // 3秒后显示结果
    setTimeout(() => {
        clearInterval(quoteInterval);
        showResult();
    }, 4000);
}

// 显示结果
function showResult() {
    switchScreen('result');
    
    // 计算得分最高的学院
    let maxScore = 0;
    let winningHouse = '';
    
    for (const [house, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            winningHouse = house;
        }
    }
    
    // 如果平分，随机选择一个
    const topHouses = Object.entries(scores)
        .filter(([_, score]) => score === maxScore)
        .map(([house, _]) => house);
    
    if (topHouses.length > 1) {
        winningHouse = topHouses[Math.floor(Math.random() * topHouses.length)];
    }
    
    const house = houses[winningHouse];
    
    // 更新结果页面
    const announcement = document.getElementById('announcement');
    const houseResult = document.getElementById('house-result');
    const houseCrest = document.getElementById('house-crest');
    const houseName = document.getElementById('house-name');
    const houseTraits = document.getElementById('house-traits');
    const houseDescription = document.getElementById('house-description');
    
    // 分院帽宣布
    setTimeout(() => {
        announcement.textContent = "决定了！";
    }, 500);
    
    setTimeout(() => {
        announcement.textContent = `"${house.name}！"`;
        playMagicSound();
    }, 1500);
    
    // 设置学院信息
    houseResult.className = 'house-result house-' + winningHouse;
    houseCrest.textContent = house.crest;
    houseName.textContent = house.name;
    houseTraits.textContent = house.traits;
    houseDescription.textContent = house.description;
    
    // 添加魔法效果
    createResultParticles(house.color);
}

// 创建结果页面的魔法粒子
function createResultParticles(color) {
    const container = document.getElementById('result-screen');
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 8px;
                height: 8px;
                background: ${color};
                border-radius: 50%;
                pointer-events: none;
                left: 50%;
                top: 50%;
                box-shadow: 0 0 10px ${color};
            `;
            
            const angle = (Math.PI * 2 * i) / 20;
            const velocity = 100 + Math.random() * 100;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            particle.animate([
                { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
                { transform: `translate(calc(-50% + ${vx}px), calc(-50% + ${vy}px)) scale(0)`, opacity: 0 }
            ], {
                duration: 1000 + Math.random() * 500,
                easing: 'cubic-bezier(0, .9, .57, 1)'
            }).onfinish = () => particle.remove();
            
            container.appendChild(particle);
        }, i * 50);
    }
}

// 播放魔法音效
function playMagicSound() {
    const audio = document.getElementById('magic-sound');
    audio.volume = 0.3;
    audio.currentTime = 0;
    audio.play().catch(() => {
        // 如果自动播放被阻止，静默处理
    });
}

// 分享结果
function shareResult() {
    const houseName = document.getElementById('house-name').textContent;
    const houseTraits = document.getElementById('house-traits').textContent;
    
    const shareText = `我在霍格沃茨分院帽测试中被分到了${houseName}！\n\n我的特质是：${houseTraits}\n\n来测测你属于哪个学院吧！`;
    
    if (navigator.share) {
        navigator.share({
            title: '分院帽测试结果',
            text: shareText
        }).catch(() => {
            copyToClipboard(shareText);
        });
    } else {
        copyToClipboard(shareText);
    }
}

// 复制到剪贴板
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('结果已复制到剪贴板！');
    }).catch(() => {
        alert('复制失败，请手动复制。');
    });
}

// 重新测试
function restartQuiz() {
    playMagicSound();
    startQuiz();
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);

// 添加键盘支持
document.addEventListener('keydown', (e) => {
    if (screens.quiz.classList.contains('active')) {
        const options = document.querySelectorAll('.option-btn');
        const key = parseInt(e.key);
        if (key >= 1 && key <= options.length) {
            options[key - 1].click();
        }
    }
});
