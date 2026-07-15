"use strict";

/* =========================================
   INFORMACIÓN DEL MENÚ
   ========================================= */

const menuCategorias = {

    /* =========================================
       ENTRADAS
       ========================================= */

    entradas: {
        titulo: "Entradas",

        descripcion:
            "Comienza tu experiencia con nuestras entradas frescas y llenas de sabor.",

        platillos: [
            {
                nombre: "Aguachile verde",

                descripcion:
                    "Camarón fresco con limón, pepino, cebolla morada y chile verde.",

                precio: 185,

                imagen:
                    "https://laroussecocina.mx/wp-content/uploads/2025/04/DSC00642.jpg.webp"
            },

            {
                nombre: "Cóctel de camarón",

                descripcion:
                    "Camarones con salsa de tomate, aguacate, cilantro y cebolla.",

                precio: 170,

                imagen:
                    "https://www.muydelish.com/wp-content/uploads/2024/08/mexican-shrimp-cocktail.jpg"
            },

            {
                nombre: "Ceviche de pescado",

                descripcion:
                    "Pescado marinado en limón acompañado de verduras frescas.",

                precio: 155,

                imagen:
                    "https://www.cocinavital.mx/wp-content/uploads/2026/02/receta-de-ceviche-de-pescado-estilo-sinaloa.jpg"
            },

            {
                nombre: "Camarones empanizados",

                descripcion:
                    "Camarones crujientes acompañados de aderezo de la casa.",

                precio: 195,

                imagen:
                    "https://www.casademexico.es/wp-content/uploads/2025/07/camarones-300-540x300-1.jpg"
            },

            {
                nombre: "Guacamole con totopos",

                descripcion:
                    "Aguacate preparado al momento con tomate, cebolla y cilantro.",

                precio: 120,

                imagen:
                    "https://granvita.com/wp-content/uploads/2020/09/HEader_Guacamole.jpg"
            },

            {
                nombre: "Ostiones preparados",

                descripcion:
                    "Ostiones frescos con limón, salsa especial y cebolla morada.",

                precio: 210,

                imagen:
                    "https://cdn7.kiwilimon.com/recetaimagen/37895/960x640/48166.jpg.jpg"
            }
        ]
    },


    /* =========================================
       TACOS
       ========================================= */

    tacos: {
        titulo: "Tacos",

        descripcion:
            "Tacos preparados al momento con tortillas calientes y mariscos frescos.",

        platillos: [
            {
                nombre: "Taco de camarón",

                descripcion:
                    "Camarón sazonado, col, pico de gallo y aderezo especial.",

                precio: 65,

                imagen:
                    "https://images.cookforyourlife.org/wp-content/uploads/2018/08/Spicy-Baja-Style-Shrimp-Tacos.jpg"
            },

            {
                nombre: "Taco de pescado",

                descripcion:
                    "Filete de pescado empanizado con col y salsa cremosa.",

                precio: 60,

                imagen:
                    "https://comedera.com/wp-content/uploads/sites/9/2025/09/Tacos-de-pescado.jpg"
            },

            {
                nombre: "Taco gobernador",

                descripcion:
                    "Camarón con queso fundido, chile poblano y cebolla.",

                precio: 75,

                imagen:
                    "https://cdn-ilddihb.nitrocdn.com/MgqZCGPEMHvMRLsisMUCAIMWvgGMxqaj/assets/images/optimized/rev-cabea1b/www.goya.com/wp-content/uploads/2024/09/tacos-gobernador-900x900.jpg"
            },

            {
                nombre: "Taco de marlín",

                descripcion:
                    "Marlín ahumado guisado con tomate, cebolla y especias.",

                precio: 68,

                imagen:
                    "https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2019/08/tacos-de-marlin.jpg"
            },

            {
                nombre: "Taco de pulpo",

                descripcion:
                    "Pulpo a la plancha acompañado de aguacate y salsa de la casa.",

                precio: 82,

                imagen:
                    "https://www.cocinavital.mx/wp-content/uploads/2018/08/tacos-de-pulpo-zarandeado.jpg"
            },

            {
                nombre: "Taco mixto",

                descripcion:
                    "Combinación de pescado, camarón y pulpo con queso.",

                precio: 85,

                imagen:
                    "https://i.ytimg.com/vi/7Bk-J5d704I/maxresdefault.jpg"
            }
        ]
    },


    /* =========================================
       TOSTADAS
       ========================================= */

    tostadas: {
        titulo: "Tostadas",

        descripcion:
            "Tostadas crujientes servidas con preparaciones frescas del mar.",

        platillos: [
            {
                nombre: "Tostada de ceviche",

                descripcion:
                    "Ceviche de pescado, aguacate, pepino y salsa de la casa.",

                precio: 85,

                imagen:
                    "https://laroussecocina.mx/wp-content/uploads/2023/03/Tostada-de-ceviche-mixto.jpg.webp"
            },

            {
                nombre: "Tostada de camarón",

                descripcion:
                    "Camarón cocido con aguacate, cebolla morada y limón.",

                precio: 95,

                imagen:
                    "https://editorialtelevisa.brightspotcdn.com/92/f4/837454ae48c3a120da1627a01199/tostadas-de-camaron.jpg"
            },

            {
                nombre: "Tostada de atún",

                descripcion:
                    "Atún fresco con aguacate, ajonjolí y salsa oriental.",

                precio: 110,

                imagen:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHkdCquf3pI5SxzHsyZPvA33pz4IddNwxFycuulCESXybuaOptr5kqKC3U&s=10"
            },

            {
                nombre: "Tostada de pulpo",

                descripcion:
                    "Pulpo sazonado con cebolla, pepino, aguacate y limón.",

                precio: 115,

                imagen:
                    "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/FDE79D5C-3530-4058-B689-2613F6DC28FF/Derivates/266805F7-0F47-40DF-AA73-A3D1C7522A1E.jpg"
            },

            {
                nombre: "Tostada de aguachile",

                descripcion:
                    "Camarón marinado en chile verde con pepino y cebolla.",

                precio: 105,

                imagen:
                    "https://www.northgatemarket.com/wp-content/uploads/2024/03/AC_20240219_northgate_GLDP_aguachile_pescado_753_01-e1709354494229.jpg"
            },

            {
                nombre: "Tostada mixta",

                descripcion:
                    "Pescado, camarón y pulpo acompañados de aguacate.",

                precio: 120,

                imagen:
                    "https://media.zenfs.com/es/animal_gourmet_468/c8306fbfbbb94c06738db914cb7767b7"
            }
        ]
    },


    /* =========================================
       CALDOS
       ========================================= */

    caldos: {
        titulo: "Caldos",

        descripcion:
            "Caldos calientes y reconfortantes preparados con recetas tradicionales.",

        platillos: [
            {
                nombre: "Caldo de camarón",

                descripcion:
                    "Caldo rojo con camarones, verduras y especias mexicanas.",

                precio: 175,

                imagen:
                    "https://images.unsplash.com/photo-1726514731660-08f11ef1fdc1?q=80&w=1000&auto=format&fit=crop"
            },

            {
                nombre: "Caldo de pescado",

                descripcion:
                    "Pescado fresco cocinado con tomate, chile y verduras.",

                precio: 165,

                imagen:
                    "https://www.lasrecetasdelaura.com/wp-content/uploads/2017/08/en-feature-blog-6.jpg"
            },

            {
                nombre: "Caldo de mariscos",

                descripcion:
                    "Camarón, pescado, pulpo y almejas en caldo especial.",

                precio: 225,

                imagen:
                    "https://palatablepastime.com/wp-content/uploads/2017/11/caldo-de-mariscos-sq.jpg"
            },

            {
                nombre: "Caldo de jaiba",

                descripcion:
                    "Jaiba cocida lentamente con verduras y condimentos.",

                precio: 195,

                imagen:
                    "https://media-cdn.tripadvisor.com/media/photo-m/1280/15/81/bf/52/caldo-de-jaiba.jpg"
            },

            {
                nombre: "Caldo de pulpo",

                descripcion:
                    "Pulpo tierno en caldo de tomate con verduras frescas.",

                precio: 215,

                imagen:
                    "https://recipe1.ezmember.co.kr/cache/recipe/2020/08/22/e314e9632dbb96ede857fe9aec4a7c371.jpg"
            },

            {
                nombre: "Caldo mixto",

                descripcion:
                    "Combinación abundante de pescado, camarón y pulpo.",

                precio: 235,

                imagen:
                    "https://www.prensalibre.com/wp-content/uploads/2025/02/Caldo-de-mariscos-en-Guatemala-receta-tradicional-ingredientes-y-preparacion-paso-a-paso.jpeg?quality=52"
            }
        ]
    },


    /* =========================================
       PLATILLOS
       ========================================= */

    platillos: {
        titulo: "Platillos",

        descripcion:
            "Especialidades completas preparadas con los mejores sabores del mar.",

        platillos: [
            {
                nombre: "Camarones al mojo de ajo",

                descripcion:
                    "Camarones salteados con ajo y mantequilla, acompañados de arroz.",

                precio: 245,

                imagen:
                    "https://images.unsplash.com/photo-1735357744836-17ed06db25d9?q=85&w=1000&auto=format&fit=crop"
            },

            {
                nombre: "Filete de pescado empanizado",

                descripcion:
                    "Filete crujiente acompañado de ensalada, arroz y papas.",

                precio: 220,

                imagen:
                    "https://images.unsplash.com/photo-1579208030886-b937da0925dc?q=80&w=1000&auto=format&fit=crop"
            },

            {
                nombre: "Pescado zarandeado",

                descripcion:
                    "Pescado marinado con salsa especial y cocinado a las brasas.",

                precio: 295,

                imagen:
                    "https://comedera.com/wp-content/uploads/sites/9/2019/01/pescado-zarandeado.jpg"
            },

            {
                nombre: "Parrillada de mariscos",

                descripcion:
                    "Camarón, pulpo, pescado y verduras preparados a la parrilla.",

                precio: 390,

                imagen:
                    "https://www.cocinavital.mx/wp-content/uploads/2023/03/parrillada-de-mariscos-todo-lo-que-necesitas.jpg"
            },

            {
                nombre: "Pulpo al ajillo",

                descripcion:
                    "Pulpo salteado con ajo, chile y mantequilla.",

                precio: 285,

                imagen:
                    "https://polacocina.com/wp-content/uploads/2021/01/Pulpo-al-ajillo.jpg"
            },

            {
                nombre: "Salmón a la plancha",

                descripcion:
                    "Salmón acompañado de vegetales asados y arroz.",

                precio: 310,

                imagen:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxBw-9g20gF48dj85keFi9_9aK_oa7y3ekQkdba9sKJq3jQEiN_gAbZ8YV&s=10"
            }
        ]
    },


    /* =========================================
       BEBIDAS
       ========================================= */

    bebidas: {
        titulo: "Bebidas",

        descripcion:
            "Bebidas refrescantes para acompañar tus platillos favoritos.",

        platillos: [
            {
                nombre: "Limonada natural",

                descripcion:
                    "Limonada preparada al momento con limón fresco.",

                precio: 45,

                imagen:
                    "https://thumbs.dreamstime.com/b/vaso-de-limonada-con-menta-y-limones-vidrio-lim%C3%B3n-sobre-una-bandeja-madera-fondo-rural-248527661.jpg"
            },

            {
                nombre: "Cerveza",

                descripcion:
                    "Modelo, Corona, Victoria y Pacifico",

                precio: 55,

                imagen:
                    "https://maletadeviajes.com/wp-content/uploads/2020/08/modelo-1280x720.jpg"
            },

            {
                nombre: "Agua de jamaica",

                descripcion:
                    "Agua fresca de jamaica servida con hielo.",

                precio: 40,

                imagen:
                    "https://www.infobae.com/new-resizer/uG1_j7rxuCS3kHhMu-ThO0rrDEo=/arc-anglerfish-arc2-prod-infobae/public/IDNEPYYXRJBFHBLLZZ5BO5OJDY.jpg"
            },

            {
                nombre: "Agua de horchata",

                descripcion:
                    "Bebida tradicional de arroz con canela.",

                precio: 40,

                imagen:
                    "https://www.lasalsapremier.mx/wp-content/uploads/2022/11/horchata.jpg"
            },

            {
                nombre: "Refresco",

                descripcion:
                    "Variedad de refrescos servidos fríos.",

                precio: 42,

                imagen:
                    "https://image.tuasaude.com/media/article/bh/og/consecuencias-de-tomar-refresco_71130.webp"
            },

            {
                nombre: "Clamato preparado",

                descripcion:
                    "Clamato con limón, salsas y escarchado especial.",

                precio: 75,

                imagen:
                    "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/811BB471-6DD7-465E-B731-A2EC87894EE9/Derivates/38999332-C415-4179-B289-342A896A517F.jpg"
            }
        ]
    }
};


