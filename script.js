const ramos = [
    // Semestre 1
    { id: "FIS1", name: "FÍSICA 1", sem: 1, credits: 4, req: [] },
    { id: "ALG1", name: "ÁLGEBRA 1", sem: 1, credits: 5, req: [] },
    { id: "CAL1", name: "CÁLCULO 1", sem: 1, credits: 5, req: [] },
    { id: "QUI1", name: "QUÍMICA GENERAL 1", sem: 1, credits: 5, req: [] },
    { id: "INT1", name: "INTRODUCCIÓN A LA ING. QUÍMICA", sem: 1, credits: 2, req: [] },
    // Semestre 2
    { id: "FIS2", name: "FÍSICA 2", sem: 2, credits: 4, req: [] },
    { id: "ALG2", name: "ÁLGEBRA 2", sem: 2, credits: 5, req: [] },
    { id: "CAL2", name: "CÁLCULO 2", sem: 2, credits: 5, req: [] },
    { id: "QUI2", name: "QUÍMICA GENERAL 2", sem: 2, credits: 4, req: [] },
    { id: "INN1", name: "INTRO A LA INNOVACIÓN", sem: 2, credits: 2, req: [] },
    // Semestre 3
    { id: "CAL3", name: "CÁLCULO 3", sem: 3, credits: 5, req: [] },
    { id: "EDO", name: "EDO", sem: 3, credits: 4, req: [] },
    { id: "MEC", name: "MECÁNICA", sem: 3, credits: 4, req: [] },
    { id: "BME", name: "BALANCE MATERIA Y ENERGÍA", sem: 3, credits: 4, req: [] },
    { id: "PROG", name: "PROGRAMACIÓN", sem: 3, credits: 3, req: [] },
    { id: "C1", name: "COMPLEMENTARIO 1", sem: 3, credits: 3, req: [] },
    // Semestre 4
    { id: "TER1", name: "TERMODINÁMICA", sem: 4, credits: 4, req: ["BME"] },
    { id: "FLU", name: "MECÁNICA DE FLUIDOS", sem: 4, credits: 5, req: [] },
    { id: "TI1", name: "TALLER DE INTEGRACIÓN 1", sem: 4, credits: 2, req: [] },
    { id: "CNUM", name: "CÁLCULO NUMÉRICO", sem: 4, credits: 4, req: [] },
    { id: "C2", name: "COMPLEMENTARIO 2", sem: 4, credits: 6, req: [] },
    // Semestre 5
    { id: "QORG", name: "QUÍMICA ORGÁNICA", sem: 5, credits: 4, req: [] },
    { id: "TMEZ", name: "TERMODINÁMICA DE MEZCLAS", sem: 5, credits: 4, req: ["TER1"] },
    { id: "TCAL", name: "TRANSFERENCIA DE CALOR", sem: 5, credits: 4, req: [] },
    { id: "LID", name: "LIDERAZGO Y COMUNICACIÓN", sem: 5, credits: 3, req: [] },
    { id: "PRAC1", name: "PRÁCTICA LABORAL", sem: 5, credits: 2, req: [] },
    { id: "C3", name: "COMPLEMENTARIA 3", sem: 5, credits: 2, req: [] },
    // Semestre 6
    { id: "EST", name: "ESTADÍSTICA Y PROB.", sem: 6, credits: 4, req: [] },
    { id: "TSUP", name: "TERMODINÁMICA DE SUPERFICIES", sem: 6, credits: 4, req: ["TMEZ"] },
    { id: "TMAT", name: "TRANSFERENCIA DE MATERIA", sem: 6, credits: 4, req: ["TMEZ"] },
    { id: "INNO", name: "INNOVACIÓN", sem: 6, credits: 3, req: [] },
    { id: "TI2", name: "TALLER DE INTEGRACIÓN 2", sem: 6, credits: 2, req: ["TCAL"] },
    { id: "C4", name: "COMPLEMENTARIA 4", sem: 6, credits: 2, req: [] },
    // Semestre 7
    { id: "ECO", name: "ECONOMÍA", sem: 7, credits: 4, req: [] },
    { id: "DRQ", name: "DISEÑO DE REACTORES", sem: 7, credits: 5, req: ["TSUP"] },
    { id: "DCON", name: "DINÁMICA Y CONTROL", sem: 7, credits: 5, req: ["TMAT"] },
    { id: "LABP", name: "LAB. PROCESOS QUÍMICOS", sem: 7, credits: 3, req: ["DRQ", "TMAT"] },
    { id: "ING1", name: "INGLÉS 1", sem: 7, credits: 3, req: [] },
    // Semestre 8
    { id: "OSEP", name: "OPERACIONES DE SEPARACIÓN", sem: 8, credits: 3, req: ["TMAT"] },
    { id: "SOPT", name: "SÍNTESIS Y OPTIMIZACIÓN", sem: 8, credits: 4, req: ["DRQ"] },
    { id: "ING2", name: "INGLÉS 2", sem: 8, credits: 3, req: [] },
    { id: "TI3", name: "TALLER DE INTEGRACIÓN 3", sem: 8, credits: 2, req: ["DRQ"] },
    { id: "E1", name: "ELECTIVA 1", sem: 8, credits: 6, req: [] },
    // Semestre 9
    { id: "FEVAL", name: "FORMULACIÓN Y EVAL. PROYECTOS", sem: 9, credits: 4, req: [] },
    { id: "PROY1", name: "PROYECTO 1", sem: 9, credits: 4, req: ["SOPT"] },
    { id: "SUST", name: "INTRO SUSTENTABILIDAD", sem: 9, credits: 3, req: [] },
    { id: "ING3", name: "INGLÉS 3", sem: 9, credits: 3, req: [] },
    { id: "E2", name: "ELECTIVA 2", sem: 9, credits: 6, req: [] },
    // Semestre 10
    { id: "GEST", name: "GESTIÓN DE EMPRESAS", sem: 10, credits: 3, req: [] },
    { id: "PROY2", name: "PROYECTO 2", sem: 10, credits: 4, req: ["PROY1"] },
    { id: "RIES", name: "GESTIÓN DE RIESGOS", sem: 10, credits: 3, req: [] },
    { id: "ING4", name: "INGLÉS 4", sem: 10, credits: 3, req: [] },
    { id: "E3", name: "ELECTIVA 3", sem: 10, credits: 6, req: [] },
    // Semestre 11
    { id: "PRAC2", name: "PRÁCTICA PROFESIONAL", sem: 11, credits: 4, req: [] },
    { id: "MEMO", name: "MEMORIA DE TÍTULO", sem: 11, credits: 20, req: [] }
];

