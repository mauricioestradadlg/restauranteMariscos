"use strict";

/* =========================================
   NAVEGACIÓN RESPONSIVA
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
    const navegaciones = document.querySelectorAll(
        ".navbar"
    );

    navegaciones.forEach((navbar) => {
        const botonMenu = navbar.querySelector(
            ".nav-toggle"
        );

        const listaEnlaces = navbar.querySelector(
            ".nav-links"
        );

        const enlaces = navbar.querySelectorAll(
            ".nav-link"
        );

        /*
            Evita errores en páginas que no tengan
            la estructura de navegación completa.
        */

        if (!botonMenu || !listaEnlaces) {
            return;
        }


        /* =====================================
           CAMBIAR ESTADO DEL MENÚ
           ===================================== */

        const cambiarEstadoMenu = (abrir) => {
            listaEnlaces.classList.toggle(
                "nav-links-abierto",
                abrir
            );

            botonMenu.classList.toggle(
                "nav-toggle-activo",
                abrir
            );

            botonMenu.setAttribute(
                "aria-expanded",
                String(abrir)
            );

            botonMenu.setAttribute(
                "aria-label",
                abrir
                    ? "Cerrar menú de navegación"
                    : "Abrir menú de navegación"
            );
        };


        /* =====================================
           ABRIR O CERRAR AL PULSAR EL BOTÓN
           ===================================== */

        botonMenu.addEventListener("click", () => {
            const menuEstaAbierto =
                botonMenu.getAttribute(
                    "aria-expanded"
                ) === "true";

            cambiarEstadoMenu(
                !menuEstaAbierto
            );
        });


        /* =====================================
           CERRAR AL SELECCIONAR UN ENLACE
           ===================================== */

        enlaces.forEach((enlace) => {
            enlace.addEventListener("click", () => {
                cambiarEstadoMenu(false);
            });
        });


        /* =====================================
           CERRAR AL PULSAR FUERA DEL MENÚ
           ===================================== */

        document.addEventListener("click", (evento) => {
            const clicDentroDelNavbar =
                navbar.contains(evento.target);

            if (!clicDentroDelNavbar) {
                cambiarEstadoMenu(false);
            }
        });


        /* =====================================
           CERRAR CON LA TECLA ESCAPE
           ===================================== */

        document.addEventListener("keydown", (evento) => {
            if (evento.key === "Escape") {
                cambiarEstadoMenu(false);

                botonMenu.focus();
            }
        });


        /* =====================================
           RESTABLECER AL PASAR A ESCRITORIO
           ===================================== */

        window.addEventListener("resize", () => {
            if (window.innerWidth > 700) {
                cambiarEstadoMenu(false);
            }
        });
    });
});