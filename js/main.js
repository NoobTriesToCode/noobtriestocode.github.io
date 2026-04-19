// Cargar datos de localStorage al iniciar
let entries = JSON.parse(localStorage.getItem('work_time_entries')) || [];
let storedName = localStorage.getItem('work_user_name') || "";

window.onload = () => {
    if (storedName) {
        document.getElementById('userName').value = storedName;
        updateDisplayName();
    }
    renderEntries();
};

function updateDisplayName() {
    const nameInput = document.getElementById('userName').value;
    const display = document.getElementById('displayName');
    display.innerText = nameInput.trim() === "" ? "Usuario" : nameInput;
    localStorage.setItem('work_user_name', nameInput);

    // Actualizar también en el informe si existe
    if (entries.length > 0) {
        document.getElementById('reportName').innerText = nameInput.trim() === "" ? "Usuario" : nameInput;
    }
}

function addTimeEntry() {
    const startVal = document.getElementById('startTime').value;
    const endVal = document.getElementById('endTime').value;

    if (!startVal || !endVal) {
        alertCustom("Por favor, rellena ambas horas.");
        return;
    }

    const calculation = calculateDuration(startVal, endVal);

    // Obtener fecha actual en formato local
    const today = new Date();
    const dateStr = today.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    const newEntry = {
        id: Date.now(),
        date: dateStr,
        start: startVal,
        end: endVal,
        totalMinutes: calculation.totalMinutes,
        nightMinutes: calculation.nightMinutes
    };

    entries.push(newEntry);
    saveData();
    renderEntries();

    // Limpiar inputs de tiempo solamente
    document.getElementById('startTime').value = '';
    document.getElementById('endTime').value = '';
}

function calculateDuration(startStr, endStr) {
    const startArr = startStr.split(':').map(Number);
    const endArr = endStr.split(':').map(Number);

    let startMin = startArr[0] * 60 + startArr[1];
    let endMin = endArr[0] * 60 + endArr[1];

    // Si la hora de fin es menor que la de inicio, asumimos que pasó la medianoche
    if (endMin < startMin) {
        endMin += 24 * 60;
    }

    const totalMinutes = endMin - startMin;

    // Cálculo de horas para primas (18:00 a 06:00)
    let nightMinutes = 0;
    for (let m = startMin; m < endMin; m++) {
        let currentMinInDay = m % (24 * 60);
        if (currentMinInDay < 360 || currentMinInDay >= 1080) {
            nightMinutes++;
        }
    }

    return { totalMinutes, nightMinutes };
}

function formatMinutes(mins) {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${h}h ${m}m`;
}

function saveData() {
    localStorage.setItem('work_time_entries', JSON.stringify(entries));
}

function deleteEntry(id) {
    entries = entries.filter(e => e.id !== id);
    saveData();
    renderEntries();
}

function clearAll() {
    if (confirm("¿Estás seguro de que quieres borrar todo el historial?")) {
        entries = [];
        saveData();
        renderEntries();
    }
}

function renderEntries() {
    const tbody = document.getElementById('historyBody');
    const emptyState = document.getElementById('emptyState');
    const recentCard = document.getElementById('recentReportCard');
    tbody.innerHTML = '';

    let totalAcc = 0;
    let nightAcc = 0;

    if (entries.length === 0) {
        emptyState.classList.remove('hidden');
        recentCard.classList.add('hidden');
    } else {
        emptyState.classList.add('hidden');
        recentCard.classList.remove('hidden');

        // Calculamos los totales sobre el array original
        entries.forEach(entry => {
            totalAcc += entry.totalMinutes;
            nightAcc += entry.nightMinutes;
        });

        // Registro más reciente
        const mostRecent = entries[entries.length - 1];
        const currentName = document.getElementById('userName').value.trim() || "Usuario";

        // Rellenar card de informe
        document.getElementById('reportName').innerText = currentName;
        document.getElementById('reportStart').innerText = mostRecent.start;
        document.getElementById('reportEnd').innerText = mostRecent.end;
        document.getElementById('reportSingleTotal').innerText = formatMinutes(mostRecent.totalMinutes);
        document.getElementById('reportAccTotal').innerText = formatMinutes(totalAcc);
        document.getElementById('reportAccNight').innerText = formatMinutes(nightAcc);

        // Ordenamos una copia del array para mostrar el más reciente primero en la tabla
        const reversedEntries = [...entries].reverse();

        reversedEntries.forEach(entry => {
            const row = document.createElement('tr');
            row.innerHTML = `
                        <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500">${entry.date || '-'}</td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">${entry.start}</td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">${entry.end}</td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">${formatMinutes(entry.totalMinutes)}</td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-indigo-600">${formatMinutes(entry.nightMinutes)}</td>
                        <td class="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                            <button onclick="deleteEntry(${entry.id})" class="text-red-600 hover:text-red-900">Eliminar</button>
                        </td>
                    `;
            tbody.appendChild(row);
        });
    }

    document.getElementById('totalHours').innerText = formatMinutes(totalAcc);
    document.getElementById('totalNightHours').innerText = formatMinutes(nightAcc);
}

function alertCustom(msg) {
    const div = document.createElement('div');
    div.className = "fixed bottom-4 right-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce";
    div.innerText = msg;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 3000);
}

function copyPortfolio() {
    const text = document.getElementById('reportResume').innerText;
    navigator.clipboard.writeText(text).then(() => alertCopyCustom("Reporte copiado."));
}

function alertCopyCustom(msg) {
    const div = document.createElement('div');
    div.className = "fixed bottom-4 right-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce";
    div.innerText = msg;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 3000);
}