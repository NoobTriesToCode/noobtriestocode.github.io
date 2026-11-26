/* SCRIPTS: DATOS DE PORTADAS, ANUNCIOS PARÓDICOS Y LÓGICA DE PAGINACIÓN **/

/**
 * ============================================================================
 * CONFIGURACIÓN DE DATOS (EDITA AQUÍ TUS PORTADAS Y ENLACES DE GITHUB)
 * ============================================================================
 */
const GITHUB_REPO_BASE = "https://github.com/NoobTriesToCode/archivo-weazel-news";

// Lista de portadas de tus periódicos (Ordenadas de más reciente a más antigua)
const NEWSPAPER_COVERS = [
    {
        id: 15,
        date: "23 Noviembre 2026",
        category: "Especial",
        title: "Bajo la estrella metálica",
        summary: "Julio Page - Weazel News. Luces, sombras y los secretos no contrados tras las placas de Los Santos",
        index: ["EL SILLÓN DE MANDO", "VOCES TRAS EL UNIFORME", "CASOS EN LA PENUMBRA", "EL VEREDICTO DE LA CALLE"],
        coverUrl: "https://raw.githubusercontent.com/NoobTriesToCode/archivo-weazel-news/main/Especiales/Bajo%20la%20estrella%20met%C3%A1lica/Bajo%20la%20estrella%20met%C3%A1lica-p%C3%A1gina001.png",
        githubUrl: `${GITHUB_REPO_BASE}/tree/main/Especiales/Bajo la estrella metálica`
    },
    {
        id: 14,
        date: "23 Noviembre 2026",
        category: "Periódico",
        title: "TIROTEO EN EL HOSPITAL - ¿QUEDAN LUGARES SEGUROS?",
        summary: "El pasado 19 de noviembre, el Hospital Pillbox de Los Santos fue escenario de un tiroteo protagonizado presuntamente por una mujer que habría atropellado y abierto fuego en las inmediaciones de la entrada del ccentro sanitario.",
        index: ["TIROTEO EN EL HOSPITAL", "CAMPAÑA DE DONACIÓN DE SANGRE", "COSPLAY PARTY EN EL SHUFFLE HUB", "INAUGURACIÓN DE EL NIDO", "NOCHES DE LEONIDAS", "SECCIÓN DE CLASIFICADOS", "SECCIÓN DE ENTRETENIMIENTO"],
        coverUrl: "https://raw.githubusercontent.com/NoobTriesToCode/archivo-weazel-news/main/Periodicos/23-11/23-11-p%C3%A1gina001.png",
        githubUrl: `${GITHUB_REPO_BASE}/tree/main/Periodicos/23-11`
    },
    {
        id: 13,
        date: "16 Noviembre 2026",
        category: "Periódico",
        title: "DÍA DE ELECCIONES - LA FIESTA DE LA DEMOCRÁCIA",
        summary: "Estas elecciones se recordarán, o no, principalmente por pasar desapercibidas. Ninguno de los dos partidos ha hecho campaña grandiosa, ni un baño de masas, mítines o el típico debate político.",
        index: ["ELECCIONES EN SAN ANDREAS", "GRAN PREMIO DE GÉNESIS CUMMUNITY", "APERTURA DEL WEED PARADISE", "SORTEO EN EL SANDY MALL", "PREGUNTAS AL AIRE", "SECCIÓN DE PUBLICIDAD", "SECCIÓN DE CLASIFICADOS", "SECCIÓN DE ENTRETENIMIENTO"],
        coverUrl: "https://raw.githubusercontent.com/NoobTriesToCode/archivo-weazel-news/main/Periodicos/16-11/16-11-p%C3%A1gina001.png",
        githubUrl: `${GITHUB_REPO_BASE}/blob/main/Periodicos/16-11`
    },
    {
        id: 12,
        date: "09 Noviembre 2026",
        category: "Periódico",
        title: "EL FUTURO DE LOS SANTOS - ELECCIONES GENERALES 15 DE NOVIEMBRE",
        summary: "Con motivo de la presentación de su compaña electoral, queremos conocer más de cerca al candidato, tanto en su faceta personal como política, descubrir qué le ha llevado a dar este paso y conocer las propuestas que plantea para el futuro de la ciudad.",
        index: ["ENTREVISTA PARTIDO A.L.M.A.", "ENTREVISTA PARTIDO GODOFREDO", "HIPSTERS EN EL BEAN MACHINE", "DE LA RADIO AL JUICIO", "DETRÁS DEL JUICIO", "SECCIÓN DE PUBLICIDAD", "SECCIÓN DE ENTRETENIMIENTO"],
        coverUrl: "https://raw.githubusercontent.com/NoobTriesToCode/archivo-weazel-news/main/Periodicos/09-11/09-11-p%C3%A1gina001.png",
        githubUrl: `${GITHUB_REPO_BASE}/blob/main/Periodicos/09-11`
    },
    {
        id: 11,
        date: "3 Noviembre 2026",
        category: "Revista",
        title: "WEAZEL MAGAZINE - CEREBROS EN SHOCK",
        summary: "Edición especial de Halloween con reportajes sobre el miedo y fenómenos paranormales 2026.",
        index: ["ORIGEN DE HALLOWEEN", "¿QUÉ ES EL MIEDO?", "CEREBROS EN SHOCK", "RUTA FANTASMAL", "¿QUÉ SE COMEN EN TODOS LOS SANTOS?", "ZONA PUBLICITARIA", "ZONA DE OCIO"],
        coverUrl: "https://raw.githubusercontent.com/NoobTriesToCode/archivo-weazel-news/main/Revistas/Revista%20Halloween%202026/Revista%2003-11-p%C3%A1gina001.png",
        githubUrl: `${GITHUB_REPO_BASE}/blob/main/Revistas/Revista Halloween 2026`
    },
    {
        id: 10,
        date: "26 Octubre 2026",
        category: "Periódico",
        title: "APAGÓN EN LOS SANTOS - ATENTADO A LA CIUDAD",
        index: ["LOS SANTOS A OSCURAS", "UN HALLOWEEN DE MIEDO", "ALERTA EN LOS SANTOS", "PASITO A PASITO", "RADIO GALAXIA LLEGA PARA DAR VOZ A LA CIUDADANIA", "NO PODEMOS AHORA - LA BALANZA DE LA VIDA", "A FUEGO LENTO - SECUESTRO EN EL D-69", "DE LA RADIO AL JUICIO - DIFAMACIONES EN LAS ONDAS", "LOS SANTOS RENACE"],
        summary: "Los Santos sufrío un apagón general alrededor de las 20:30 que se prolongó durante varias horas. Según fuentes oficiales de la Policía, el corte eléctrico fue provocado por bombas colocadas en als centrales eléctricas",
        coverUrl: "https://raw.githubusercontent.com/NoobTriesToCode/archivo-weazel-news/main/Periodicos/26-10/1.png",
        githubUrl: `${GITHUB_REPO_BASE}/blob/main/Periodicos/26-10`
    },
    {
        id: 9,
        date: "21 Octubre 2026",
        category: "Periódico",
        title: "RENUNCIA EN BLOQUE - DESPEDIDA DE UN HÉROE",
        summary: "Sandy Shores. En un operativo llevado a cabo en Sandy Shores, el sargento primero Andoni Uriarte cayó abatido, parecer ser, por arma de fuego. Era un compañero querido por todos y que dió sus vida por la de otros",
        index: ["DESPEDIDA DE UN HÉROE Y RENUNCIA EN BLOQUE", "CUANDO EL WEAZEL SE QUEDÓ EN SILENCIO", "¿DÓNDE ESTÁ MI CABALLERO?", "SIN RODEOS", "UN INSTANTE PARA RECORDAR", "PRIMER PREMIO MELISSA BLACKWOOD", "FINALISTAS DEL CONCURSO", "ESTAMOS A SALVO", "EL TACO DICTA SENTENCIAL EN EL ASTILLERO", "SECCION DE ANUNCIOS", "SECCIÓN DE ENTRETENIMIENTO"],
        coverUrl: "https://raw.githubusercontent.com/NoobTriesToCode/archivo-weazel-news/main/Periodicos/PERI%C3%93DICO%2021-09/1.png",
        githubUrl: `${GITHUB_REPO_BASE}/blob/main/Periodicos/PERIÓDICO 21-09`
    },
    {
        id: 8,
        date: "14 Octubre 2026",
        category: "Periódico",
        title: "SEMBRÓ EL PÁNICO - EXPLOSIONES POR DOQUIER",
        summary: "Las altas temperaturas y las ganas de fiesta se dieron cita en el Club Náutico, que durante la noche del viernes acogió una peculiar y refrescante fiesta hawaiana del semáforo, reuniendo a numerosos vecinos dispuestos a disfrutar de una noche diferente junto al mar.",
        index: ["EL CLUB NÁUTICO NOS TRASLADÓ A HAWAI EN UNA NOCHE PASADA POR AGUA", "PALETO SE LLENA DE ADRENALINA CON UN ESPECTACULAR TRIATLON", "VELOCIDAD, HUMO Y ADRENALINA: EL COMPRAVENTA PRENDE SANDY AIRLINES CON UNA CARRERA DRAG", "ESTUPOR EN SAN ANDREAS", "EXPLOSIONES SACUDEN LOS SANTOS Y SANDY SHORES", "SECCIÓN DE ANUNCIOS", "SECCIÓN DE ENTRETENIMIENTO"],
        coverUrl: "https://raw.githubusercontent.com/NoobTriesToCode/archivo-weazel-news/main/Periodicos/PERI%C3%93DICO%2014-09/1.png",
        githubUrl: `${GITHUB_REPO_BASE}/blob/main/Periodicos/PERIÓDICO 14-09`
    },
    {
        id: 7,
        date: "06 Octubre 2026",
        category: "Periódico",
        title: "LOS SANTOS EN PELIGRO - AMENAZA DE BOMBA EN LA PRESA",
        summary: "Los Santos. Una llamada anónima a un periodista de Weazel News desencadenó una tarde de máxima tension en Los Santos, especialmente en los alrededores de la presa",
        index: ["LA CIUDAD DE LOS SANTOS, EN PELIGRO", "EL NUEVO GOBIERNO RESPONDE", "SECCIÓN DE CLASIFICADOS", "LA UNIVERSIDAD DE LOS SANTOS CELEBRA UNA GRADUACIÓN POR TODO LO ALTO", "EL OCIO SE RENUEVA", "GERRA, GLORIA Y MUCHO AURA", "LAS 7 ROSAS", "SECCIÓN DE ENTRETENIMIENTO"],
        coverUrl: "https:///raw.githubusercontent.com/NoobTriesToCode/archivo-weazel-news/main/Periodicos/PERI%C3%93DICO%2006-09/1.png",
        githubUrl: `${GITHUB_REPO_BASE}/blob/main/Periodicos/PERIÓDICO 06-09`
    },
    {
        id: 6,
        date: "03 Octubre 2026",
        category: "Revista",
        title: "WEAZEL MAGAZINE EDICIÓN VERANO 2026",
        summary: "La periodista Yolanda Castillo nos hace recordar la antigua y extendida tradición de pasar horas al quicio de las puertas en la época veraniega, disfrutando de las temperaturas más suaves y sobretodo de la compañía de quienes compartían pasión por hacer comunidad",
        index: ["A LA FRESCA", "CUIDA A TU MASCOTA TAMBIÉN EN VERANO", "MANUAL OFICIAL DE SUPERVIVENCIA PARA UNA BARBACOA FAMILIAR", "EL AIRE ACONDICIONADO: TU MEJOR ALIADO SI SABES UTILIZARLO", "LOS SANTOS PARANORMAL", "HORÓSCOPO DEL VERANO", "RINCONES CON ENCANTO"],
        coverUrl: "https://raw.githubusercontent.com/NoobTriesToCode/archivo-weazel-news/main/Revistas/Weazel%20magazine%20VERANO%202026/1.png",
        githubUrl: `${GITHUB_REPO_BASE}/blob/main/Revistas/Weazel magazine VERANO 2026`
    },
    {
        id: 5,
        date: "30 Agosto 2026",
        category: "Periódico",
        title: "NUEVA ETAPA COMIENZA - P.I.P.A. NOMBRADO GOBIERNO",
        summary: "El 24 de agosto era la fecha señalada para los miembros del P.I.P.A. el día de la investidura del nuevo gobierno de San Andreas. Todo está preparado en el auditorio, la seguridad, la comida y los ciudadanos, que esperan inquietos a los discursos de sus nuevos representantes.",
        index: ["UNA NUEVA ETAPA COMIENZA", "TIROTEO EN CANALES DEJA A UN AGENTE ABATIDO", "UNA PERSECUCIÓN A PASO DE TORTUGA TRAS EL ROBO DE UN TRACTOR", "GOLPES SIN TREGUA Y ALIANZAS INESPERADAS EN EL RING DE EL ASTILLERO", "ELEGANCIA SOBRE RUIDAS: COMPRAVENTA Y SICILIA SE UNEN PARA PREMIAR LOS MEJORES COCHES", "SECCIÓN DE CLASIFICADOS", "NUEVA TIENDA DE MASCOTAS ABRE SUS PUERTAS EN ALTA Y HAWICK", "SECUESTREO Y TENSIÓN EN EL SICILIA: UN HOMBRE ARMADO OBLIGA A INTERVENIA A LA POLICÍA", "EL REGALO SORPRESA DEL CASINO: ¿UNA BOLSA DE CAOCAÍNA?", "ROBO A UN TREN TERMINA EN UNA PERSECUCIÓN MASIVA", "SECCIÓN DE ENTRETENIMIENTO"],
        coverUrl: "https://raw.githubusercontent.com/NoobTriesToCode/archivo-weazel-news/main/Periodicos/PERI%C3%93DICO%2030-08/1.png",
        githubUrl: `${GITHUB_REPO_BASE}/blob/main/Periodicos/PERIÓDICO 30-08`
    },
    {
        id: 4,
        date: "23 Agosto 2026",
        category: "Periódico",
        title: "MAYORÍA ABSOLUTA - P.I.P.A. GOBERNARÁ LOS SANTOS",
        summary: "El grupo P.I.P.A. se ha impuesto en las elecciones celebradas el lunes 17 de agostos de 2026, obteniendo una mayoría absoluta que le permitirá afrontar la nueva legislatura sin necesidad de acuerdos con la opocisición.",
        index: ["P.I.P.A. CONSIGUE LA MAYORÍA ABSOLUTA EN LAS ELECCIONES DE LOS SANTOS", "CRÓNICA DE UNA JORNADA ELECTORAL", "SECCIÓN DE CLASIFICADOS", "VELOCIDAD, ADRENALINA Y CAOS: EL YELLOW JACK DESTACÓ CON SU NOCHE DE CARRERAS OUTLAW", "LUCES, DSIFRACES Y CINE: EL RESTAURANTE SICILIA CELEBRA POR TODO LO ALTO EL COMPLEAÑOS DE HELENA", "EXPLOSIÓN EN SANDY SHORES EN PLENA JORNADA ELECTORAL", "EXPLOSIONES Y UN MISTERIOSO DESPLIEGUE EN LA CHATARRERÍA", "ALERTA EN LOS SANTOS: INFORMACIÓN DE PRIMERA MANO APUNTA A UN GRAN ATENTADO", "SECCIÓN DE ENTRETENIMIENTO"],
        coverUrl: "https://raw.githubusercontent.com/NoobTriesToCode/archivo-weazel-news/main/Periodicos/PERI%C3%93DICO%2023-08/1.png",
        githubUrl: `${GITHUB_REPO_BASE}/blob/main/Periodicos/PERIÓDICO 23-08`
    },
    {
        id: 3,
        date: "16 Agosto 2026",
        category: "Periódico",
        title: "MÁS SUCESOS EXTRAÑOS - LLUVIA DE ASTRONAUTAS",
        summary: "Una escena digna de una película de ciencia ficción sorprendió este martes a varios conductores en las inmediaciones del estudio de cine, donde fueron encontrados varios individuos vestidos con trajes de astronauta tirados en la carretera.",
        index: ["MISTERIO EN LOS SANTOS: ASTRONAUTAS APARECEN TIRADOS EN PLENA CARRETERA", "ANUNCIO DE ELECCIONES EN LOS SANTOS", "SECCIÓN DE CLASIFICADOS", "PINK VELVET STUDIO ABRE SUS PUERTAS CON UNA INAUGURACIÓN A RITMO DE MÚSICA", "MÁSCARAS ANTIFACES Y MUCHA COMPLICIDAD EN HORNBILLS", "CRISIS INMOBILIARIA: SANDY SHORES PONE EL FOCO EN LA ACUMULACIÓN DE VIVIENDAS", "SHUFFLE HUB LLEGA A DEL PERRO PIER", "JORNADA DE REFLEXIÓN MARCA LA RECTA FINAL DE LAS ELECCIONES EN SAN ANDREAS", "SECCIÓN DE ENTRETENIMIENTO"],
        coverUrl: "https://raw.githubusercontent.com/NoobTriesToCode/archivo-weazel-news/main/Periodicos/PERI%C3%93DICO%2016-08/1.png",
        githubUrl: `${GITHUB_REPO_BASE}/blob/main/Periodicos/PERIÓDICO 16-08`
    },
    {
        id: 2,
        date: "10 Mayo 2026",
        category: "Periódico",
        title: "GODOFREDO EN LA CARCEL \"ME HE CONSTRUIDO UNA SUITE CON VUESTOS IMPUESTOS\" - EL LUNES ENTRA EN PRISIÓN",
        summary: "Este fin de semana las pistas vibraron con fuerza con la disputa de la carreras de Fórmula 1 y Fórmula 2, en un evento cargado de emoción y momentos de alta tensión.",
        index: ["¡EMOCIÓN, TENSIÓN Y ESPECTÁCULO EN EL GRAN PREMIO!", "LA UNIVERSIDAD DE LOS SANTOS CELEBRA SU 2º GRADUACIÓN", "EL \"REY\" GODOFREDO Y LIDIA BROWN CONDENADOS TRAS JUICIO RÁPIDO", "SECCIÓN DE ANUNCIOS", "¡ÉXITO ROTUNDO EN LAS CARRERAS 1/4 DE MILLA DE SANDY SHORES!", "SAN ANDREAS ENDURECE LA LEY DE ORDEN PÚBLICO Y REGULA EL USO DE MEGÁFONOS", "SECCIÓN DE ENTRETENIMIENTO"],
        coverUrl: "https://raw.githubusercontent.com/NoobTriesToCode/archivo-weazel-news/main/Periodicos/PERI%C3%93DICO%2010-05/1.png",
        githubUrl: `${GITHUB_REPO_BASE}/blob/main/Periodicos/PERIÓDICO 10-05`
    },
    {
        id: 1,
        date: "03 Mayo 2026",
        category: "Periódico",
        title: "INAUGURACIÓN DE WU-CHANG STUDIOS \"LA CREATIVIDAD LLEGA A LA CIUDAD\" - LIL FRANK CIERRA EL SHOW",
        summary: "El pasado 24 de abril, WU-Chan Studios, conocido popularmente como Wiwang Sudio, clebró su inauguración oficial en la Ciudad de Los Santos con una velada elegante y agradable.",
        index: ["INAUGURACIÓN POR TODO LO ALTO DE WU-CHANG STUDIOS EN LOS SANTOS", "REAPERTURA DEL YELLOW JACK EN LOS SANTOS", "ÉXITO EN EL ESTRENO DE LA FÓRMULA GEN EN SAN ANDREAS", "¡LA CARRERA MÁS SALVAJE DEL AÑO!", "SECCIÓN DE ENTRETENIMIENTO"],
        coverUrl: "https://raw.githubusercontent.com/NoobTriesToCode/archivo-weazel-news/main/Periodicos/03.05/1.png",
        githubUrl: `${GITHUB_REPO_BASE}/blob/main/Periodicos/03.05`
    }
];

