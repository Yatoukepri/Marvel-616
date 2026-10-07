document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       ALERTE DE TRADUCTION
    ========================= */
    const alertBox = document.getElementById("translation-alert");
    const alertCloseBtn = document.querySelector(".alert-close");

    if (alertBox && alertCloseBtn) {
        alertCloseBtn.addEventListener("click", () => {
            alertBox.remove();
        });
    }

    /* =========================
       MENU BURGER
    ========================= */
    const burgerBtn = document.querySelector(".burger-btn");
    const menuItem = document.querySelector(".menu-item");

    if (burgerBtn && menuItem) {
        burgerBtn.addEventListener("click", () => {
            menuItem.classList.toggle("open");
        });
    }

    /* =========================
       ANIMATION VIGNETTES (HÉROS)
    ========================= */
    const heroItems = document.querySelectorAll(".hero-item");
    heroItems.forEach((item, index) => {
        setTimeout(() => item.classList.add("is-visible"), index * 100);
    });

    /* =========================
   ACCORDÉONS — VERSIONS / COSTUMES
========================= */

const accordionGroups = document.querySelectorAll(
    ".character-versions, .costume-accordion"
);

function updateAccordionHeight(item) {

    const content = item.querySelector(".version-content");

    if (content && item.classList.contains("is-open")) {
        content.style.height = content.scrollHeight + "px";
    }
}

function openAccordionItem(item) {

    const content = item.querySelector(".version-content");

    if (!content) return;

    item.classList.add("is-open");

    content.style.height = content.scrollHeight + "px";

    /*
     * Les images peuvent finir de charger après
     * l'ouverture de l'accordéon.
     * On recalcule alors sa hauteur.
     */
    content.querySelectorAll("img").forEach(img => {

        if (!img.complete) {

            img.addEventListener(
                "load",
                () => updateAccordionHeight(item),
                { once: true }
            );
        }
    });
}

function closeAccordionItem(item) {

    const content = item.querySelector(".version-content");

    if (!content) return;

    content.style.height = "0";
    item.classList.remove("is-open");
}


/*
 * Chaque groupe d'accordéon possède maintenant
 * son propre élément ouvert.
 */
accordionGroups.forEach(group => {

    const items = group.querySelectorAll(".version-item");

    if (items.length === 0) return;

    let currentOpen = null;

    /*
     * Premier élément ouvert automatiquement
     * dans CHAQUE groupe.
     */
    openAccordionItem(items[0]);
    currentOpen = items[0];

    items.forEach(item => {

        const btn = item.querySelector(".version-toggle");

        if (!btn) return;

        btn.addEventListener("click", () => {

            /*
             * Si on clique sur l'élément déjà ouvert,
             * on le ferme.
             */
            if (item === currentOpen) {

                closeAccordionItem(item);
                currentOpen = null;

                return;
            }

            /*
             * Ferme uniquement l'élément ouvert
             * dans CE groupe.
             */
            if (currentOpen) {
                closeAccordionItem(currentOpen);
            }

            /*
             * Ouvre le nouvel élément.
             */
            openAccordionItem(item);
            currentOpen = item;
        });
    });
});

/* =========================
   LIGHTBOX — ZOOM + DRAG (FINAL UX)
========================= */

const DRAG_SPEED = 2.2; // ← ajuste (1.5 à 2.5 recommandé)
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeBtn = document.getElementById("closeBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");

let isZoomed = false;
let isDragging = false;
let hasDragged = false;

let lightboxHistoryActive = false;

// Zoom tactile
let pinchStartDistance = 0;
let pinchStartScale = 1;
let currentScale = 1;

let startX = 0;
let startY = 0;
let offsetX = 0;
let offsetY = 0;

const ZOOM_SCALE = 2;
const DRAG_THRESHOLD = 5; // pixels

