let currentLang = 'es';
let currentGameIndex = 0;
let currentGameState = 'grid'; 
let isAnimating = false; 

const uiTexts = {
    es: {
        role: "Ingeniero de Software <span class='text-red-600'>/</span> Game Dev",
        tagline: "Forjando código. Creando mundos.",
        scroll: "Scroll para explorar",
        p_tag: "// El Perfil",
        p_title: "Sistemas & <span class='text-red-600 word-glitch' data-text='Mundos'>Mundos</span>.",
        p_desc1: "Soy <span class='text-white font-bold'>Alvaro Roldan</span>, estudiante de Ingeniería de Software en la <span class='text-white'>UTP</span>. Mi formación técnica es el pilar que me permite desarrollar experiencias interactivas donde la arquitectura de sistemas y la narrativa convergen.",
        p_desc2: "Analizo los videojuegos no solo como entretenimiento, sino como <span class='text-red-500 italic glitch-hover'>sistemas lógicos complejos</span>. Esta visión me permite aplicar la misma rigurosidad a la optimización de una base de datos que al diseño de mecánicas en <span class='text-white font-medium'>motores de videojuegos</span>.",
        p_desc3: "Mi meta es clara: Crear una fusion de la solidez de la ingeniería con la capacidad de asombro del gaming para crear <span class='text-white italic'>productos digitales memorables.</span>",
        p_card1_t: "Ingeniería de Software",
        p_card1_d: "Estructura, algoritmos y soluciones escalables desarrolladas con rigor técnico.",
        p_card2_t: "Game Development",
        p_card2_d: "Creación de mecánicas y sistemas inspirados en la profundidad de los RPGs japoneses.",
        p_card3_t: "PASANTE DE QA DE JUEGOS",
        p_card3_d: "En Battlebucks, empresa india de desarrollo de videojuegos.",
        projects_header: "Selecciona un Área ↓",
        pill_sw: "Soluciones de<br>Software",
        pill_game: "Desarrollo de<br>Videojuegos",
        back: "✕ Regresar",
        stack_tag: "// System Capabilities",
        stack_title: "Stack <span class='text-red-600'>Tecnológico</span>.",
        stack_cat1: "Lenguajes",
        stack_cat2: "Frameworks / Web",
        stack_cat3: "Game Dev",
        stack_cat4: "Infraestructura",
        footer_ideas: "Listo para <span class='text-red-600'>nuevas ideas</span>",
        footer_colab: "Abierto a colaboraciones y proyectos de impacto.",
        footer_rights: "© 2026 Alvaro Roldan // Lima, Perú",
        btn_play: "Jugar Ahora",
        btn_repo: "Repositorio",
        game_catalog_title: "Archivo de <br><span class='text-white drop-shadow-md'>Proyectos</span>",
        btn_next: "Siguiente Proyecto →",
        btn_code: "Ver Código"
    },
    en: {
        role: "Software Engineer <span class='text-red-600'>/</span> Game Dev",
        tagline: "Forging code. Creating worlds.",
        scroll: "Scroll to explore",
        p_tag: "// The Profile",
        p_title: "Systems & <span class='text-red-600 word-glitch' data-text='Worlds'>Worlds</span>.",
        p_desc1: "I'm <span class='text-white font-bold'>Alvaro Roldan</span>, a Software Engineering student at <span class='text-white'>UTP</span>. My technical background allows me to develop interactive experiences where systems architecture and narrative converge.",
        p_desc2: "I analyze video games not just as entertainment, but as <span class='text-red-500 italic glitch-hover'>complex logical systems</span>. This vision allows me to apply the same rigor to database optimization as to mechanic design in <span class='text-white font-medium'>game engines</span>.",
        p_desc3: "My goal is clear: Create a fusion of engineering solidity with the wonder of gaming to create <span class='text-white italic'>memorable digital products.</span>",
        p_card1_t: "Software Engineering",
        p_card1_d: "Structure, algorithms, and scalable solutions developed with technical rigor.",
        p_card2_t: "Game Development",
        p_card2_d: "Creation of mechanics and systems inspired by the depth of Japanese RPGs.",
        p_card3_t: "Game QA Intern",
        p_card3_d: "At Battlebucks, an Indian video game development company.",
        projects_header: "Select an Area ↓",
        pill_sw: "Software<br>Solutions",
        pill_game: "Game<br>Development",
        back: "✕ Return",
        stack_tag: "// System Capabilities",
        stack_title: "Tech <span class='text-red-600'>Stack</span>.",
        stack_cat1: "Languages",
        stack_cat2: "Frameworks / Web",
        stack_cat3: "Game Dev",
        stack_cat4: "Infrastructure",
        footer_ideas: "Ready for <span class='text-red-600'>new ideas</span>",
        footer_colab: "Open to collaborations and high-impact projects.",
        footer_rights: "© 2026 Alvaro Roldan // Lima, Peru",
        btn_play: "Play Now",
        btn_repo: "Repository",
        game_catalog_title: "Project <br><span class='text-white drop-shadow-md'>Archive</span>",
        btn_next: "Next Project →",
        btn_code: "View Code"
    }
};