const phrases = [
    "¡Sigue así, futuro ingeniero!",
    "Cada ramo aprobado es un paso más cerca del título.",
    "¡Termodinámica no pudo contigo!",
    "Eres capaz de lograr todo lo que te propongas.",
    "La constancia es la clave del éxito en ingeniería."
];

let approvedRamos = JSON.parse(localStorage.getItem('approvedRamos')) || [];

function init() {
    renderMalla();
    updateStats();
}

function renderMalla() {
    const container = document.getElementById('malla-container');
    container.innerHTML = '';

    for (let i = 1; i <= 11; i++) {
        const semCol = document.createElement('div');
        semCol.className = 'semester-column';
        semCol.innerHTML = `<h3>Semestre ${i}</h3>`;

        const semRamos = ramos.filter(r => r.sem === i);
        semRamos.forEach(ramo => {
            const ramoDiv = document.createElement('div');
            ramoDiv.className = `ramo ${approvedRamos.includes(ramo.id) ? 'approved' : ''}`;
            ramoDiv.innerHTML = `
                <strong>${ramo.name}</strong>
                <span class="credits">${ramo.credits} créditos</span>
            `;
            ramoDiv.onclick = () => toggleRamo(ramo);
            semCol.appendChild(ramoDiv);
        });
        container.appendChild(semCol);
    }
}

function toggleRamo(ramo) {
    if (approvedRamos.includes(ramo.id)) {
        // Desmarcar
        approvedRamos = approvedRamos.filter(id => id !== ramo.id);
    } else {
        // Intentar marcar (verificar requisitos)
        const missing = ramo.req.filter(reqId => !approvedRamos.includes(reqId));
        if (missing.length > 0) {
            const names = missing.map(id => ramos.find(r => r.id === id).name).join(', ');
            showModal(`❌ Bloqueado. Primero debes aprobar: ${names}`);
            return;
        }
        approvedRamos.push(ramo.id);
        showRandomPhrase();
    }
    
    localStorage.setItem('approvedRamos', JSON.stringify(approvedRamos));
    renderMalla();
    updateStats();
}

function updateStats() {
    const total = ramos
        .filter(r => approvedRamos.includes(r.id))
        .reduce((sum, r) => sum + r.credits, 0);
    document.getElementById('total-credits').innerText = total;
}

function showModal(msg) {
    const modal = document.getElementById('modal');
    document.getElementById('modal-message').innerText = msg;
    modal.style.display = "block";
}

function showRandomPhrase() {
    const p = phrases[Math.floor(Math.random() * phrases.length)];
    document.getElementById('phrase').innerText = `"${p}"`;
}

// Cerrar modal
document.querySelector('.close-btn').onclick = () => document.getElementById('modal').style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }

init();