// Banco de Anuncios Falsos Cómicos del Universo GTA V
const FAKE_ADS = [
    {
        brand: "AMMU-NATION",
        tagline: "¡Protege tu familia de tus vecinos!",
        headline: "¿CANSADO DE QUE TE ROBEN EL COCHE EN EL SEMÁFORO?",
        body: "Compra hoy un lanzacohetes guiado y llévate gratis una gorra patriótica. Sin preguntas, sin esperas, sin sentido común. ¡Segunda Enmienda al máximo!",
        footer: "Válido en todas las tiendas de San Andreas. No apuntar hacia dentro del local.",
        icon: "fa-gun",
        badge: "OFERTA EXPLOSIVA"
    },
    {
        brand: "SPRUNK",
        tagline: "La esencia de la vida (y el azúcar)",
        headline: "¡98% AZÚCAR, 2% COLORANTE VERDE RADIACTIVO!",
        body: "¿Para qué dormir 8 horas si puedes beber 6 latas de Sprunk y ver sonidos? Recomendado por el 0% de los dentistas de Los Santos.",
        footer: "Puede causar taquicardia, visión láser y ganas de saltar rampas.",
        icon: "fa-bolt",
        badge: "ENERGÍA EXTREMA"
    },
    {
        brand: "PIBWASSER",
        tagline: "Cerveza de exportación alemana",
        headline: "¡AHOGA TUS PENAS COMO UN VERDADERO PATRIOTA!",
        body: "Elaborada con agua reciclada del canal de Vespucci y cebada dudosa. Pibwasser: porque recordar anoche está sobrevalorado.",
        footer: "Bebe con moderación. No conduzcas un tanque bajo sus efectos.",
        icon: "fa-beer-mug-empty",
        badge: "100% PURA MALTA"
    },
    {
        brand: "CLUCKIN' BELL",
        tagline: "¡Si lo disfrutaste, es pollo!",
        headline: "CUBO FAMILIAR DE 40 ALITAS POR SOLO $4.99",
        body: "Nuestros pollos nunca han visto la luz del sol para garantizar esa textura esponjosa que tanto amas. ¡Prueba la nueva salsa 'Ardor Estomacal'!",
        footer: "No nos hacemos responsables de mutaciones genéticas leves.",
        icon: "fa-drumstick-bite",
        badge: "MENÚ DEL DÍA"
    },
    {
        brand: "MAZE BANK",
        tagline: "Invierte en el muro rojo",
        headline: "¿TU DINERO ESTÁ SEGURO EN EL BOLSILLO? ¡JA!",
        body: "Deposita tus ahorros en Maze Bank antes de que alguien te asalte en un callejón. Comisiones abusivas garantizadas con una sonrisa.",
        footer: "Cajeros automáticos disponibles en cada esquina peligrosa.",
        icon: "fa-landmark",
        badge: "FINANZAS"
    },
    {
        brand: "MORS MUTUAL INSURANCE",
        tagline: "Esperamos lo inesperado",
        headline: "¿TU SUPERDEPORTIVO ACABÓ EN EL FONDO DEL OCÉANO?",
        body: "¡Llámanos! Te conseguimos un coche exactamente igual en 30 segundos sin hacer preguntas sobre cómo llegó allí.",
        footer: "Sujeto a primas abusivas si eres un conductor habitual de Vinewood.",
        icon: "fa-car-burst",
        badge: "SEGUROS"
    },
    {
        brand: "LOS SANTOS CUSTOMS",
        tagline: "¿Qué le pasa ahora?",
        headline: "¿PERSEGUIDO POR 4 ESTRELLAS DE LA POLICÍA?",
        body: "¡Entra en nuestro taller, píntalo de otro color por $500 y la policía olvidará tu existencia mágicamente! Blindaje nivel 5 disponible.",
        footer: "Especialistas en arreglar coches destrozados a martillazos.",
        icon: "fa-wrench",
        badge: "TALLER EXPRESS"
    },
    {
        brand: "LOGGER BEER",
        tagline: "Para hombres que talan árboles (o eso dicen)",
        headline: "EL SABOR DE PALETO BAY EN CADA SORBO",
        body: "Si sabe a serrín, es que está en su punto. La cerveza oficial de los camioneros de la Ruta 68.",
        footer: "Prohibida su venta a hipsters de Mirror Park.",
        icon: "fa-tree",
        badge: "EDICIÓN RÚSTICA"
    }
];