/* =========================================
   ELEMENTOS DEL DOCUMENTO
   ========================================= */

const botonesCategorias = document.querySelectorAll(
    ".menu-categoria-card"
);

const seccionResultados = document.getElementById(
    "menu-resultados"
);

const tituloResultados = document.getElementById(
    "menu-resultados-titulo"
);

const descripcionResultados = document.getElementById(
    "menu-resultados-descripcion"
);

const contenedorPlatillos = document.getElementById(
    "menu-platillos-grid"
);


/* =========================================
   FORMATEAR PRECIOS
   ========================================= */

const formatearPrecio = (precio) => {
    return new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN",
        minimumFractionDigits: 0
    }).format(precio);
};


/* =========================================
   CREAR UNA TARJETA DE PLATILLO
   ========================================= */

const crearTarjetaPlatillo = (platillo) => {
    const tarjeta = document.createElement("article");

    tarjeta.className = "menu-platillo-card";

    const imagen = document.createElement("img");

    imagen.src = platillo.imagen;
    imagen.alt = platillo.nombre;
    imagen.className = "menu-platillo-imagen";
    imagen.loading = "lazy";

    const contenido = document.createElement("div");

    contenido.className = "menu-platillo-contenido";

    const nombre = document.createElement("h3");

    nombre.className = "menu-platillo-nombre";
    nombre.textContent = platillo.nombre;

    const descripcion = document.createElement("p");

    descripcion.className = "menu-platillo-descripcion";
    descripcion.textContent = platillo.descripcion;

    const precio = document.createElement("p");

    precio.className = "menu-platillo-precio";
    precio.textContent = formatearPrecio(platillo.precio);

    contenido.append(
        nombre,
        descripcion,
        precio
    );

    tarjeta.append(
        imagen,
        contenido
    );

    return tarjeta;
};