if (lightbox && lightboxImage) {

    /* ===== OUVERTURE ===== */
    document.querySelectorAll(".lightbox-trigger").forEach(img => {
        img.addEventListener("click", () => {
            lightboxImage.src = img.src;
            lightbox.classList.add("active");
            document.body.classList.add("lightbox-open");
            resetZoom();

            if (window.matchMedia("(max-width: 1024px)").matches) {
                history.pushState({ lightbox: true }, "", window.location.href);
                lightboxHistoryActive = true;
            }
        });
    });

    /* ===== FERMETURE ===== */
function closeLightbox(fromHistory = false) {

    // Sur mobile/tablette, le bouton Retour doit simplement
    // fermer la lightbox au lieu de quitter la page.
    if (lightboxHistoryActive && !fromHistory) {
        lightboxHistoryActive = false;
        history.back();
        return;
    }

    if (document.fullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }

    lightbox.classList.remove("active");
    document.body.classList.remove("lightbox-open");
    resetZoom();
}

    closeBtn.addEventListener("click", closeLightbox);
	
	window.addEventListener("popstate", () => {
    if (lightbox.classList.contains("active")) {
        lightboxHistoryActive = false;
        closeLightbox(true);
    }
});
	
	if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", () => {
        if (!document.fullscreenElement) {
            // Entrer en plein écran
            if (lightbox.requestFullscreen) {
                lightbox.requestFullscreen();
            } else if (lightbox.webkitRequestFullscreen) { // Safari
                lightbox.webkitRequestFullscreen();
            } else if (lightbox.msRequestFullscreen) { // IE11
                lightbox.msRequestFullscreen();
            }
        } else {
            // Sortir du plein écran
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { // Safari
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { // IE11
                document.msExitFullscreen();
            }
        }
    });
}

    lightbox.addEventListener("click", e => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && lightbox.classList.contains("active")) {
            closeLightbox();
        }
    });

/* ===== CLICK IMAGE => ZOOM / DÉZOOM ===== */
lightboxImage.addEventListener("click", e => {

    // Sur mobile/tablette : aucun zoom au clic
    if (window.matchMedia("(max-width: 1024px)").matches) {
        return;
    }

    e.stopPropagation();

    // si un drag a eu lieu => on ignore le clic
    if (hasDragged) {
        hasDragged = false;
        return;
    }

    isZoomed = !isZoomed;

    if (!isZoomed) {
        resetZoom();
	} else {
		currentScale = ZOOM_SCALE;
		lightboxImage.style.cursor = "grab";
		updateTransform();
}
});

/* ===== ZOOM PAR PINCEMENT — MOBILE / TABLETTE ===== */

lightboxImage.addEventListener("touchstart", e => {

    if (!window.matchMedia("(max-width: 1024px)").matches) {
        return;
    }

    if (e.touches.length === 2) {

        e.preventDefault();

        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;

        pinchStartDistance = Math.hypot(dx, dy);
        pinchStartScale = currentScale;
    }

}, { passive: false });


lightboxImage.addEventListener("touchmove", e => {

    if (!window.matchMedia("(max-width: 1024px)").matches) {
        return;
    }

    if (e.touches.length === 2) {

        e.preventDefault();

        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;

        const currentDistance = Math.hypot(dx, dy);

        if (pinchStartDistance === 0) return;

        const scaleChange = currentDistance / pinchStartDistance;

        currentScale = Math.min(
            Math.max(pinchStartScale * scaleChange, 1),
            ZOOM_SCALE
        );

        isZoomed = currentScale > 1;

        updateTransform();
    }

}, { passive: false });


lightboxImage.addEventListener("touchend", e => {

    if (!window.matchMedia("(max-width: 1024px)").matches) {
        return;
    }

    if (e.touches.length < 2) {
        pinchStartDistance = 0;
    }

});

    /* ===== DÉBUT DRAG ===== */
    lightboxImage.addEventListener("mousedown", e => {
        if (!isZoomed) return;

        isDragging = true;
        hasDragged = false;

        startX = e.clientX;
        startY = e.clientY;

        lightboxImage.style.cursor = "grabbing";
        e.preventDefault();
    });

    /* ===== DRAG EN COURS ===== */
    window.addEventListener("mousemove", e => {
        if (!isDragging) return;

        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) {
            hasDragged = true;
        }

        if (!hasDragged) return;

        offsetX += dx * DRAG_SPEED;
        offsetY += dy * DRAG_SPEED;

        startX = e.clientX;
        startY = e.clientY;

        updateTransform();
    });

    /* ===== FIN DRAG ===== */
    window.addEventListener("mouseup", () => {
        if (!isDragging) return;

        isDragging = false;
        lightboxImage.style.cursor = isZoomed ? "grab" : "zoom-in";
    });

    /* ===== RESET ===== */
	function resetZoom() {
		isZoomed = false;
		isDragging = false;
		hasDragged = false;

		currentScale = 1;
		pinchStartDistance = 0;
		pinchStartScale = 1;

		offsetX = 0;
		offsetY = 0;

		lightboxImage.style.cursor = "zoom-in";
		updateTransform();
	}

    function updateTransform() {
    lightboxImage.style.transform =
        `translate(${offsetX}px, ${offsetY}px) scale(${currentScale})`;
	}
}