const softwareProjects = {
    checkdent: {
        title: "Checkdent",
        desc_es: "Asistente digital para gestión odontológica. Automatiza la agenda clínica y ofrece seguimiento inteligente post-tratamiento.",
        desc_en: "Digital assistant for dental management. Automates clinical scheduling and offers intelligent post-treatment follow-up.",
        tech: "Flutter, Dart, Node.js, MongoDB, Firebase FCM", 
        imgPrefix: "checkdent",
        repo: "https://github.com/Zer0LoL/checkdent"
    },
    vacunafeliz: {
        title: "VacunaFeliz",
        desc_es: "Plataforma web para el registro y consulta segura del historial de vacunación infantil.",
        desc_en: "Web platform for the secure registration and consultation of child vaccination history.",
        tech: "React.js, Spring Boot (Java), MySQL, Bootstrap",
        imgPrefix: "vacuna",
        repo: "https://1drv.ms/u/c/7cebbef8014e71db/IQAj1tONBj__RZxnCp_xFNbhAXpJ1Nn2qrfyvgiHegLn4Rc?e=cs147G"
    },
    steamlocked: {
        title: "Steamlocked",
        desc_es: "E-commerce de juegos digitales con un sistema social de amistades integrado.",
        desc_en: "Digital game e-commerce with an integrated social friendship system.",
        tech: "Java, Spring Boot, JPA, MySQL",
        imgPrefix: "steamlocked",
        repo: "https://1drv.ms/u/c/7cebbef8014e71db/IQBrjpTKYvOBQ4EfPB1N0QoFAUJjankpAl2QZ555ckhA1r8?e=QP2IEx"
    },
    "ia-web": {
        title: "Web Informativa IA",
        desc_es: "Landing page sobre el futuro de la IA con animaciones fluidas y diseño responsivo.",
        desc_en: "Landing page about the future of AI with fluid animations and responsive design.",
        tech: "Tailwind CSS, HTML5, JavaScript",
        imgPrefix: "ia",
        repo: "https://github.com/Zer0LoL/IApage"
    }
};