/**
 * ============================================================================
 * ESTADO DE LA APLICACIÓN
 * ============================================================================
 */
let state = {
    currentPage: 1,
    itemsPerPage: 6,
    searchQuery: "",
    selectedCategory: "ALL",
    showAds: true,
    adSeed: Math.random() // Semilla para randomizar anuncios
};

/**
 * ============================================================================
 * FUNCIONES PRINCIPALES
 * ============================================================================
 */
window.onload = () => {
    seleccionarSubtitulo();
};

// Randomizar subtítulo del periódico
function seleccionarSubtitulo() {
    const subtitulos = [
        "Buscando la verdad (y mis llaves) en directo.",
        "Reportando en vivo desde la máquina de café.",
        "Minimizando demandas desde 2026.",
        "Donde el café es fuerte y las horas son largas.",
        "Donde los días de amenaza de bomba los llamamos rutina.",
        "Cubrimos lo que otros medios ignoran.",
        "Siempre un paso adelante de los rumores.",
        "Informando con integridad, incluso cuando nadie mira.",
        "Donde la objetividad es nuestra brújula.",
        "La verdad no tiene fecha de caducidad."
    ]

    document.getElementById('subtitulo').innerText = subtitulos[Math.floor(Math.random() * subtitulos.length)];
}

// Mezclar un array usando algoritmo Fisher-Yates
function shuffleArray(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

// Obtener portadas filtradas por búsqueda y categoría
function getFilteredCovers() {
    return NEWSPAPER_COVERS.filter(cover => {
        const matchesCategory = state.selectedCategory === "ALL" || cover.category === state.selectedCategory;
        const query = state.searchQuery.toLowerCase().trim();
        const matchesSearch = !query ||
            cover.title.toLowerCase().includes(query) ||
            cover.id.toString().toLowerCase().includes(query) ||
            cover.date.toLowerCase().includes(query) ||
            cover.summary.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
    });
}

// Construir la lista combinada de Portadas + Anuncios Randomizados
// Construir la lista combinada de Portadas + Anuncios Randomizados
function buildCombinedFeed(filteredCovers) {
    if (!state.showAds || filteredCovers.length === 0) {
        return filteredCovers.map(item => ({ type: 'cover', data: item }));
    }

    let shuffledAds = shuffleArray(FAKE_ADS);
    const combined = [];
    let adIndex = 0;

    // Recorrer las portadas en bloques de 2 en 2
    for (let i = 0; i < filteredCovers.length; i += 2) {
        // Tomamos hasta 2 portadas para este bloque
        const chunk = filteredCovers
            .slice(i, i + 2)
            .map(cover => ({ type: 'cover', data: cover }));

        if (shuffledAds.length > 0) {
            // Elegir posición aleatoria: 0 (antes), 1 (en medio) o 2 (después)
            // Si al final solo queda 1 portada (chunk.length === 1), será 0 (antes) o 1 (después)
            const randomPos = Math.floor(Math.random() * (chunk.length + 1));

            // Insertar el anuncio en esa posición dentro del bloque
            chunk.splice(randomPos, 0, { type: 'ad', data: shuffledAds[adIndex] });
            adIndex++;

            // Si se acaban los anuncios, volver a mezclar
            if (adIndex >= shuffledAds.length) {
                shuffledAds = shuffleArray(FAKE_ADS);
                adIndex = 0;
            }
        }

        combined.push(...chunk);
    }

    return combined;
}

// Renderizar una tarjeta de Portada de Periódico
function createCoverCardHTML(cover) {
    return `
                <article class="press-card bg-newsprint border-2 border-ink flex flex-col justify-between overflow-hidden group">
                    <div>
                        <!-- Cabecera de la ficha -->
                        <div class="bg-ink text-newsprint px-3 py-1.5 flex justify-between items-center font-ui text-[11px] font-bold">
                            <span class="text-weazelRed bg-newsprint px-1.5 py-0.2 uppercase tracking-wider">EDICIÓN #${cover.id}</span>
                            <span class="text-stone-300">${cover.date}</span>
                        </div>

                        <!-- Imagen de Portada (Clicable para abrir modal) -->
                        <div class="relative overflow-hidden border-b-2 border-ink bg-stone-900 aspect-[3/4.2] cursor-pointer" onclick="openCoverModal(${cover.id})">
                            <img 
                                src="${cover.coverUrl}" 
                                alt="Portada Edicion #${cover.id}" 
                                loading="lazy"
                                onerror="this.src='https://placehold.co/600x850/1a1917/f4efe6?text=Portada+No+Disponible'"
                                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            >
                            <!-- Etiqueta flotante de sección -->
                            <span class="absolute top-2 right-2 bg-ink/90 text-newsprint border border-newsprint/40 font-ui text-[10px] font-bold uppercase px-2 py-0.5">
                                ${cover.category}
                            </span>

                            <!-- Overlay al pasar el ratón -->
                            <div class="absolute inset-0 bg-ink/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                                <span class="bg-weazelRed text-white font-ui text-xs font-bold uppercase tracking-wider px-4 py-2 border-2 border-white shadow-lg flex items-center gap-2">
                                    <i class="fa-solid fa-magnifying-glass-plus"></i>
                                    Ampliar Portada
                                </span>
                            </div>
                        </div>

                        <!-- Titular y resumen -->
                        <div class="p-4">
                            <h2 class="font-headline font-bold text-lg leading-snug text-ink group-hover:text-weazelRed transition-colors cursor-pointer" onclick="openCoverModal(${cover.id})">
                                ${cover.title}
                            </h2>
                            <p class="text-xs text-stone-700 mt-2 line-clamp-3 leading-relaxed">
                                ${cover.summary}
                            </p>
                        </div>
                    </div>

                    <!-- Pie de tarjeta con enlaces -->
                    <div class="px-4 pb-4 pt-2 border-t border-ink/20 flex items-center justify-between gap-2 font-ui">
                        <button onclick="openCoverModal(${cover.id})" class="text-xs font-bold text-ink hover:text-weazelRed underline underline-offset-2 cursor-pointer">
                            Vista rápida
                        </button>
                        <a href="${cover.githubUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-ink hover:bg-weazelRed text-newsprint text-[11px] font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5">
                            <i class="fa-brands fa-github"></i>
                            <span>Leer en GitHub</span>
                        </a>
                    </div>
                </article>
            `;
}

// Renderizar una tarjeta de Anuncio Falso Cómico
function createAdCardHTML(ad) {
    return `
                <aside class="retro-ad border-4 border-double border-ink p-5 flex flex-col justify-between relative select-none shadow-[4px_4px_0px_rgba(26,25,23,0.15)]">
                    <!-- Cinta superior de "Publicidad" -->
                    <div class="flex justify-between items-center border-b-2 border-ink pb-2 mb-3">
                        <span class="font-ui text-[9px] font-bold uppercase tracking-[0.2em] text-stone-600">ESPACIO PUBLICITARIO</span>
                        <span class="bg-ink text-newsprint font-ui text-[9px] font-bold px-2 py-0.5 uppercase">${ad.badge}</span>
                    </div>

                    <!-- Contenido del Anuncio -->
                    <div class="text-center my-auto py-3">
                        <div class="w-14 h-14 mx-auto mb-3 border-2 border-ink rounded-full flex items-center justify-center bg-newsprint text-ink text-2xl shadow-[2px_2px_0px_#1a1917]">
                            <i class="fa-solid ${ad.icon}"></i>
                        </div>
                        
                        <h3 class="font-masthead font-black text-2xl tracking-wider text-ink uppercase">
                            ${ad.brand}
                        </h3>
                        <p class="font-headline italic text-xs text-weazelRed font-bold mb-3">
                            "${ad.tagline}"
                        </p>

                        <div class="border-y-2 border-ink py-3 my-3 bg-newsprint/60 px-2">
                            <h4 class="font-ui font-black text-sm uppercase leading-tight text-ink mb-2">
                                ${ad.headline}
                            </h4>
                            <p class="font-body text-xs text-stone-800 leading-relaxed">
                                ${ad.body}
                            </p>
                        </div>
                    </div>

                    <!-- Letra pequeña cómica -->
                    <div class="pt-2 border-t border-dashed border-ink/50 text-center">
                        <p class="font-ui text-[10px] text-stone-600 italic leading-tight">
                            * ${ad.footer}
                        </p>
                    </div>
                </aside>
            `;
}

// Renderizar toda la cuadrícula y la paginación
function renderArchive() {
    const grid = document.getElementById('newspaper-grid');
    const emptyState = document.getElementById('empty-state');
    const resultsCounter = document.getElementById('results-counter');

    const filteredCovers = getFilteredCovers();
    const combinedItems = buildCombinedFeed(filteredCovers);

    // Cálculos de paginación
    const totalItems = combinedItems.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / state.itemsPerPage));

    if (state.currentPage > totalPages) {
        state.currentPage = totalPages;
    }

    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    const endIndex = startIndex + state.itemsPerPage;
    const pageItems = combinedItems.slice(startIndex, endIndex);

    // Actualizar contador
    resultsCounter.innerHTML = `
                Mostrando <span class="text-weazelRed font-bold">${filteredCovers.length}</span> portadas archivadas 
                ${state.showAds && filteredCovers.length > 0 ? '<span class="text-stone-500">(con anuncios patrocinados)</span>' : ''}
                &bull; Página <strong>${state.currentPage}</strong> de <strong>${totalPages}</strong>
            `;

    // Mostrar estado vacío o cuadrícula
    if (filteredCovers.length === 0) {
        grid.innerHTML = '';
        grid.classList.add('hidden');
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
        grid.classList.remove('hidden');

        grid.innerHTML = pageItems.map(item => {
            return item.type === 'cover'
                ? createCoverCardHTML(item.data)
                : createAdCardHTML(item.data);
        }).join('');
    }

    renderPaginationControls(totalPages);
}