/* =========================================================
   ORIGINES — IMAGES RESPONSIVES
   TABLETTE ET MOBILE
========================================================= */

function updateOriginsMobileImages() {

    const isTabletOrMobile =
        window.matchMedia("(max-width: 1024px)").matches;

    document.querySelectorAll(".origins-content").forEach(originsContent => {

        const originsText = originsContent.querySelector(".origins-text");
        const originsImages = originsContent.querySelector(".origins-images");

        if (!originsText || !originsImages) {
            return;
        }

        const mobileImages = [
            ...originsImages.querySelectorAll("img.origin-mobile-only")
        ];

        if (mobileImages.length === 0) {
            return;
        }

        /* =========================
           PC
        ========================= */

        if (!isTabletOrMobile) {

            originsImages.style.removeProperty("height");
            originsImages.style.removeProperty("justify-content");

            mobileImages.forEach(img => {
                img.style.removeProperty("display");
            });

            return;
        }

        /* =========================
           TABLETTE / MOBILE
        ========================= */

        const availableHeight =
            originsText.getBoundingClientRect().height;

        if (availableHeight <= 0) {
            return;
        }

        /*
         * Toutes les images sont temporairement affichées
         * afin de connaître leur hauteur réelle.
         */
        mobileImages.forEach(img => {
            img.style.display = "block";
        });

        /*
         * La colonne images prend exactement
         * la hauteur du texte.
         */
        originsImages.style.height = `${availableHeight}px`;
        originsImages.style.justifyContent = "space-between";

        let usedHeight = 0;
        let visibleCount = 0;

        /*
         * On ajoute les images une par une.
         * Dès qu'une image ne peut plus tenir,
         * les suivantes sont masquées.
         */
        for (const img of mobileImages) {

            const imageHeight =
                img.getBoundingClientRect().height;

            if (imageHeight <= 0) {
                continue;
            }

            if (usedHeight + imageHeight > availableHeight) {
                break;
            }

            usedHeight += imageHeight;
            visibleCount++;
        }

        /*
         * Affiche uniquement les images qui peuvent tenir.
         */
        mobileImages.forEach((img, index) => {

            img.style.display =
                index < visibleCount ? "block" : "none";

        });
    });
}


/* Calcul initial */
updateOriginsMobileImages();


/* Recalcul lorsque les images terminent leur chargement */
document.querySelectorAll(
    ".origins-images img.origin-mobile-only"
).forEach(img => {

    img.addEventListener("load", () => {
        updateOriginsMobileImages();
    });

});


/* Recalcul lors d'un changement de taille */
let originsResizeFrame = null;

window.addEventListener("resize", () => {

    if (originsResizeFrame) {
        cancelAnimationFrame(originsResizeFrame);
    }

    originsResizeFrame = requestAnimationFrame(() => {
        updateOriginsMobileImages();
    });

});
	
/* ===========
   CARROUSEL
============= */

const carousel = document.querySelector(".carousel-test");

if (carousel) {
    const track = carousel.querySelector(".track");
    const pages = track.querySelectorAll(".carousel-page");
    const prev = carousel.querySelector("#prev");
    const next = carousel.querySelector("#next");

    let index = 0;
    let timer = null;

    function update() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextPage() {
        index = (index + 1) % pages.length;
        update();
    }

    function prevPage() {
        index = (index - 1 + pages.length) % pages.length;
        update();
    }

    function startAuto() {
        stopAuto();
        timer = setInterval(nextPage, 3000);
    }

    function stopAuto() {
        clearInterval(timer);
        timer = null;
    }

    next.addEventListener("click", () => {
        stopAuto();
        nextPage();
        startAuto();
    });

    prev.addEventListener("click", () => {
        stopAuto();
        prevPage();
        startAuto();
    });

    carousel.addEventListener("mouseenter", stopAuto);
    carousel.addEventListener("mouseleave", startAuto);

    startAuto();
}

