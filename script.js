document.addEventListener("mousemove", (event) => {
        const trail = document.createElement("div");
        trail.classList.add("trail");
        document.body.appendChild(trail);
    
        // Positionne la particule au niveau du curseur
        trail.style.left = `${event.clientX - 7}px`;
        trail.style.top = `${event.clientY - 7}px`;
    
        // Disparaît progressivement
        setTimeout(() => {
            trail.style.opacity = "0";
            setTimeout(() => {
                trail.remove();
            }, 200);
        }, 100);
    });

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.setAttribute("style", "top: "+ (e.pageY - 10)+ "px; left: "+ (e.pageX - 10)+ "px;");
});

document.addEventListener('click', () => {
    cursor.classList.toggle('active');
});