// Renderizar botones de paginación
function renderPaginationControls(totalPages) {
    const prevBtn = document.getElementById('prev-page-btn');
    const nextBtn = document.getElementById('next-page-btn');
    const pageNumbersContainer = document.getElementById('page-numbers');

    prevBtn.disabled = state.currentPage <= 1;
    nextBtn.disabled = state.currentPage >= totalPages;

    let pagesHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const isActive = i === state.currentPage;
        pagesHTML += `
                    <button 
                        onclick="goToPage(${i})" 
                        class="w-8 h-8 border-2 border-ink flex items-center justify-center transition-colors cursor-pointer ${isActive
                ? 'bg-weazelRed text-white border-ink shadow-[2px_2px_0px_#1a1917]'
                : 'bg-newsprint text-ink hover:bg-ink hover:text-newsprint'
            }"
                    >
                        ${i}
                    </button>
                `;
    }
    pageNumbersContainer.innerHTML = pagesHTML;
}

// Cambiar de página y subir suavemente al inicio de la cuadrícula
function goToPage(pageNumber) {
    state.currentPage = pageNumber;
    renderArchive();
    window.scrollTo({ top: 180, behavior: 'smooth' });
}

/**
 * ============================================================================
 * LÓGICA DEL MODAL DE VISTA PREVIA
 * ============================================================================
 */