/* =========================
   BOUTON RETOUR EN HAUT
========================= */

const backToTopBtn = document.getElementById("backToTop");

if (backToTopBtn) {

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "flex";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* =========================
   ÉQUIPES – GRILLE ADAPTATIVE (TOUTES LES GRILLES)
========================= */

document.querySelectorAll(".teams-grid").forEach(teamsGrid => {
    const teams = teamsGrid.querySelectorAll(".team-card");
    const count = teams.length;

    // Supprime toutes les classes existantes
    teamsGrid.classList.remove("teams-1", "teams-2", "teams-3", "teams-4", "teams-5");

    // Ajoute la classe correspondant au nombre exact d'éléments
    if (count === 1) {
        teamsGrid.classList.add("teams-1");
    } else if (count === 2) {
        teamsGrid.classList.add("teams-2");
    } else if (count === 3) {
        teamsGrid.classList.add("teams-3");
    } else if (count === 4) {
        teamsGrid.classList.add("teams-4");
    } else if (count === 5) {
        teamsGrid.classList.add("teams-5");
    } else {
        // Si plus de 5 éléments, utilise 5 colonnes
        // Les éléments suivants passeront automatiquement à la ligne
        teamsGrid.classList.add("teams-5");
    }
});

/* =========================
   ENNEMIS – GRILLE ADAPTATIVE
========================= */

function updateEnemyGrids() {

    document.querySelectorAll(".enemies-grid").forEach(enemiesGrid => {

        const enemies = [...enemiesGrid.querySelectorAll(".enemy-card")];
        const count = enemies.length;

        /* Nettoyage */
        enemiesGrid.classList.remove(
            "cols-2",
            "cols-3",
            "cols-4",
            "cols-5",
            "mobile-balanced"
        );

    enemies.forEach(enemy => {
		enemy.style.removeProperty("--enemy-span");
		enemy.style.removeProperty("--enemy-height");
	});

        /* =========================
           DESKTOP
        ========================= */

        let cols;

        if (count <= 3) {
            cols = count;
        } else if (count <= 6) {
            cols = 3;
        } else if (count === 7) {
            cols = 4;
        } else if (count % 4 === 0) {
            cols = 4;
        } else {
            const remainderWith5 = count % 5;

            if (remainderWith5 === 1 || remainderWith5 === 2) {
                cols = 4;
            } else {
                cols = 5;
            }
        }

        enemiesGrid.classList.add(`cols-${cols}`);

        /* =========================
           MOBILE / TABLETTE
        ========================= */

        if (window.matchMedia("(max-width: 1024px)").matches && count >= 5) {

            enemiesGrid.classList.add("mobile-balanced");

            /*
             * Maximum 4 images par ligne.
             */
            const rows = Math.ceil(count / 4);

            /*
             * Nombre minimum d'images par ligne.
             */
            const base = Math.floor(count / rows);

            /*
             * Nombre de lignes ayant
             * une image supplémentaire.
             */
            const extra = count % rows;

            const rowSizes = Array(rows).fill(base);

            for (let i = 0; i < extra; i++) {
                rowSizes[i]++;
            }

            let enemyIndex = 0;

            rowSizes.forEach(rowSize => {

                /*
                 * 12 colonnes CSS :
                 *
                 * 2 images = 6 colonnes
                 * 3 images = 4 colonnes
                 * 4 images = 3 colonnes
                 */
                const span = 12 / rowSize;

/*
 * Hauteur adaptée au nombre d'images
 * sur la ligne.
 */
let imageHeight;

if (rowSize === 2) {
    imageHeight = 220;
} else if (rowSize === 3) {
    imageHeight = 190;
} else {
    imageHeight = 160;
}

for (let i = 0; i < rowSize; i++) {

    if (enemies[enemyIndex]) {

        enemies[enemyIndex].style.setProperty(
            "--enemy-span",
            span
        );

        enemies[enemyIndex].style.setProperty(
            "--enemy-height",
            `${imageHeight}px`
        );

        enemyIndex++;
    }
}
            });
        }
    });
}

/* Au chargement */
updateEnemyGrids();

/* Si la largeur de la fenêtre change */
window.addEventListener("resize", updateEnemyGrids);

/* =========================
   SEARCH — GLOBAL SITE
========================= */

const globalSearchInput = document.getElementById("search-input");
const globalSearchBtn = document.getElementById("search-btn");

if (globalSearchInput && globalSearchBtn) {

    function getRootPath() {
        const scripts = document.querySelectorAll("script[src]");
        for (const script of scripts) {
            const src = script.getAttribute("src");
            // script.js est toujours à la racine du site
            if (src.endsWith("script.js")) {
                // Retire "script.js" pour ne garder que le préfixe de chemin
                return src.replace("script.js", "");
            }
        }
        return "";
    }

    globalSearchBtn.addEventListener("click", () => {
        const query = globalSearchInput.value.trim();
        if (!query) return;
        const root = getRootPath();
        window.location.href = `${root}search.html?q=${encodeURIComponent(query)}`;
    });

    globalSearchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            globalSearchBtn.click();
        }
    });
}

