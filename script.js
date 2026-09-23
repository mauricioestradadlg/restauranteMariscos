"use strict";

/* =====================================================
   RESTAURANTE MARISCOS
   FUNCIONALIDAD GENERAL
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       WHATSAPP
       ===================================================== */

    const numeroWhatsApp =
        "525634893797";


    const enlacesWhatsApp =
        document.querySelectorAll(
            ".js-whatsapp-link"
        );


    enlacesWhatsApp.forEach((enlace) => {

        const mensaje =
            enlace.dataset.whatsappMessage ||
            "Hola, me gustaría solicitar información del restaurante.";


        const mensajeCodificado =
            encodeURIComponent(mensaje);


        enlace.href =
            `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;


        enlace.target =
            "_blank";


        enlace.rel =
            "noopener noreferrer";

    });



    /* =====================================================
       CERRAR NAVBAR MÓVIL DESPUÉS DE SELECCIONAR
       UNA SECCIÓN
       ===================================================== */

    const navbarCollapse =
        document.getElementById(
            "mainNavbar"
        );


    if (navbarCollapse) {

        const enlacesNavbar =
            navbarCollapse.querySelectorAll(
                'a[href^="#"]'
            );


        enlacesNavbar.forEach((enlace) => {

            enlace.addEventListener(
                "click",
                () => {

                    /*
                        Bootstrap solo necesita cerrar manualmente
                        el collapse cuando estamos en móvil.
                    */

                    if (
                        window.innerWidth < 992 &&
                        navbarCollapse.classList.contains(
                            "show"
                        )
                    ) {

                        const instanciaCollapse =
                            bootstrap.Collapse.getOrCreateInstance(
                                navbarCollapse
                            );


                        instanciaCollapse.hide();

                    }

                }
            );

        });

    }

});