function openCoverModal(coverId) {
    const cover = NEWSPAPER_COVERS.find(c => c.id === coverId);
    if (!cover) return;

    document.getElementById('modal-edition-badge').textContent = `EDICIÓN #${cover.id}`;
    document.getElementById('modal-date').textContent = cover.date;
    document.getElementById('modal-category').textContent = cover.category;
    document.getElementById('modal-title').textContent = cover.title;
    document.getElementById('modal-summary').textContent = cover.summary;
    document.getElementById('modal-index').innerHTML = getIndice(cover.index).innerHTML;
    document.getElementById('modal-image').src = cover.coverUrl;
    document.getElementById('modal-github-btn').href = cover.githubUrl;

    const modal = document.getElementById('cover-modal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Evitar scroll de fondo
}

function getIndice(indice) {

    const listaEl = document.getElementById("modal-index");
    listaEl.innerHTML = "";

    if (indice && indice.length > 0) {

        indice.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item;
            listaEl.appendChild(li);
        });
    } else {
        const li = document.createElement("li");
        li.textContent = "No se ha proporcionado un índice";
        listaEl.appendChild(li);
    }

    return listaEl;
}

function closeCoverModal() {
    const modal = document.getElementById('cover-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

/**
 * ============================================================================
 * EVENTOS E INICIALIZACIÓN
 * ============================================================================
 */
document.addEventListener('DOMContentLoaded', () => {
    // Fecha actual en formato periódico
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('es-ES', options);
    document.getElementById('current-date-display').textContent = today.charAt(0).toUpperCase() + today.slice(1);

    // Actualizar enlace principal de GitHub
    document.getElementById('main-github-link').href = GITHUB_REPO_BASE;

    // Buscador en tiempo real
    document.getElementById('search-input').addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        state.currentPage = 1;
        renderArchive();
    });

    // Filtro por categoría
    document.getElementById('category-filter').addEventListener('change', (e) => {
        state.selectedCategory = e.target.value;
        state.currentPage = 1;
        renderArchive();
    });

    // Selector de elementos por página
    document.getElementById('items-per-page').addEventListener('change', (e) => {
        state.itemsPerPage = parseInt(e.target.value, 10);
        state.currentPage = 1;
        renderArchive();
    });

    // Botón Randomizar Anuncios
    document.getElementById('randomize-ads-btn').addEventListener('click', () => {
        state.adSeed = Math.random();
        if (!state.showAds) {
            state.showAds = true;
            updateToggleAdsUI();
        }
        renderArchive();
    });

    // Botón Mostrar/Ocultar Anuncios
    document.getElementById('toggle-ads-btn').addEventListener('click', () => {
        state.showAds = !state.showAds;
        state.currentPage = 1;
        updateToggleAdsUI();
        renderArchive();
    });

    function updateToggleAdsUI() {
        const icon = document.getElementById('toggle-ads-icon');
        const text = document.getElementById('toggle-ads-text');
        if (state.showAds) {
            icon.className = 'fa-solid fa-eye-slash';
            text.textContent = 'Ocultar Anuncios';
        } else {
            icon.className = 'fa-solid fa-eye';
            text.textContent = 'Mostrar Anuncios';
        }
    }

    // Botones Anterior / Siguiente página
    document.getElementById('prev-page-btn').addEventListener('click', () => {
        if (state.currentPage > 1) goToPage(state.currentPage - 1);
    });

    document.getElementById('next-page-btn').addEventListener('click', () => {
        goToPage(state.currentPage + 1);
    });

    // Resetear filtros
    document.getElementById('reset-filters-btn').addEventListener('click', () => {
        state.searchQuery = "";
        state.selectedCategory = "ALL";
        state.currentPage = 1;
        document.getElementById('search-input').value = "";
        document.getElementById('category-filter').value = "ALL";
        renderArchive();
    });

    // Cerrar modal con botón, clic fuera o tecla Escape
    document.getElementById('close-modal-btn').addEventListener('click', closeCoverModal);
    document.getElementById('cover-modal').addEventListener('click', (e) => {
        if (e.target.id === 'cover-modal') closeCoverModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeCoverModal();
    });

    // Renderizado inicial
    renderArchive();
});