/* =========================
   IMAGE MOBILE — SWAP SRC (ROBUSTE)
========================= */

function updateResponsiveImages() {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    document.querySelectorAll("img[data-mobile-src]").forEach(img => {

        // Sauvegarde du src desktop une seule fois
        if (!img.dataset.desktopSrc) {
            img.dataset.desktopSrc = img.src;
        }

        if (isMobile) {
            img.src = img.dataset.mobileSrc;
        } else {
            img.src = img.dataset.desktopSrc;
        }
    });
}

// au chargement
updateResponsiveImages();

// au redimensionnement
window.addEventListener("resize", updateResponsiveImages);

/* =========================
   FORMULAIRE DE CONTACT
========================= */

const contactReason = document.getElementById("contact-reason");
const characterSuggestion = document.getElementById("character-suggestion");
const contactMessage = document.getElementById("contact-message");
const messageSection = contactMessage
    ? contactMessage.closest(".contact-section")
    : null;

if (contactReason) {

    function updateContactForm() {

        const reason = contactReason.value;

        /* =========================
           SUGGESTION DE NOUVELLE PAGE
        ========================= */

        if (characterSuggestion) {
            characterSuggestion.style.display =
                reason === "suggestion" ? "block" : "none";
        }

        /* =========================
           MESSAGE
        ========================= */

        if (messageSection) {
            const showMessage =
                reason === "error" ||
                reason === "bug" ||
                reason === "improvement" ||
				reason === "suggestion" ||
                reason === "other";

            messageSection.style.display =
                showMessage ? "block" : "none";
        }
    }

    contactReason.addEventListener("change", updateContactForm);

    /* État initial */
    updateContactForm();
}

/* =========================
   LIENS — NOUVEL ONGLET SUR PC
   MÊME PAGE SUR MOBILE / TABLETTE
========================= */

function adaptLinksForTouchDevices() {

    const isTouchLayout = window.matchMedia("(max-width: 768px)").matches;

    document.querySelectorAll("a[target]").forEach(link => {

        const target = link.getAttribute("target");

        // On ne s'occupe que des liens qui ouvrent un nouvel onglet
        if (target !== "_blank" && target !== "blank") {
            return;
        }

        if (isTouchLayout) {

            // Mémorise la valeur originale
            if (!link.dataset.originalTarget) {
                link.dataset.originalTarget = target;
            }

            // Sur mobile/tablette : même page
            link.removeAttribute("target");

        } else {

            // Sur PC : restaure le comportement original
            if (link.dataset.originalTarget) {
                link.setAttribute("target", link.dataset.originalTarget);
            }
        }
    });
}

// Au chargement
adaptLinksForTouchDevices();

// Si l'utilisateur redimensionne la fenêtre
window.addEventListener("resize", adaptLinksForTouchDevices);

/* =========================
   LIENS VERS PAGES INEXISTANTES
========================= */