const gamesData = [
    {
        title: "Krow Inc.",
        desc_es: "Juego de gestión desarrollado para la Gamedev.js Jam 2026. Reconocido por jurado en el desafio Wavedash. Lideré la programación y arquitectura de UI enfocada en bucles de juego rápidos.",
        desc_en: "Management minigame developed for the Gamedev.js Jam 2026. Recognized by the jury in the Wavedash challenge. Led programming and UI architecture focused on rapid gameplay loops.",
        poster: "krowinc_miniatura.png",
        supportImage: "krowinc_gameplay.png",
        tech: "Godot 4.6.1, Spine2D",
        tag_es: "Gamedev.js Jam 2026",
        tag_en: "Gamedev.js Jam 2026",
        play: "https://zer0lul.itch.io/krow-inc", 
        repo: "https://github.com/Zer0LoL/button-game" 
    },
    {
        title: "Under Your Mask",
        desc_es: "Mi primera participación en la Global Game Jam (2026). Un accion-aventura 2D en pixel art desarrollado en solitario en 4 días.",
        desc_en: "My first entry for Global Game Jam (2026). A 2D pixel art action-adventure solo-developed in 4 days.",
        poster: "uymminiatura.png",
        supportImage: "uymgameplay.png",
        tech: "Godot Engine 4, C#/GDScript",
        tag_es: "Global Game Jam 2026",
        tag_en: "Global Game Jam 2026",
        play: "https://zer0lul.itch.io/under-your-mask", 
        repo: "https://github.com/Zer0LoL/under-your-mask"
    },
    {
        title: "Oro Manchado",
        desc_es: "Un proyecto donde la codicia tiene un precio. Sistema de mecánicas intensas y una fuerte carga de narrativa visual y combate.",
        desc_en: "A project where greed has a price. Intense mechanics system and a heavy load of visual narrative and combat.",
        poster: "oromanchado_miniatura.jpg",
        supportImage: "oromanchado_gameplay.png",
        tech: "Unity, C#, FMOD",
        tag_es: "Telar Workshop 2026",
        tag_en: "Telar Workshop 2026",
        play: "https://eanxt.itch.io/oro-manchado", 
        repo: "https://github.com/Jharvichu/MineScroll-Telar2026"
    },
    {
        title: "After the Tremor",
        desc_es: "Storyquest narrativo ambiental desarrollado en el programa Gamelab 5.0 de la UTP. Un viaje emocional post-desastre.",
        desc_en: "Atmospheric narrative storyquest developed in the UTP Gamelab 5.0 program. An emotional post-disaster journey.",
        video: "afterthetremortrailer.mp4",
        poster: "afterthetremorminiatura.png",
        supportImage: "afterthetremor1.png",  
        tech: "Godot Engine, GDScript",
        tag_es: "Game Lab 5.0",
        tag_en: "Game Lab 5.0",
        play: "https://game-lab-5-0-utp-group-4-team-4.github.io/threadbare", 
        repo: "https://github.com/Game-Lab-5-0-UTP-Group-4-Team-4/threadbare"
    },
    {
        title: "Coffee Catcher",
        desc_es: "Minijuego arcade de habilidad con Leaderboard global. Desarrollado para una cafetería, integrando arquitectura de datos.",
        desc_en: "Arcade skill mini-game with global Leaderboard. Developed for a coffee shop, integrating data architecture.",
        poster: "cafe.png", 
        supportImage: "",
        tech: "JavaScript, TypeScript, SQL",
        tag_es: "Web Mini-game",
        tag_en: "Web Mini-game",
        play: "https://zer0lol.github.io/cafeminijuego/",
        repo: "https://github.com/Zer0LoL/cafeminijuego"
    }
];

function toggleLanguage(lang) {
    currentLang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (uiTexts[lang][key]) {
            el.innerHTML = uiTexts[lang][key];
        }
    });

    document.getElementById('btn-es').className = lang === 'es' ? 'px-3 py-1 text-[10px] font-black uppercase bg-red-600 text-white rounded-full transition-all' : 'px-3 py-1 text-[10px] font-black text-neutral-500 hover:text-white transition-all';
    document.getElementById('btn-en').className = lang === 'en' ? 'px-3 py-1 text-[10px] font-black uppercase bg-red-600 text-white rounded-full transition-all' : 'px-3 py-1 text-[10px] font-black text-neutral-500 hover:text-white transition-all';

    const contentSW = document.getElementById('content-sw');
    const contentGame = document.getElementById('content-game');
    
    if (!contentSW.classList.contains('hidden')) {
        const activeBtn = Array.from(document.querySelectorAll('.project-item')).find(btn => btn.classList.contains('bg-red-600/10'));
        if (activeBtn) {
            const projectId = activeBtn.id.replace('btn-', '');
            showProject(projectId);
        }
    }
    if (!contentGame.classList.contains('hidden')) {
        if (currentGameState === 'grid') renderGameGrid();
        else renderGaming();
    }
}

