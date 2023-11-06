const ulBees = document.querySelector("ul.bees");

for (let i = 0; i < 11; i++) {
    const li = document.createElement("li");

    // cria uma funcao para random
    const random = (min, max) => Math.random() * (max - min) + min


    // cria um tamanhos diferentes
    const size = Math.floor(random(40, 100));

    // cria posicionamentos diferentes
    const position = random(1, 99);

    // cria delays diferentes
    const delay = random(3, 0.1);

    // cria duracoes diferentes
    const duration = random(24, 12);


    // cria alturas e larguras randomicas
    li.style.width = `${size}px`;
    li.style.height = `${size}px`;

    // cria posicoes randomicas
    li.style.left = `${position}%`;

    // sair em momentos diferentes
    li.style.animationDelay = `${delay}s`

    // possuir duracoes diferentes
    li.style.animationDuration = `${duration}s`

    // cria timings diferentes
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`

    ulBees.appendChild(li);
}