function checkUnavailableLinks() {

    // Vérifie que l'index des pages est bien disponible
    if (!window.SEARCH_INDEX) return;

    // Liste des pages réellement existantes
    const existingPages = new Set(
        window.SEARCH_INDEX.map(item =>
            item.url.replace(/^\/+/, "")
        )
    );

    document.querySelectorAll("a[href]").forEach(link => {

        const href = link.getAttribute("href");

        // Ignore les liens particuliers
        if (
            !href ||
            href.startsWith("#") ||
            href.startsWith("http://") ||
            href.startsWith("https://") ||
            href.startsWith("mailto:") ||
            href.startsWith("tel:") ||
            href.startsWith("javascript:")
        ) {
            return;
        }

        // Ignore les fichiers qui ne sont pas des pages HTML
        if (!href.toLowerCase().includes(".html")) {
            return;
        }

		// Transforme le chemin du lien en URL absolue
		const linkUrl = new URL(href, window.location.href);

		// Ignore les liens qui sortent du site
		if (linkUrl.origin !== window.location.origin) {
			return;
		}

		// Recherche le chemin de script.js
		const scripts = document.querySelectorAll("script[src]");
		let scriptSrc = null;

		for (const script of scripts) {
			const src = script.getAttribute("src");

			if (src && src.endsWith("script.js")) {
				scriptSrc = src;
				break;
			}
		}

if (!scriptSrc) return;

// Détermine l'emplacement de la racine du site
const scriptUrl = new URL(scriptSrc, document.baseURI);
const siteRoot = new URL("./", scriptUrl);

// Chemin du lien relatif à la racine du site
let sitePath = linkUrl.pathname;

if (siteRoot.pathname !== "/" && sitePath.startsWith(siteRoot.pathname)) {
    sitePath = sitePath.substring(siteRoot.pathname.length);
}

sitePath = decodeURIComponent(sitePath).replace(/^\/+/, "");

/* =========================
   PAGES UTILITAIRES DU SITE
========================= */

if (
    sitePath === "toutes-les-pages.html" ||
    sitePath === "tous-les-heros.html" ||
    sitePath === "tous-les-ennemis.html" ||
    sitePath === "contact.html"
) {
    return;
}

	// La page existe : on ne touche absolument à rien
	if (existingPages.has(sitePath)) {
		return;
	}

        /* =========================
           PAGE INEXISTANTE
        ========================= */

        const image = link.querySelector("img");

		// CAS 1 : lien contenant une image
		if (image) {

			link.addEventListener("click", event => {
				event.preventDefault();
				event.stopPropagation();

				const lightbox = document.getElementById("lightbox");
				const lightboxImage = document.getElementById("lightboxImage");

				if (!lightbox || !lightboxImage) return;

				lightboxImage.src = image.src;
				lightbox.classList.add("active");
				document.body.classList.add("lightbox-open");

				if (window.matchMedia("(max-width: 1024px)").matches) {
					history.pushState({ lightbox: true }, "", window.location.href);
					lightboxHistoryActive = true;
				}
			});

            // L'image est maintenant considérée comme une image de lightbox
            image.classList.add("lightbox-trigger");

            // Le lien ne doit plus apparaître comme cliquable
            link.style.cursor = "default";
        }

        // CAS 2 : lien contenant du texte
        else {

            // Empêche toute navigation
            link.addEventListener("click", event => {
                event.preventDefault();
                event.stopPropagation();
            });

            // Apparence d'un texte normal
            link.style.color = "inherit";
            link.style.textDecoration = "none";
            link.style.cursor = "default";

            // Accessibilité
            link.setAttribute("aria-disabled", "true");
        }
    });
}


/* =========================
   CHARGEMENT AUTOMATIQUE
   DE L'INDEX DES PAGES
========================= */

(function loadSearchIndex() {

    // Si SEARCH_INDEX est déjà disponible, on l'utilise directement
    if (window.SEARCH_INDEX) {
        checkUnavailableLinks();
        return;
    }

    // Recherche l'emplacement de script.js
    const scripts = document.querySelectorAll("script[src]");
    let scriptSrc = null;

    for (const script of scripts) {
        const src = script.getAttribute("src");

        if (src && src.endsWith("script.js")) {
            scriptSrc = src;
            break;
        }
    }

    if (!scriptSrc) return;

    // Détermine automatiquement la racine du site
    const absoluteScriptUrl = new URL(scriptSrc, document.baseURI).href;
	const searchDataUrl = new URL("search-data.js", absoluteScriptUrl).href;

    // Charge automatiquement search-data.js
    const searchDataScript = document.createElement("script");

    searchDataScript.src = searchDataUrl;

    searchDataScript.onload = () => {
        checkUnavailableLinks();
    };

    document.head.appendChild(searchDataScript);

})();

});