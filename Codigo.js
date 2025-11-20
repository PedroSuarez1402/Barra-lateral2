const btnToggle = document.getElementById('btn-toggle');
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');
const darkSwitch = document.getElementById('darkSwitch');

// Crear overlay
const overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);

// =======================
// ABRIR / CERRAR MENÚ
// =======================
btnToggle.addEventListener('click', () => {
    const isMobile = window.innerWidth <= 768;

    sidebar.classList.toggle('active');

    if (!isMobile) {
        content.classList.toggle('move');
    } else {
        overlay.classList.toggle("show");
    }
});

// Cerrar tocando fuera en móvil
overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("show");
});

// =======================
// SUBMENÚS
// =======================
document.querySelectorAll(".submenu-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.parentElement.classList.toggle("open");
    });
});

// =======================
// DARK MODE
// =======================
darkSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});