function expandir(tipo) {
    if (isAnimating) return; 

    const colSW = document.getElementById('col-sw');
    const colGame = document.getElementById('col-game');

    if (tipo === 'sw' && colSW.classList.contains('expanded-full')) return;
    if (tipo === 'game' && colGame.classList.contains('expanded-full')) return;

    isAnimating = true;
    const contentSW = document.getElementById('content-sw');
    const contentGame = document.getElementById('content-game');

    if(tipo === 'sw') {
        colSW.classList.add('expanded-full', 'show-content');
        colGame.classList.add('hidden-column');
        setTimeout(() => { 
            contentSW.classList.remove('hidden'); 
            showProject('checkdent'); 
            isAnimating = false; 
        }, 600);
    } else {
        colGame.classList.add('expanded-full', 'show-content');
        colSW.classList.add('hidden-column');
        setTimeout(() => { 
            contentGame.classList.remove('hidden'); 
            renderGameGrid(); 
            document.getElementById('game-grid-view').classList.add('view-active');
            document.getElementById('game-grid-view').classList.remove('view-hidden', 'hidden');
            document.getElementById('game-detail-view').classList.add('hidden', 'view-hidden');
            document.getElementById('game-detail-view').classList.remove('view-active', 'flex');
            isAnimating = false; 
        }, 600);
    }
}

function regresar() {
    if (isAnimating) return; 
    isAnimating = true;

    const colSW = document.getElementById('col-sw');
    const colGame = document.getElementById('col-game');
    const contentSW = document.getElementById('content-sw');
    const contentGame = document.getElementById('content-game');

    if (!contentGame.classList.contains('hidden') && currentGameState === 'detail') {
        currentGameState = 'grid';
        document.getElementById('game-detail-view').classList.remove('view-active');
        document.getElementById('game-detail-view').classList.add('view-hidden');
        
        setTimeout(() => {
            document.getElementById('game-detail-view').classList.add('hidden');
            document.getElementById('game-detail-view').classList.remove('flex');
            document.getElementById('game-grid-view').classList.remove('hidden', 'view-hidden');
            document.getElementById('game-grid-view').classList.add('view-active');
            isAnimating = false; 
        }, 400);
        return; 
    }

    contentSW.classList.add('hidden');
    contentGame.classList.add('hidden');

    colSW.classList.remove('expanded-full', 'show-content', 'hidden-column');
    colGame.classList.remove('expanded-full', 'show-content', 'hidden-column');
    
    currentGameState = 'grid';
    
    setTimeout(() => {
        isAnimating = false; 
    }, 600);
}

function renderGameGrid() {
    const gridContainer = document.getElementById('game-grid-container');
    if (!gridContainer) return;
    gridContainer.innerHTML = '';

    gamesData.forEach((game, index) => {
        gridContainer.innerHTML += `
            <div onclick="event.stopPropagation(); openGameDetail(${index})" class="game-thumb-card relative rounded-2xl overflow-hidden shadow-2xl aspect-video group">
                <img src="${game.poster}" alt="Thumbnail" class="w-full h-full object-cover absolute inset-0 z-0">
            </div>
        `;
    });
}

function openGameDetail(index) {
    if (isAnimating) return;
    isAnimating = true;

    currentGameIndex = index;
    currentGameState = 'detail';
    
    document.getElementById('game-grid-view').classList.remove('view-active');
    document.getElementById('game-grid-view').classList.add('view-hidden');
    
    setTimeout(() => {
        document.getElementById('game-grid-view').classList.add('hidden');
        renderGaming();
        document.getElementById('game-detail-view').classList.remove('hidden', 'view-hidden');
        document.getElementById('game-detail-view').classList.add('view-active', 'flex');
        isAnimating = false;
    }, 400); 
}