/* =========================================
   ACTUALIZAR BOTÓN SELECCIONADO
   ========================================= */

const actualizarBotonSeleccionado = (categoriaId) => {
    botonesCategorias.forEach((boton) => {
        const estaSeleccionado =
            boton.dataset.categoria === categoriaId;

        boton.classList.toggle(
            "menu-categoria-card-activa",
            estaSeleccionado
        );

        boton.setAttribute(
            "aria-pressed",
            String(estaSeleccionado)
        );
    });
};


/* =========================================
   MOSTRAR CATEGORÍA SELECCIONADA
   ========================================= */

const mostrarCategoria = (
    categoriaId,
    desplazarHaciaResultados = true
) => {
    const categoria = menuCategorias[categoriaId];

    if (!categoria) {
        return;
    }

    actualizarBotonSeleccionado(categoriaId);

    /* Actualizar encabezado de resultados */

    tituloResultados.textContent =
        categoria.titulo;

    descripcionResultados.textContent =
        categoria.descripcion;

    /* Eliminar las tarjetas anteriores */

    contenedorPlatillos.replaceChildren();

    /* Agregar las seis tarjetas nuevas */

    categoria.platillos.forEach((platillo) => {
        const tarjeta =
            crearTarjetaPlatillo(platillo);

        contenedorPlatillos.appendChild(tarjeta);
    });

    /* Mostrar la sección de resultados */

    seccionResultados.hidden = false;

    /* Desplazar la pantalla hacia los resultados */

    if (desplazarHaciaResultados) {
        requestAnimationFrame(() => {
            seccionResultados.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }
};


/* =========================================
   ACTUALIZAR CATEGORÍA EN LA URL
   ========================================= */

const actualizarCategoriaEnURL = (categoriaId) => {
    const nuevaURL =
        new URL(window.location.href);

    nuevaURL.searchParams.set(
        "categoria",
        categoriaId
    );

    /*
        Cambia la URL sin recargar la página.

        Ejemplo:
        menu.html?categoria=platillos
    */

    window.history.replaceState(
        {
            categoria: categoriaId
        },
        "",
        nuevaURL
    );
};


/* =========================================
   EVENTOS DE LAS CATEGORÍAS
   ========================================= */

botonesCategorias.forEach((boton) => {
    boton.addEventListener("click", () => {
        const categoriaId =
            boton.dataset.categoria;

        mostrarCategoria(
            categoriaId,
            true
        );

        actualizarCategoriaEnURL(
            categoriaId
        );
    });
});


/* =========================================
   LEER CATEGORÍA RECIBIDA DESDE INDEX.HTML
   ========================================= */

const parametrosURL =
    new URLSearchParams(window.location.search);

const categoriaRecibida =
    parametrosURL.get("categoria");

const categoriaRecibidaExiste =
    categoriaRecibida !== null &&
    Object.prototype.hasOwnProperty.call(
        menuCategorias,
        categoriaRecibida
    );


/* =========================================
   MOSTRAR AUTOMÁTICAMENTE LA CATEGORÍA
   ========================================= */

if (categoriaRecibidaExiste) {
    /*
        Si la URL es:

        menu.html?categoria=platillos

        automáticamente se muestran los seis
        platillos y se desplaza la página hacia ellos.
    */

    mostrarCategoria(
        categoriaRecibida,
        true
    );
}