function showProject(id) {
    const p = softwareProjects[id];
    const container = document.getElementById('project-detail-sw');
    
    document.querySelectorAll('.project-item').forEach(el => {
        el.classList.remove('bg-red-600/10', 'border-red-600');
        el.classList.add('bg-neutral-900', 'border-neutral-800');
    });
    const activeBtn = document.getElementById('btn-' + id);
    if(activeBtn) {
        activeBtn.classList.remove('bg-neutral-900', 'border-neutral-800');
        activeBtn.classList.add('bg-red-600/10', 'border-red-600');
    }

    const description = currentLang === 'es' ? p.desc_es : p.desc_en;
    const btnCodeText = uiTexts[currentLang].btn_code;

    container.innerHTML = `
        <h2 class="text-5xl font-black uppercase italic text-red-600 mb-4">${p.title}</h2>
        <p class="text-gray-300 text-lg leading-relaxed mb-6">${description}</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/30 flex items-center justify-center h-64 md:h-80"><img src="${p.imgPrefix}1.png" alt="${p.title} 1" class="max-w-full max-h-full object-cover group-hover:scale-105 transition-transform duration-500"></div>
            <div class="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/30 flex items-center justify-center h-64 md:h-80"><img src="${p.imgPrefix}2.png" alt="${p.title} 2" class="max-w-full max-h-full object-cover group-hover:scale-105 transition-transform duration-500"></div>
            <div class="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/30 flex items-center justify-center h-64 md:h-80"><img src="${p.imgPrefix}3.png" alt="${p.title} 3" class="max-w-full max-h-full object-cover group-hover:scale-105 transition-transform duration-500"></div>
        </div>
        <div class="mb-10"> 
            <h4 class="text-xs font-bold text-red-500 uppercase tracking-widest mb-2">Stack</h4>
            <p class="text-sm font-mono text-gray-400">${p.tech}</p>
        </div>
        <div class="pt-6"> 
            <a href="${p.repo}" target="_blank" class="px-10 py-4 bg-red-600 text-white font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">${btnCodeText}</a>
        </div>
    `;
}

function renderGaming() {
    const game = gamesData[currentGameIndex];
    const container = document.getElementById('project-detail-game');
    
    const description = currentLang === 'es' ? game.desc_es : game.desc_en;
    const tag = currentLang === 'es' ? game.tag_es : game.tag_en;
    const btnPlayText = uiTexts[currentLang].btn_play;
    const btnRepoText = uiTexts[currentLang].btn_repo;
    const btnNextText = uiTexts[currentLang].btn_next;

    const mainMediaHtml = game.video 
        ? `<video src="${game.video}" controls poster="${game.poster}" class="w-full h-full object-cover shadow-[0_0_20px_rgba(0,0,0,0.5)]"></video>`
        : `<img src="${game.poster}" alt="${game.title}" class="w-full h-full object-cover">`;

    container.innerHTML = `
        <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="md:w-1/2">
                <span class="bg-black text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">${tag}</span>
                <h2 class="text-6xl md:text-7xl font-black uppercase italic leading-none my-6">${game.title}</h2>
                <p class="text-black text-xl mb-4 font-medium">${description}</p>
                <p class="text-black/60 text-sm font-mono mb-8 italic">${game.tech}</p>
                <div class="flex flex-wrap gap-4">
                    <a href="${game.play}" target="_blank" class="px-8 py-3 bg-black text-white font-bold uppercase text-xs hover:bg-neutral-800 transition-all text-center">${btnPlayText}</a>
                    <a href="${game.repo}" target="_blank" class="px-8 py-3 border-2 border-black font-bold uppercase text-xs hover:bg-black hover:text-white transition-all text-center">${btnRepoText}</a>
                    ${gamesData.length > 1 ? `<button onclick="nextGame()" class="px-8 py-3 bg-white/20 border-2 border-dashed border-black font-black uppercase text-xs hover:bg-black hover:text-white transition-all">${btnNextText}</button>` : ''}
                </div>
            </div>
            <div class="md:w-1/2 grid grid-cols-1 gap-4">
                <div class="h-80 bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-black relative">
                    ${mainMediaHtml}
                </div>
                ${game.supportImage ? `
                <div class="h-32 bg-black/10 border-2 border-black/20 rounded-3xl overflow-hidden group">
                    <img src="${game.supportImage}" alt="Support" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105">
                </div>` : ''}
            </div>
        </div>
    `;
}

function nextGame() {
    if (isAnimating) return;
    currentGameIndex = (currentGameIndex + 1) % gamesData.length;
    
    const container = document.getElementById('project-detail-game');
    container.classList.add('opacity-0');
    setTimeout(() => {
        renderGaming();
        container.classList.remove('opacity-0');
        container.classList.add('transition-opacity', 'duration-500');
    }, 300);
}