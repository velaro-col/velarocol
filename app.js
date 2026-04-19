    /* ══ SHOP PAGE NAVIGATION ══ */
    var shopLoaded = false;

    function openShop() {
      document.getElementById('shopPage').classList.add('open');
      document.body.style.overflow = 'hidden';
      document.getElementById('shopPage').scrollTop = 0;
      // Cargar productos solo la primera vez
      if (!shopLoaded) { loadShop(); shopLoaded = true; }
    }

    function closeShop() {
      document.getElementById('shopPage').classList.remove('open');
      document.body.style.overflow = '';
    }

    // Cerrar con Escape ya está manejado arriba (se agregará aquí también)
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeShop();
    });

    function filterBy(brand) {
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));

      if (brand === 'all') {
        document.getElementById('btn-all').classList.add('active');
      } else {
        document.querySelectorAll('.filter-btn').forEach(btn => {
          if (btn.textContent.trim().toUpperCase() === brand) {
            btn.classList.add('active');
          }
        });
      }

      document.querySelectorAll('.product-card').forEach(card => {
        const cardBrand = card.querySelector('.product-brand')?.textContent.trim().toUpperCase() || '';
        card.style.display = (brand === 'all' || cardBrand === brand) ? '' : 'none';
      });
    }

    function searchProducts() {
      const query = document.getElementById('searchInput').value.toUpperCase();

      document.querySelectorAll('.product-card').forEach(card => {
        const name = card.querySelector('.product-name')?.textContent.toUpperCase() || '';
        const brand = card.querySelector('.product-brand')?.textContent.toUpperCase() || '';
        card.style.display = (name.includes(query) || brand.includes(query)) ? '' : 'none';
      });
    }
    // ── MENÚ HAMBURGUESA ──
    function toggleMenu() {
      const btn  = document.getElementById('hamburger');
      const menu = document.getElementById('mobileMenu');
      btn.classList.toggle('open');
      menu.classList.toggle('open');
      document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
    }

    // ── SCROLL FLECHAS MARCAS ──
    const filterBtns = document.getElementById('filterBtns');
    const arrowLeft  = document.getElementById('arrow-left');
    const arrowRight = document.getElementById('arrow-right');

    function scrollBrands(dir) {
      filterBtns.scrollLeft += dir * 200;
    }

    function updateArrows() {
      arrowLeft.disabled  = filterBtns.scrollLeft <= 0;
      arrowRight.disabled = filterBtns.scrollLeft >= filterBtns.scrollWidth - filterBtns.clientWidth - 1;
    }

    filterBtns.addEventListener('scroll', updateArrows);
    window.addEventListener('resize', updateArrows);
    updateArrows();

    // ══ DATOS DE PERFUMES ══
    const perfumeData = {
      "Polo 2 Dama":{"familia":"Floral Frutal","salida":"Arándano, mousse de tonka","corazon":"Frambuesa, peonía","fondo":"Ámbar, almizcle","aroma":"Frutal dulce con toques coquetos y femeninos","duracion":"4-6 horas","ocasion":"Uso diario · Primavera-Verano"},
      "Polo 2 Mini":{"familia":"Floral Frutal","salida":"Arándano, mousse de tonka","corazon":"Frambuesa, peonía","fondo":"Ámbar, almizcle","aroma":"Frutal dulce con toques coquetos y femeninos","duracion":"4-6 horas","ocasion":"Uso diario · Primavera-Verano"},
      "Polo Black":{"familia":"Aromático Leñoso","salida":"Mango helado, mandarina, limón, cardamomo","corazon":"Acorde ozónico, jazmín, armoise plateada","fondo":"Musgo, tonka, pachulí negro, cedro","aroma":"Energía crujiente y sensualidad oscura","duracion":"4-7 horas","ocasion":"Noche · Todo el año"},
      "Polo Blue":{"familia":"Acuático Fresco","salida":"Bergamota, melón, pepino, acorde acuático","corazon":"Salvia, geranio, verbena, albahaca","fondo":"Pachulí, almizcle suave, notas de ante","aroma":"Fresco acuático y marino, limpio y moderno","duracion":"4-6 horas","ocasion":"Casual · Verano"},
      "Polo Red Cítrica":{"familia":"Especiado Oriental","salida":"Pomelo, arándano rojo, limón","corazon":"Lavanda, azafrán, salvia","fondo":"Café, cedro, vainilla, almizcle","aroma":"Cálido, especiado y sofisticado con frescura inicial","duracion":"4-10 horas","ocasion":"Noche · Invierno"},
      "Ralph":{"familia":"Floral Fresco","salida":"Manzana, mandarina italiana, osmanto japonés","corazon":"Fresia amarilla, magnolia, boronia","fondo":"Iris blanco, almizcle","aroma":"Floral fresco y optimista, lleno de energía","duracion":"3-5 horas","ocasion":"Uso diario · Primavera"},
      "Euphoria Men":{"familia":"Aromático Leñoso","salida":"Jengibre, pimienta","corazon":"Albahaca negra, salvia, cedro","fondo":"Ámbar, gamuza, madera roja brasileña, pachulí","aroma":"Refinado y masculino con carácter oscuro y seductor","duracion":"6-8 horas","ocasion":"Uso diario · Noche"},
      "CK One Unisex":{"familia":"Cítrico Aromático","salida":"Piña, mandarina, papaya, bergamota, cardamomo","corazon":"Violeta, iris, jazmín, lirio, rosa","fondo":"Sándalo, ámbar, almizcle, cedro","aroma":"Fresco, limpio y cítrico, ícono unisex atemporal","duracion":"4-6 horas","ocasion":"Unisex · Verano · Versátil"},
      "Euphoria":{"familia":"Floral Oriental","salida":"Granada, caqui","corazon":"Orquídea negra, loto, champaca","fondo":"Caoba, ámbar dorado, violeta negra, nata","aroma":"Exótico, sensual y cremoso con misterio profundo","duracion":"5-8 horas","ocasion":"Noche · Eventos especiales"},
      "One Shock For Him":{"familia":"Oriental Especiado","salida":"Lavanda, clementina, pepino","corazon":"Cardamomo, pimienta, albahaca, osmanto","fondo":"Tabaco, ámbar, pachulí, almizcle","aroma":"Cálido, especiado y sofisticado con provocación","duracion":"5-8 horas","ocasion":"Noche · Otoño-Invierno"},
      "One Shock For Her":{"familia":"Oriental Floral","salida":"Flor de pasión, amapola roja, peonía","corazon":"Mora, chocolate mexicano, narciso, jazmín","fondo":"Vainilla, almizcle, ámbar, pachulí","aroma":"Opulento, floral y dulce con sensualidad oscura","duracion":"4-8 horas","ocasion":"Noche · Otoño-Invierno"},
      "CK IN2U":{"familia":"Aromático Fougère","salida":"Limón, hoja de tomate","corazon":"Vaina de cacao","fondo":"Cedro, almizcle blanco, vetiver","aroma":"Fresco cítrico y distintivo, joven y urbano","duracion":"4-6 horas","ocasion":"Casual · Primavera-Verano"},
      "CK IN2U for Her":{"familia":"Floral Oriental","salida":"Pomelo rosa, bergamota siciliana, hoja de grosella","corazon":"Cactus, orquídea","fondo":"Vainilla, cedro rojo, ámbar","aroma":"Fresco, luminoso y floral con calidez oriental","duracion":"5-6 horas","ocasion":"Casual · Verano"},
      "CH Women":{"familia":"Floral Oriental","salida":"Bergamota, naranja, toronja, melón","corazon":"Rosa búlgara, jazmín, praline, canela","fondo":"Sándalo, cedro, pachulí, almizcle","aroma":"Sofisticada, exótica y sensual con notas tropicales","duracion":"Larga duración","ocasion":"Noche · Ocasiones especiales"},
      "Good Girl Dot Drama":{"familia":"Oriental Floral","salida":"Almendra, bergamota, limón, café","corazon":"Tuberosa, flor de naranja, rosa, jazmín","fondo":"Haba tonka, cachemira, vainilla, praline, cacao","aroma":"Oriental seductor y cautivador con dualidad dulce-oscura","duracion":"Larga duración","ocasion":"Noche · Ocasiones especiales"},
      "CH Men":{"familia":"Oriental Picante","salida":"Hierba, bergamota, pomelo","corazon":"Nuez moscada, violeta, azafrán, jazmín","fondo":"Azúcar, cuero, vainilla, gamuza, ámbar, sándalo","aroma":"Sofisticado, amaderado con cuero y aventura","duracion":"Moderada a larga","ocasion":"Noche · Versátil"},
      "Central Park Men":{"familia":"Amaderada Picante","salida":"Jengibre, toronja, pimienta rosa y negra","corazon":"Cardamomo negro, violeta, té negro","fondo":"Cedro, vetiver","aroma":"Woody y especiado con acorde de jengibre fresco","duracion":"3-5 horas","ocasion":"Diaria · Primavera-Verano"},
      "212 VIP Wild Party":{"familia":"Floral Frutal","salida":"Toronja, piña","corazon":"Flor de naranja, rosa del sol, orquídea","fondo":"Notas amaderadas, almizcle","aroma":"Cóctel dorado y exótico, festivo e irresistible","duracion":"Moderada","ocasion":"Fiesta · Noche"},
      "212 Sexy":{"familia":"Floral Ámbar","salida":"Pimienta rosa, naranja mandarina, bergamota","corazon":"Algodón de azúcar, gardenia, geranio, rosa","fondo":"Vainilla, almizcle, sándalo, caramelo, pachulí","aroma":"Seductora e irresistible, brillante y cálida","duracion":"Moderada a larga","ocasion":"Diaria · Noche"},
      "212 Men Aqua":{"familia":"Amaderada Acuática","salida":"Toronja, bergamota, jengibre, agua de mar","corazon":"Cardamomo, gardenia, cipriol, ambroxan","fondo":"Pachulí, sándalo, vetiver, almizcle","aroma":"Sofisticado y masculino con frescura acuática","duracion":"Moderada","ocasion":"Diaria · Todo el año"},
      "Eau de Parfum Sublime":{"familia":"Floral","salida":"Flor de pasión, bergamota","corazon":"Orquídea, rosa","fondo":"Pachulí, cuero, ámbar, musgo","aroma":"Elegante y sensual inspirada en los años 20","duracion":"Larga duración","ocasion":"Noche · Ocasiones especiales"},
      "CH Very Good Girl Glam":{"familia":"Frutal Floral","salida":"Cereza ácida, almendra amarga","corazon":"Rosa, lirio","fondo":"Vainilla bourbon, vetiver","aroma":"Cherry-forward con florales y vainilla cálida","duracion":"Moderada a larga","ocasion":"Diaria · Ocasiones especiales"},
      "Herrera For Men":{"familia":"Musk Floral Amaderado","salida":"Limón, lavanda, romero, neroli","corazon":"Tabaco, sándalo, geranio, clavo","fondo":"Tabaco, sándalo, ámbar gris","aroma":"Expansivo y sofisticado con nota vibrante de neroli","duracion":"Larga duración","ocasion":"Noche · Todo el año"},
      "Bad Boy":{"familia":"Amaderada Especiada","salida":"Pimienta blanca, pimienta negra, bergamota","corazon":"Salvia, cedro","fondo":"Haba tonka, cacao, amberwood","aroma":"Dulce, seductor, magnético y provocativo","duracion":"Larga duración","ocasion":"Noche · Ocasiones especiales"},
      "CH Men PrivÃ©e":{"familia":"Cuero Amaderado","salida":"Whiskey, toronja, pomelo","corazon":"Cardamomo, lavanda, salvia, tomillo rojo","fondo":"Cuero, haba tonka, notas amaderadas, benzoína","aroma":"Sofisticado y complejo con acento de whiskey","duracion":"Larga duración","ocasion":"Noche · Uso sofisticado"},
      "212 Sexy Men":{"familia":"Ámbar Fougère","salida":"Naranja mandarina, bergamota, notas verdes","corazon":"Pimienta, flores, cardamomo","fondo":"Vainilla, madera guayaco, sándalo, almizcle, ámbar","aroma":"Sensual y magnetizante, misterioso y sofisticado","duracion":"6-8 horas","ocasion":"Noche · Todo el año"},
      "212 VIP RosÃ":{"familia":"Floral Frutal","salida":"Champagne rosé, pimienta rosa","corazon":"Flor de durazno, ramo de rosas","fondo":"Queenwood, almizcle","aroma":"Brillante y fresco con contrastes florales y frutales","duracion":"Moderada a larga","ocasion":"Celebraciones · Primavera"},
      "Good Girl":{"familia":"Oriental Floral","salida":"Almendra, café, bergamota, limón","corazon":"Tuberosa, jazmín sambac, flor de naranja, rosa búlgara","fondo":"Haba tonka, cacao, vainilla, praline, sándalo, pachulí","aroma":"Oriental sexy, dualidad dulce-oscura, adictivo","duracion":"Larga duración","ocasion":"Noche · Todo el año"},
      "CH Queens":{"familia":"Floral Tropical","salida":"Toronja rosada, algas marinas, neroli","corazon":"Coco, ylang-ylang, peonía","fondo":"Vainilla, sándalo","aroma":"Lúdico y seductor, alegre y aventurero","duracion":"Moderada a larga","ocasion":"Diaria · Primavera-Verano"},
      "CH L'Eau":{"familia":"Floral Fresco","salida":"Limón, naranja sanguina, neroli, cardamomo","corazon":"Té, jengibre, mate, flor de naranja, rosa","fondo":"Cedro atlas, vetiver, almizcle, pachulí","aroma":"Especiado y cítrico, fresco y sofisticado","duracion":"Moderada","ocasion":"Diaria · Primavera-Verano"},
      "212 Wild Party":{"familia":"Floral Frutal","salida":"Toronja, piña","corazon":"Flor de naranja, orquídea","fondo":"Almizcle","aroma":"Cóctel exótico y fresco, festivo y efervescente","duracion":"Moderada","ocasion":"Fiesta · Noche"},
      "212 VIP Men":{"familia":"Oriental Amaderado","salida":"Fruta de la pasión, lima, pimienta, jengibre","corazon":"Vodka, ginebra, menta, especias","fondo":"Ámbar, cuero, notas amaderadas","aroma":"Fresco y afrutado al inicio, cálido y especiado al final","duracion":"Larga duración","ocasion":"Noche · Todo el año"},
      "212 NYC Men":{"familia":"Amaderada Aromática","salida":"Notas verdes, toronja, bergamota, lavanda","corazon":"Jengibre, violeta, gardenia, salvia","fondo":"Almizcle, sándalo, incienso, vetiver, labdanum","aroma":"Fresco, energético y sofisticado","duracion":"Moderada a larga","ocasion":"Diaria · Todo el año"},
      "Good Girl Very":{"familia":"Frutal Floral","salida":"Grosella roja, lichi","corazon":"Rosa","fondo":"Vainilla, vetiver","aroma":"Afrutado fresco con toque floral romántico","duracion":"Moderada","ocasion":"Diaria · Primavera-Verano"},
      "CH PrivÃ©e":{"familia":"Cuero","salida":"Notas frutales","corazon":"Osmanto, notas florales","fondo":"Vainilla, cuero, pachulí, caviar","aroma":"Cálido y lujoso con notas de cuero refinado","duracion":"Larga duración","ocasion":"Noche · Ocasiones especiales"},
      "Central Park":{"familia":"Floral Amaderado","salida":"Ciruela, pimienta blanca","corazon":"Jazmín, tuberosa, flor de naranja","fondo":"Cedro, almizcle ambrette, almizcle blanco","aroma":"Floral amaderado atemporal inspirado en Central Park","duracion":"Moderada a larga","ocasion":"Primavera · Ocasiones especiales"},
      "212 VIP":{"familia":"Oriental Dulce","salida":"Fruta de la pasión, lima, limón","corazon":"Fruta de la pasión exótica","fondo":"Notas amaderadas y dulces","aroma":"Glamoroso, dulce y leñoso, ícono moderno de juventud","duracion":"Larga duración","ocasion":"Fiesta · Noche"},
      "212 VIP Black":{"familia":"Aromática Fougère","salida":"Absenta, anís, hinojo","corazon":"Lavanda","fondo":"Vaina de vainilla negra, almizcle","aroma":"Energético y especiado con carácter aromático oscuro","duracion":"Larga duración","ocasion":"Noche · Versátil"},
      "212 MEN":{"familia":"Almizcle Amaderado","salida":"Notas verdes, toronja, bergamota, lavanda","corazon":"Jengibre, violeta, gardenia, salvia","fondo":"Almizcle, sándalo, incienso, vetiver, labdanum","aroma":"Fresco, especiado y amaderado con base rica","duracion":"6-8 horas","ocasion":"Primavera · Otoño"},
      "Virgin Island Water":{"familia":"Frutal Floral Tropical","salida":"Mandarina, bergamota, coco","corazon":"Lima, jazmín, ylang-ylang","fondo":"Almizcle tonkín, maderas, hierbas","aroma":"Fresco tropical, suave y cálido como un atardecer caribeño","duracion":"8-10 horas","ocasion":"Vacaciones · Clima cálido"},
      "Silver":{"familia":"Acuática Fresca","salida":"Cítricos, té verde, grosella negra","corazon":"Galbanum, petitgrain, acorde acuático","fondo":"Sándalo, almizcle blanco, minerales","aroma":"Fresco y crujiente como agua alpina pura","duracion":"10+ horas","ocasion":"Diaria · Primavera-Verano"},
      "Viking":{"familia":"Aromático Leñoso","salida":"Limón, pimienta rosa, bergamota, mandarina","corazon":"Geranio, romero, salvia, nuez moscada, lavanda","fondo":"Cedro, sándalo, olíbano, pachulí, vetiver","aroma":"Masculino y poderoso con clase y confianza","duracion":"10+ horas","ocasion":"Formal · Eventos · Noche"},
      "Veriver":{"familia":"Amaderada Aromática","salida":"Jengibre, cedro","corazon":"Vetiver, cedro","fondo":"Vetiver, base leñosa","aroma":"Intoxicante blend de jengibre, cedro y vetiver, clásico","duracion":"7-8 horas","ocasion":"Cenas íntimas · Oficina"},
      "Santal":{"familia":"Especiada Oriental","salida":"Bergamota, lavanda, pimienta rosa","corazon":"Cilantro, canela, sándalo","fondo":"Sándalo, haba tonka, vainilla, jengibre","aroma":"Agradable aroma oriental especiado, fresco y cálido","duracion":"8-12 horas","ocasion":"Casual · Citas"},
      "Original Aventus For Her":{"familia":"Cítrico Floral","salida":"Bergamota, manzana verde, limón, pimienta rosa","corazon":"Violeta, pachulí","fondo":"Pachulí, almizcle, maderas ámbar","aroma":"Refrescante, chispeante y elegante con sofisticación femenina","duracion":"10+ horas","ocasion":"Uso diario · Versátil"},
      "Spring Flower":{"familia":"Floral Frutal","salida":"Jazmín, durazno, manzana","corazon":"Rosa, melón, jazmín","fondo":"Almizcle, ámbar gris","aroma":"Rica y florida equilibrando jazmín y durazno con calidez","duracion":"~6 horas","ocasion":"Día y noche · Fiestas"},
      "Love In Black":{"familia":"Floral Especiado","salida":"Hojas de violeta, frambuesa, arándano","corazon":"Rosa búlgara, rosa turca, violeta, orris, jazmín indio","fondo":"Cedro de Virginia, almizcle dulce, cuero","aroma":"Sensual y elegante con carácter especiado","duracion":"8+ horas","ocasion":"Romántico · Noches elegantes"},
      "Love In White":{"familia":"Floral Blanca","salida":"Flor de naranja, bergamota","corazon":"Magnolia, rosa búlgara, jazmín","fondo":"Sándalo, ámbar gris, vainilla, salvado de arroz","aroma":"Romántica con frescura polvorienta y florales embriagadores","duracion":"6-8 horas","ocasion":"Romántico · Citas"},
      "Himalaya":{"familia":"Aromática Cítrica Leñosa","salida":"Toronja, limón","corazon":"Maderas aromáticas","fondo":"Maderas aromáticas, almizcle","aroma":"Fresco y exótico blend de maderas aromáticas con cítricos","duracion":"Larga duración","ocasion":"Diaria · Masculino"},
      "Green Irish Tweed":{"familia":"Fresca Cítrica Leñosa","salida":"Limón, verbena, cítricos","corazon":"Limón, sándalo","fondo":"Sándalo, ámbar gris","aroma":"Fresco y sofisticado con ligeros cítricos y sándalo","duracion":"10+ horas","ocasion":"Diaria · Primavera-Otoño"},
      "Bois du Portugal":{"familia":"Amaderada Aromática","salida":"Bergamota, lavanda","corazon":"Vetiver, cedro, sándalo","fondo":"Vetiver, cedro, sándalo, base leñosa","aroma":"Masculino, exótico y sofisticado con elegancia clásica","duracion":"12 horas","ocasion":"Bodas · Citas · Formal"},
      "Aventus":{"familia":"Frutal Cítrico","salida":"Piña, bergamota, grosella negra, manzana","corazon":"Jazmín marroquí, rosa, notas florales","fondo":"Almizcle, vainilla, musgo de roble, ámbar gris","aroma":"Equilibrio de cítrico, floral y almizcle, masculino clásico","duracion":"12+ horas","ocasion":"Casual · Versátil · Todo el año"},
      "Aventus Cologne":{"familia":"Frutal Cítrico","salida":"Piña, bergamota, grosella negra, manzana","corazon":"Jazmín marroquí, pachulí, maderas fragantes","fondo":"Almizcle, vainilla, musgo de roble, ámbar gris","aroma":"Equilibrado, cítrico y floral con excelente fijación","duracion":"12+ horas","ocasion":"Casual y formal · Día y noche"},
      "Millesime Imperial":{"familia":"Cítrico Frutal Fresco","salida":"Limón siciliano, bergamota verde, mandarina","corazon":"Iris, limón, mandarina","fondo":"Sal marina, almizcle, notas frutales","aroma":"Elegante y sofisticado unisex, fresco y cítrico","duracion":"2-8 horas","ocasion":"Oficina · Eventos diurnos"},
      "Wind Flowers Eau de Parfum":{"familia":"Floral","salida":"Durazno, flor de naranja","corazon":"Jazmín, jazmín sambac","fondo":"Almizcle","aroma":"Ramo floral con dulzura de durazno y flor de naranja","duracion":"Moderada a buena","ocasion":"Día y noche · Romántico"},
      "Sauvage":{"familia":"Aromático Especiado","salida":"Bergamota calabresa, pimienta de Sichuan, elemi","corazon":"Pachulí, vainilla, notas ahumadas","fondo":"Amberwood, ámbar gris, notas marinas","aroma":"Cálido y robusto con bergamota especiada y pachulí terroso","duracion":"7-10 horas","ocasion":"Día y noche · Versátil"},
      "Joy":{"familia":"Floral Cálido","salida":"Mandarina, bergamota","corazon":"Almizcle blanco, notas florales","fondo":"Sándalo, almizcle blanco","aroma":"Floral vibrante y amaderado con sonrisa de flores y cítricos","duracion":"Moderada a buena","ocasion":"Día y noche · Elegancia femenina"},
      "J'Adore":{"familia":"Floral Frutal","salida":"Bergamota, pera, durazno, mandarina, melón","corazon":"Rosa de Damasco, lirio, jazmín, fresia, ylang-ylang","fondo":"Cedro, vainilla, almizcle, ciruela, tuberosa","aroma":"Rico y lujoso floral con fruta delicada, icónico","duracion":"Muy larga duración","ocasion":"Romántico · Sofisticado · Versátil"},
      "Hypnotic Poison":{"familia":"Gourmand Especiado Cálido","salida":"Almendra amarga, coco, ciruela","corazon":"Jazmín sambac, madera de jacaranda, rosa","fondo":"Vainilla, almizcle, sándalo, almendra","aroma":"Cálido, dulce y adictivo con vainilla y almizcle embriagadores","duracion":"Excelente (queda en ropa)","ocasion":"Noche · Ocasiones especiales"},
      "Homme Intense":{"familia":"Floral Leñoso","salida":"Lavanda","corazon":"Pera, iris, almizcle, semilla de ambrette","fondo":"Cedro de Virginia, vetiver, vainilla","aroma":"Casual pero provocativo con lavanda floral y notas leñosas","duracion":"Gran proyección y longevidad","ocasion":"Citas · Noche · Otoño-Invierno"},
      "Fahrenheit":{"familia":"Leñoso Floral Especiado","salida":"Bergamota, madreselva, cítricos","corazon":"Madreselva, nuez moscada, violeta","fondo":"Sándalo, cedro, haba tonka, pachulí, vetiver","aroma":"Complejo, cálido y distinguido, fresco y audaz a la vez","duracion":"Buena duración","ocasion":"Negocios · Uso diurno · Sofisticado"},
      "Addict":{"familia":"Oriental","salida":"Flor de árbol de seda, hoja de mandarina, flor de naranja","corazon":"Flor de la reina de la noche, rosa búlgara","fondo":"Vainilla bourbon, sándalo de Mysore, haba tonka","aroma":"Oriental vibrante con florales suntuosos y dulzura de vainilla","duracion":"Muy larga duración","ocasion":"Todo el día · Noche · Versátil"},
      "Sauvage Elixir":{"familia":"Aromático Especiado Cálido","salida":"Cardamomo, canela, toronja, nuez moscada","corazon":"Lavanda, vainilla, regaliz","fondo":"Pachulí, vetiver, amberwood","aroma":"Cálido, especiado y aromático en formulación concentrada","duracion":"Muy larga duración","ocasion":"Noche · Sofisticado"},
      "Miss Dior":{"familia":"Floral","salida":"Naranja sanguina, mandarina, bergamota","corazon":"Rosa centifolia con miel, lirio, peonía, iris","fondo":"Pachulí, acorde ambarino, almizcle","aroma":"Romántico ramo floral con frescura cítrica y elegancia polvorienta","duracion":"Moderada","ocasion":"Diaria · Casual · Fresco"},
      "Midnight Poison":{"familia":"Frutal Especiado Cálido","salida":"Mandarina, bergamota","corazon":"Rosa, pachulí","fondo":"Vainilla bourbon, ámbar, pachulí, ambrox","aroma":"Sensual nocturna con frutas cítricas y base dulce cálida","duracion":"Larga duración","ocasion":"Noche · Ocasiones especiales"},
      "Bottle Black":{"familia":"Amaderada Oriental","salida":"Mandarina, incienso","corazon":"Iris, raíz de higuera","fondo":"Cedro, cuero vegetal","aroma":"Versión oscura y sofisticada del Bottled con acentos orientales","duracion":"7-9 horas","ocasion":"Noche · Formal"},
      "Bottled Intense":{"familia":"Amaderada Especiada","salida":"Manzana, flor de azahar, bergamota","corazon":"Geranio, canela, clavo, lavanda, cardamomo","fondo":"Sándalo, cedro, vetiver, vainilla","aroma":"Versión intensificada del clásico con especias más pronunciadas","duracion":"8-10 horas","ocasion":"Noche · Otoño-Invierno"},
      "Bottled Night":{"familia":"Ámbar Floral","salida":"Lavanda, abedul","corazon":"Violeta","fondo":"Notas amaderadas, almizcle","aroma":"Fresco y amaderado con toques sedosos y seductores para la noche","duracion":"6-8 horas","ocasion":"Noche · Verano"},
      "Bottled Oud":{"familia":"Oriental Amaderada","salida":"Manzana, cítricos","corazon":"Canela, azafrán, clavo, labdanum","fondo":"Oud, sándalo, aceite de cypriol","aroma":"Frutal fresco inicial con especias exóticas y rica base de oud","duracion":"8-10 horas","ocasion":"Noche · Otoño-Invierno"},
      "Bottled Sport":{"familia":"Aromática","salida":"Toronja, aldehídos","corazon":"Lavanda, cardamomo","fondo":"Vetiver","aroma":"Fresco, energético y muy masculino para el hombre activo","duracion":"4-6 horas","ocasion":"Deporte · Uso diario"},
      "Bottled Tonic":{"familia":"Amaderada Cítrica","salida":"Toronja, manzana, naranja amarga, limón","corazon":"Jengibre, canela, clavo, geranio","fondo":"Vetiver, notas amaderadas","aroma":"Cítrico fresco y especiado con ligereza y sofisticación moderna","duracion":"5-7 horas","ocasion":"Uso diario · Primavera-Verano"},
      "Bottled Unlimited":{"familia":"Aromática Fougère","salida":"Menta, hojas de violeta, toronja","corazon":"Piña, canela, rosa","fondo":"Labdanum, sándalo, almizcle blanco","aroma":"Fresco y frutal con base masculina equilibrada","duracion":"5-7 horas","ocasion":"Uso diario · Primavera-Verano"},
      "Bottled":{"familia":"Amaderada Especiada","salida":"Manzana, ciruela, limón, bergamota","corazon":"Canela, caoba, clavel","fondo":"Vainilla, sándalo, cedro, vetiver","aroma":"Clásico amaderado especiado con frescura frutal, icónico","duracion":"6-8 horas","ocasion":"Uso diario · Negocios"},
      "Deep Red":{"familia":"Oriental Vainilla","salida":"Naranja sanguina, grosella negra, clementina, pera","corazon":"Jengibre, azafrán, tuberosa, fresia, hibisco","fondo":"Vainilla, sándalo, almizcle, cedro","aroma":"Frutal-floral cálida y sensual para mujeres fuertes","duracion":"7-9 horas","ocasion":"Noche · Otoño-Invierno"},
      "HB Infinite":{"familia":"Amaderada Aromática","salida":"Manzana, mandarina, canela, salvia","corazon":"Lavanda, pachulí, romero","fondo":"Sándalo, olivo","aroma":"Energizante y sensual combinando frescura cítrica con aromáticas","duracion":"6-8 horas","ocasion":"Uso diario · Negocios"},
      "Hugo Man":{"familia":"Aromática Leñosa","salida":"Manzana verde, menta, pomelo, albahaca","corazon":"Salvia, geranio, clavel, jazmín","fondo":"Pino, bálsamo de abeto, notas amaderadas","aroma":"Fresco y vibrante con toques aromáticos de manzana verde","duracion":"5-6 horas","ocasion":"Uso diario · Primavera-Verano"},
      "Hugo Red":{"familia":"Oriental Especiada","salida":"Notas metálicas, toronja, pimienta rosa, galbano","corazon":"Ruibarbo, piña, cedro","fondo":"Ámbar, haba tonka","aroma":"Contraste entre acordes fríos y cálidos, audaz y único","duracion":"6-8 horas","ocasion":"Uso diario · Noche"},
      "Hugo Reversed":{"familia":"Aromática Leñosa","salida":"Toronja, bergamota de Calabria","corazon":"Romero","fondo":"Vetiver de Haití","aroma":"Fresco cítrico con toques herbales y base leñosa","duracion":"5-7 horas","ocasion":"Uso diario · Primavera-Verano"},
      "Hugo Woman Eau de Parfum":{"familia":"Floral Frutal","salida":"Zarzamora, mandarina italiana, hierba","corazon":"Ciruela, té negro, jazmín, iris","fondo":"Sándalo, ámbar, cedro","aroma":"Frutal y floral sofisticado con toque de té negro moderno","duracion":"6-8 horas","ocasion":"Uso diario · Noche"},
      "In Motion":{"familia":"Ámbar Fougère","salida":"Naranja, bergamota, albahaca, hojas de violeta","corazon":"Pimienta rosa, canela, nuez moscada, cardamomo","fondo":"Almizcle, sándalo, notas amaderadas, vetiver","aroma":"Dinámico y vibrante con cítricos y especias cálidas","duracion":"5-7 horas","ocasion":"Uso diario · Negocios"},
      "Just Different":{"familia":"Aromática","salida":"Menta, manzana Granny Smith","corazon":"Albahaca, fresia, cilantro","fondo":"Cashmeran, pachulí, labdanum, olíbano","aroma":"Fresco y audaz con frutas nítidas y notas leñosas profundas","duracion":"6-8 horas","ocasion":"Uso diario · Primavera-Verano"},
      "Orange for Men":{"familia":"Especiada Amaderada","salida":"Cilantro, manzana roja","corazon":"Incienso, pimienta de Sichuan","fondo":"Vainilla, notas amaderadas","aroma":"Optimista, vital y energético con bienestar y espontaneidad","duracion":"5-7 horas","ocasion":"Uso diario · Primavera-Verano"},
      "The Scent for Her":{"familia":"Floral Frutal Gourmand","salida":"Durazno, fresia","corazon":"Osmanto","fondo":"Cacao","aroma":"Floral frutal sofisticado con toques gourmand sensuales","duracion":"5-7 horas","ocasion":"Noche · Otoño-Invierno"},
      "The Scent":{"familia":"Ambarada Leñosa Frutal","salida":"Jengibre, mandarina, bergamota","corazon":"Maninka, lavanda","fondo":"Cuero, notas amaderadas","aroma":"Especiado y sensual con frescura cítrica carismática","duracion":"4-6 horas","ocasion":"Noche · Citas"},
      "XX":{"familia":"Floral Frutal","salida":"Lichi, grosella negra, mandarina","corazon":"Jazmín, rosa, arroz basmati","fondo":"Sándalo, ámbar, almizcle","aroma":"Balance sofisticado entre notas frutales y florales femeninas","duracion":"5-7 horas","ocasion":"Uso diario · Noche"},
      "Allegra Riva Solare":{"familia":"Floral Solar","salida":"Bergamota de Calabria","corazon":"Flor de azahar, osmanto, mandarina","fondo":"Almizcle","aroma":"Transporte sensorial a la Riviera Italiana con esencia del sol","duracion":"6-8 horas","ocasion":"Primavera-Verano · Vacaciones"},
      "Amarena":{"familia":"Floral Frutal","salida":"Cereza, granada, tuberosa","corazon":"Rosa","fondo":"Notas polvosas","aroma":"Frutal-floral sofisticada con cereza como protagonista","duracion":"5-7 horas","ocasion":"Uso diario · Noche"},
      "Aqva Amara":{"familia":"Acuática Marina Cítrica","salida":"Mandarina de Sicilia","corazon":"Neroli","fondo":"Pachulí indonesio, olíbano blanco","aroma":"Reinterpretación atrevida del acuático con carácter mediterráneo","duracion":"6-8 horas","ocasion":"Uso diario · Primavera-Verano"},
      "Aqva Marine":{"familia":"Acuática Aromática","salida":"Toronja, neroli, mandarina, petitgrain","corazon":"Notas acuáticas, alga marina, romero","fondo":"Cedro de Virginia, ámbar","aroma":"Captura la esencia fresca del océano con algas salinas","duracion":"5-7 horas","ocasion":"Uso diario · Primavera-Verano"},
      "BLV Pour Homme":{"familia":"Especiada Amaderada","salida":"Cardamomo, sándalo","corazon":"Jengibre, enebro, galanga","fondo":"Flor de tabaco, hojas verdes, madera de teca","aroma":"Fresco especiado-amaderado elegante y refinado","duracion":"6-8 horas","ocasion":"Uso diario · Negocios"},
      "Bvlgari Aqva":{"familia":"Acuática Marina","salida":"Toronja, neroli, mandarina, petitgrain","corazon":"Notas acuáticas, alga marina, romero","fondo":"Cedro de Virginia, ámbar","aroma":"Clásico acuático que captura la esencia del mar","duracion":"5-7 horas","ocasion":"Uso diario · Primavera-Verano"},
      "Calaluna":{"familia":"Floral Especiada","salida":"Pera","corazon":"Heliotropo, cardamomo","fondo":"Sándalo, ambrette, iris","aroma":"Floral-amaderada sofisticada con iris blanco delicado","duracion":"6-8 horas","ocasion":"Uso diario · Noche"},
      "Man Extreme":{"familia":"Leñosa Fresca","salida":"Bergamota de Calabria, toronja rosa, pulpa de cactus","corazon":"Fresia blanca, cardamomo, ámbar vegetal","fondo":"Vetiver, benzoin, cedro","aroma":"Fresco y limpio con cítricos nítidos y toques leñosos","duracion":"6-8 horas","ocasion":"Uso diario · Primavera-Verano"},
      "Man IN Black":{"familia":"Oriental Especiada","salida":"Especias, ron, tabaco","corazon":"Cuero, iris, tuberosa","fondo":"Haba tonka, madera guayaco, benzoin","aroma":"Sensual y opulento con especias cálidas y base de cuero","duracion":"7-9 horas","ocasion":"Noche · Otoño-Invierno"},
      "Man Wood Essence":{"familia":"Amaderada","salida":"Cilantro, pimienta de Sichuan","corazon":"Ciprés, madera de cachemira","fondo":"Cedro, pachulí, vetiver, madera guayaco","aroma":"Revitalizante amaderado que reconecta con la naturaleza","duracion":"8-10 horas","ocasion":"Uso diario · Otoño-Invierno"},
      "Noorah":{"familia":"Chypre Floral","salida":"Galbano, cardamomo verde","corazon":"Benzoin de Laos, miel, iris","fondo":"Roble, pachulí, vainilla","aroma":"Oriental y alegre con aspecto cálido-frío sofisticado","duracion":"7-9 horas","ocasion":"Uso diario · Noche"},
      "Omnia Amethyste":{"familia":"Floral Amaderada","salida":"Notas verdes, toronja rosa","corazon":"Iris, rosa búlgara","fondo":"Heliotropo, notas amaderadas","aroma":"Fresco y polvoso inspirado en la suavidad de la amatista","duracion":"4-6 horas","ocasion":"Día · Primavera-Verano"},
      "Omnia Coral":{"familia":"Floral Frutal","salida":"Bergamota, bayas de goji","corazon":"Granada, hibisco, lirio acuático","fondo":"Almizcle, cedro de Virginia","aroma":"Romántica floral-frutal que se asienta en notas leñosas","duracion":"5-7 horas","ocasion":"Día · Primavera-Verano"},
      "Omnia Cristalline":{"familia":"Floral Fresco","salida":"Bambú, pera nashi","corazon":"Loto, té, cassia","fondo":"Almizcle, madera guayaco, musgo de roble","aroma":"Luminosa y fresca con transparencia etérea de loto","duracion":"4-6 horas","ocasion":"Día · Primavera-Verano"},
      "Omnia Pink Sapphire":{"familia":"Floral Frutal","salida":"Pomelo rosa, toronja, pimienta rosa","corazon":"Frangipani, flor tiare, durazno, rosa","fondo":"Almizcle, violeta, vainilla, notas amaderadas","aroma":"Radiante floral-frutal con vainilla cremosa","duracion":"5-7 horas","ocasion":"Día · Primavera-Verano"},
      "Pour Homme Soir":{"familia":"Floral Amaderada","salida":"Té Darjeeling","corazon":"Papiro","fondo":"Ámbar, almizcle","aroma":"Elegante y sensual para hombres carismáticos de noche","duracion":"6-8 horas","ocasion":"Noche · Otoño-Invierno"},
      "L.12.12 Floral":{"familia":"Floral Frutal","salida":"Toronja, bergamota, notas verdes","corazon":"Rosa, peonía, flor de naranja","fondo":"Almizcle blanco, cedro, ámbar","aroma":"Floral femenino fresco y fácil de llevar","duracion":"5-7 horas","ocasion":"Uso diario · Primavera-Verano"},
      "Bleu":{"familia":"Aromática Cítrica","salida":"Menta, toronja, flor de naranjo africana","corazon":"Salvia, helecho, notas acuosas","fondo":"Pachulí, maderas de ámbar, musgo de roble","aroma":"Fresco y acuoso con predominio cítrico deportivo","duracion":"6-8 horas","ocasion":"Casual · Deporte · Día"},
      "Challenge":{"familia":"Cítrica Aromática","salida":"Mandarina, bergamota, limón","corazon":"Notas herbáceas","fondo":"Madera de teca, ébano","aroma":"Energético y cítrico con notas de madera","duracion":"5-7 horas","ocasion":"Casual · Deporte · Día"},
      "Energized":{"familia":"Aromática Cítrica","salida":"Mandarina, bergamota, citronela","corazon":"Cardamomo, pimienta","fondo":"Cedro, vetiver","aroma":"Dinámico y energizante con toques cítricos vibrantes","duracion":"5-7 horas","ocasion":"Casual · Deporte · Día"},
      "Joy OF Pink":{"familia":"Floral Frutal","salida":"Toronja, pimienta rosa","corazon":"Peonía, notas florales","fondo":"Cedro, almizcles","aroma":"Fresco y frutal con toques florales alegres","duracion":"5-7 horas","ocasion":"Casual · Día · Primavera"},
      "L.12.12 Blanc":{"familia":"Aromática Cítrica","salida":"Toronja, cardamomo, romero","corazon":"Tuberosa, ylang-ylang, violeta","fondo":"Vetiver, ante, cedro de Virginia","aroma":"Fresco y aromático con notas cítricas y especiadas","duracion":"4-6 horas","ocasion":"Casual · Deporte · Día"},
      "L.12.12 Élégant":{"familia":"Floral Frutal","salida":"Pimienta rosa, toronja, mandarina","corazon":"Jazmín, hibisco","fondo":"Cedro, almizcles","aroma":"Elegante y sofisticado con toques florales femeninos","duracion":"5-7 horas","ocasion":"Formal · Día · Primavera"},
      "L.12.12 Essential":{"familia":"Aromática Cítrica","salida":"Cítricos acuosos, mandarina, bergamota","corazon":"Notas florales","fondo":"Sándalo","aroma":"Fresco y energético con notas acuosas puras","duracion":"4-6 horas","ocasion":"Casual · Deporte · Día"},
      "L.12.12 Jane":{"familia":"Floral Frutal","salida":"Bergamota, mandarina, frutos rojos","corazon":"Rosa, peonía, jazmín","fondo":"Almizcle, madera de cachemira, cedro","aroma":"Fresco floral femenino con elegancia casual","duracion":"5-7 horas","ocasion":"Uso diario · Primavera-Verano"},
      "L.12.12 Natural":{"familia":"Floral Frutal","salida":"Piña, mandarina, hoja de frambuesa","corazon":"Rosa, iris","fondo":"Iris raíz, notas amaderadas","aroma":"Femenino y fresco con toques naturales delicados","duracion":"5-7 horas","ocasion":"Casual · Día · Primavera"},
      "L.12.12 Noir":{"familia":"Aromática Oriental","salida":"Sandía, bergamota","corazon":"Albahaca, verbena, lavanda","fondo":"Chocolate negro, cashmeran, cumarina, pachulí","aroma":"Fresco y frutal con notas especiadas oscuras sorprendentes","duracion":"6-8 horas","ocasion":"Casual · Noche · Otoño"},
      "L.12.12 Rouge":{"familia":"Oriental Especiada","salida":"Té rooibos, mandarina, mango","corazon":"Pimienta, cardamomo","fondo":"Notas maderosas","aroma":"Apasionado y especiado con toques frutales tropicales","duracion":"6-8 horas","ocasion":"Casual · Noche · Primavera"},
      "L.12.12 Sparkling":{"familia":"Floral Frutal","salida":"Toronja rosa, grosella negra","corazon":"Rosa, peonía, magnolia","fondo":"Almizcles blancos, cedro, ambroxan","aroma":"Fresco y frutal con toques florales brillantes y efervescentes","duracion":"5-7 horas","ocasion":"Casual · Día · Primavera"},
      "L.12.12 Vert":{"familia":"Aromática Cítrica","salida":"Menta, toronja, flor de naranjo africana","corazon":"Salvia, helecho","fondo":"Notas maderosas","aroma":"Fresco y herbáceo con predominio de cítricos verdes","duracion":"5-7 horas","ocasion":"Casual · Deporte · Día"},
      "L.12.12 Fraîche":{"familia":"Aromática Cítrica","salida":"Jengibre, limón, toronja","corazon":"Enebro, lavanda, manzana","fondo":"Vetiver, cedro, ambroxan","aroma":"Fresco, limpio y refrescante con energía cítrica","duracion":"4-6 horas","ocasion":"Casual · Deporte · Verano"},
      "Red":{"familia":"Aromática Herbácea","salida":"Manzana verde, thuja, pino","corazon":"Jazmín","fondo":"Cedro","aroma":"Fresco y herbáceo con toques verdes y maderosos","duracion":"5-7 horas","ocasion":"Casual · Deporte · Día"},
      "Sensual":{"familia":"Floral Oriental","salida":"Pimienta rosa, grosella negra","corazon":"Rosa turca, guisante de olor, gladiolo","fondo":"Notas amaderadas","aroma":"Sensual y especiado con toques florales elegantes","duracion":"6-8 horas","ocasion":"Noche · Formal · Otoño"},
      "Touch OF Pink":{"familia":"Floral Frutal","salida":"Hojas de cilantro, naranja sanguina","corazon":"Jazmín, hojas de violeta, semillas de zanahoria","fondo":"Notas maderosas cálidas","aroma":"Fresco y frutal con notas florales luminosas","duracion":"5-7 horas","ocasion":"Casual · Día · Primavera"},
      "Daisy Eau SO Fresh":{"familia":"Floral Frutal","salida":"Frambuesa roja, toronja, pera","corazon":"Violeta, rosa silvestre, flor de manzana","fondo":"Almizcles, cedro, ciruela","aroma":"Fresco y frutal con toques florales delicados y juveniles","duracion":"5-7 horas","ocasion":"Casual · Día · Primavera"},
      "Daisy Twinkle":{"familia":"Floral Frutal","salida":"Grosella negra, jazmín","corazon":"Flor de loto, rosas","fondo":"Almizcles, maderas blancas","aroma":"Fresco y luminoso con toques florales delicados","duracion":"5-7 horas","ocasion":"Casual · Día · Primavera"},
      "Daisy":{"familia":"Floral Frutal","salida":"Fresa, toronja sanguina, frambuesa","corazon":"Violeta, gardenia, jazmín","fondo":"Vainilla, maderas blancas, almizcles","aroma":"Afrutado y floral con toque vintage de violeta, icónico","duracion":"6-8 horas","ocasion":"Casual · Día · Primavera"},
      "Decadence Eau SO Decadent":{"familia":"Floral Frutal","salida":"Ciruela, mandarina","corazon":"Iris, rosa búlgara, azafrán","fondo":"Pachulí, almizcles","aroma":"Sensual y sofisticado con elegancia frutal-floral","duracion":"6-8 horas","ocasion":"Noche · Formal · Otoño"},
      "Decadence":{"familia":"Oriental Floral","salida":"Ciruela, iris, azafrán","corazon":"Rosa búlgara, jazmín sambac","fondo":"Pachulí, almizcles, maderas","aroma":"Sofisticado y sensual con toque oriental profundo","duracion":"8-10 horas","ocasion":"Noche · Formal · Otoño"},
      "1 Million Parfum":{"familia":"Oriental Especiada","salida":"Mandarina, menta, toronja","corazon":"Pimienta especiada, canela","fondo":"Cuero rubio, pachulí indio, ámbar","aroma":"Cálido y especiado con toque de cuero, más intenso que el original","duracion":"8-12 horas","ocasion":"Noche · Formal · Todo el año"},
      "Black XS Excess":{"familia":"Oriental Aromática","salida":"Canela, cardamomo negro, praline","corazon":"Ámbar negro, ebonita","fondo":"Notas maderosas cálidas","aroma":"Cálido y aromático con notas especiadas intensas","duracion":"8-10 horas","ocasion":"Noche · Formal · Otoño"},
      "Black XS L'Aphrodisiaque":{"familia":"Floral Oriental","salida":"Canela, cardamomo","corazon":"Rosa, notas florales cálidas","fondo":"Ámbar, pachulí","aroma":"Sensual y afrodisíaco con toques especiados femeninos","duracion":"8-10 horas","ocasion":"Noche · Formal · Otoño"},
      "Black XS":{"familia":"Oriental Aromática","salida":"Canela, cardamomo negro, limón, tagete","corazon":"Ámbar negro, ebonita","fondo":"Pachulí, maderas maderosas","aroma":"Cálido y aromático con especias audaces y carácter rockero","duracion":"8-10 horas","ocasion":"Noche · Formal · Todo el año"},
      "Fabulous":{"familia":"Floral Especiada","salida":"Mandarina, pimienta rosa","corazon":"Tuberosa, ylang-ylang, jazmín","fondo":"Vainilla, pachulí, almizcles","aroma":"Cálido y sensual con toques florales especiados femeninos","duracion":"8-10 horas","ocasion":"Noche · Formal · Otoño"},
      "Fame":{"familia":"Floral Frutal","salida":"Mango jugoso, bergamota","corazon":"Jazmín puro, incienso cremoso","fondo":"Almizcles, maderas aromáticas","aroma":"Cálido, afrutado y sensual con toque de incienso moderno","duracion":"8-10 horas","ocasion":"Noche · Formal · Todo el año"},
      "Invictus Intense":{"familia":"Aromática Especiada","salida":"Pimienta negra, flor de naranjo","corazon":"Laureles, whiskey","fondo":"Sal marina, maderas","aroma":"Vigoroso e intoxicante con especias audaces y carácter intenso","duracion":"8-10 horas","ocasion":"Casual · Deporte · Noche"},
      "Invictus Legend":{"familia":"Aromática Marina","salida":"Sal marina, toronja, notas marinas","corazon":"Especias, geranio, hoja de laurel","fondo":"Maderas guaiac, ámbar rojo","aroma":"Fresco y vigoroso con toques marinos legendarios","duracion":"8-10 horas","ocasion":"Casual · Deporte · Noche"},
      "Invictus Parfum":{"familia":"Aromática Maderera","salida":"Lavanda fresca","corazon":"Cuero sensual","fondo":"Sándalo profundo","aroma":"Profundo y masculino con notas maderosas concentradas","duracion":"10-12 horas","ocasion":"Noche · Formal · Todo el año"},
      "Invictus Platinum":{"familia":"Aromática Especiada","salida":"Toronja, absenta, ciprés","corazon":"Lavanda","fondo":"Pachulí","aroma":"Vigoroso y refrescante con toque herbáceo moderno","duracion":"8-10 horas","ocasion":"Casual · Deporte · Noche"},
      "Invictus":{"familia":"Aromática Marina","salida":"Mandarina, notas marinas, toronja","corazon":"Jazmín, hoja de laurel","fondo":"Pachulí indio, musgo de roble, maderas guaiac","aroma":"Fresco y vigoroso con toques marinos, éxito mundial","duracion":"8-10 horas","ocasion":"Casual · Deporte · Noche"},
      "Lady Million Empire":{"familia":"Floral Gourmand","salida":"Toronja, mandarina","corazon":"Flor de naranjo, notas florales blancas","fondo":"Maderas, vainilla","aroma":"Cálido y sofisticado con toques florales imperiales","duracion":"8-10 horas","ocasion":"Noche · Formal · Otoño"},
      "Lady Million Lucky":{"familia":"Floral Gourmand","salida":"Frambuesa dulce","corazon":"Rosa, jazmín, avellana","fondo":"Miel, sándalo, madera cachemira, cedro","aroma":"Dulce y sensual con toques maderosos y suerte","duracion":"8-10 horas","ocasion":"Noche · Formal · Otoño"},
      "Lady Million Privé":{"familia":"Oriental Gourmand","salida":"Frambuesa, flor de naranja","corazon":"Jazmín, notas florales","fondo":"Miel, cacao, pachulí","aroma":"Cálido y sensual con toque gourmand exclusivo","duracion":"10-12 horas","ocasion":"Noche · Formal · Todo el año"},
      "Lady Million Royal":{"familia":"Oriental Gourmand","salida":"Granada, pimienta rosa","corazon":"Flores blancas","fondo":"Maderas aromáticas, vainilla","aroma":"Regio y sofisticado con toques florales poderosos","duracion":"8-10 horas","ocasion":"Noche · Formal · Otoño"},
      "Lady Million":{"familia":"Floral Gourmand","salida":"Frambuesa, toronja, limón","corazon":"Flor de naranjo, jazmín, miel blanca","fondo":"Pachulí, maderas amaderadas","aroma":"Cálido y sensual con toque dulce y glamoroso","duracion":"8-10 horas","ocasion":"Noche · Formal · Otoño"},
      "Olympea":{"familia":"Floral Marina","salida":"Mandarina verde, agua de jazmín","corazon":"Flor de jengibre","fondo":"Vainilla cálida, ambergris","aroma":"Fresco y femenino con toques florales acuosos divinos","duracion":"8-10 horas","ocasion":"Casual · Día · Primavera"},
      "One Million Elixir":{"familia":"Oriental Gourmand","salida":"Notas aromáticas especiadas","corazon":"Ámbar cálido, maderas especiadas","fondo":"Vainilla negra sensual","aroma":"Cálido y sensual con toques ambarinos profundos","duracion":"10-12 horas","ocasion":"Noche · Formal · Todo el año"},
      "One Million Lucky":{"familia":"Aromática Maderera","salida":"Bergamota, toronja, ciruela","corazon":"Cedro, madera cachemira, miel, jazmín","fondo":"Vetiver, musgo de roble, pachulí","aroma":"Fresco y vigoroso con notas maderosas con suerte","duracion":"8-10 horas","ocasion":"Casual · Noche · Todo el año"},
      "One Million Privé":{"familia":"Oriental Especiada","salida":"Notas aromáticas cálidas","corazon":"Especias cálidas, maderas","fondo":"Ámbar, vainilla","aroma":"Sofisticado y sensual con toques especiados exclusivos","duracion":"10-12 horas","ocasion":"Noche · Formal · Otoño"},
      "One Million Royal":{"familia":"Oriental Especiada","salida":"Notas aromáticas finas","corazon":"Maderas especiadas, notas florales","fondo":"Ámbar cálido, vainilla","aroma":"Regio y sofisticado con toque especiado exclusivo","duracion":"10-12 horas","ocasion":"Noche · Formal · Todo el año"},
      "One Million":{"familia":"Oriental Especiada","salida":"Mandarina sanguina, menta, toronja","corazon":"Pimienta especiada, canela, rosa","fondo":"Cuero rubio, pachulí indio, ámbar, maderas","aroma":"Cálido y especiado con cuero y ámbar, ícono masculino","duracion":"10-12 horas","ocasion":"Noche · Formal · Todo el año"},
      "Onix Invictus":{"familia":"Aromática Oriental","salida":"Cítricos, notas especiadas","corazon":"Notas aromáticas, madera","fondo":"Ámbar oscuro, almizcle","aroma":"Versión oscura y misteriosa de la familia Invictus","duracion":"8-10 horas","ocasion":"Noche · Formal · Otoño-Invierno"},
      "Black XS L'Exces For Her":{"familia":"Floral Oriental","salida":"Canela, cardamomo","corazon":"Cacao, rosa negra, violeta","fondo":"Vainilla, pachulí","aroma":"Sensual y femenino con toques especiados oscuros","duracion":"8-10 horas","ocasion":"Noche · Formal · Otoño"},
      "Invictus Victory Elixir":{"familia":"Oriental Maderera","salida":"Cardamomo especiado, lavanda","corazon":"Incienso, maderas ahumadas","fondo":"Pachulí, vainilla cálida","aroma":"Profundo y amaderado con toques especiados victoriosos","duracion":"10-12 horas","ocasion":"Noche · Formal · Todo el año"},
      "Phantom Legion":{"familia":"Aromática Maderera","salida":"Lavanda, limón","corazon":"Notas herbáceas, maderas","fondo":"Notas maderosas oscuras, almizcle","aroma":"Versión legionaria oscura del Phantom con carácter intenso","duracion":"8-10 horas","ocasion":"Noche · Casual · Todo el año"},
      "Phantom Negra":{"familia":"Aromática Maderera","salida":"Lavanda, cardamomo","corazon":"Maderas ahumadas, notas herbáceas","fondo":"Pachulí, ámbar","aroma":"Oscuro y profundo con toque ahumado y misterioso","duracion":"10-12 horas","ocasion":"Noche · Formal · Otoño"},
      "Phantom":{"familia":"Aromática Maderera","salida":"Lavanda, limón, vainilla","corazon":"Notas herbáceas, maderas","fondo":"Notas maderosas cálidas","aroma":"Terroso y amaderado con toque lavandero futurista","duracion":"8-10 horas","ocasion":"Casual · Noche · Todo el año"},
      "Pure XS":{"familia":"Oriental Especiada","salida":"Notas cítricas frescas, pimienta","corazon":"Especias cálidas, maderas","fondo":"Ámbar, vainilla","aroma":"Fresco y sofisticado con toque especiado excesivo","duracion":"8-10 horas","ocasion":"Casual · Noche · Todo el año"},
      "Victory":{"familia":"Aromática Marina","salida":"Acuerdo marino, toronja","corazon":"Lavanda, notas aromáticas","fondo":"Sándalo, maderas","aroma":"Fresco y vigoroso con toque marino victorioso","duracion":"8-10 horas","ocasion":"Casual · Deporte · Noche"}
    };

    // ══ FUNCIONES MODAL ══
    function openModal(btn) {
      const card  = btn.closest('.product-card');
      const img   = card.querySelector('img');
      const brand = card.querySelector('.product-brand').textContent.trim();
      const name  = card.querySelector('.product-name').textContent.trim();

      document.getElementById('modalImg').src   = img.src;
      document.getElementById('modalImg').alt   = name;
      document.getElementById('modalBrand').textContent = brand.toUpperCase();
      document.getElementById('modalName').textContent  = name;

      const d = perfumeData[name] || {};
      document.getElementById('modalFamilia').textContent  = d.familia  || '—';
      document.getElementById('modalSalida').textContent   = d.salida   || '—';
      document.getElementById('modalCorazon').textContent  = d.corazon  || '—';
      document.getElementById('modalFondo').textContent    = d.fondo    || '—';
      document.getElementById('modalAroma').textContent    = d.aroma    || '—';
      document.getElementById('modalDuracion').textContent = '\u23f1 ' + (d.duracion || '—');
      document.getElementById('modalOcasion').textContent  = '\u2726 ' + (d.ocasion  || '—');

      document.getElementById('modalOverlay').classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      document.getElementById('modalOverlay').classList.remove('open');
      document.body.style.overflow = '';
    }

    // Modal simplificado para accesorios del Shop (solo imagen + nombre + precio)
    function openShopImg(btn) {
      const card  = btn.closest('.product-card');
      const img   = card.querySelector('img');
      const name  = card.querySelector('.product-name').textContent.trim();
      const precio = card.querySelector('.shop-precio') ? card.querySelector('.shop-precio').textContent.trim() : '';

      if (!img) return;
      document.getElementById('modalImg').src  = img.src;
      document.getElementById('modalImg').alt  = name;
      document.getElementById('modalBrand').textContent = precio ? precio : 'VÉLARO SHOP';
      document.getElementById('modalName').textContent  = name;
      document.getElementById('modalFamilia').textContent  = '';
      document.getElementById('modalSalida').textContent   = '';
      document.getElementById('modalCorazon').textContent  = '';
      document.getElementById('modalFondo').textContent    = '';
      document.getElementById('modalAroma').textContent    = '';
      document.getElementById('modalDuracion').textContent = '';
      document.getElementById('modalOcasion').textContent  = '';
      document.getElementById('modalOverlay').classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeModalOutside(e) {
      if (e.target === document.getElementById('modalOverlay')) closeModal();
    }

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeModal();
        closeCart();
      }
    });

    /* ══ CARRITO ══ */
    const WHATSAPP_NUMBER = '573193369222';
    let cart = [];

    // Parsea "$ 150.000" → 150000 (number)
    function parsePrice(str) {
      if (!str) return 0;
      const m = String(str).match(/[\d.,]+/);
      if (!m) return 0;
      // Elimina separadores de miles (. y ,) asumiendo COP sin decimales
      return parseFloat(m[0].replace(/[.,]/g, '')) || 0;
    }

    // Formatea número → "$ 150.000"
    function fmtCOP(n) {
      return '$ ' + Math.round(n).toLocaleString('es-CO');
    }

    // Extrae info unificada de una product-card (perfume o shop)
    function readCardInfo(card) {
      const imgEl    = card.querySelector('img');
      const name     = (card.querySelector('.product-name') || {}).textContent?.trim() || '';
      const precioEl = card.querySelector('.shop-precio');
      const brandEl  = card.querySelector('.product-brand:not(.shop-precio)');
      const precioText = precioEl ? precioEl.textContent.trim() : '';
      const brand = brandEl ? brandEl.textContent.trim() : (card.dataset.categoria || '');
      const price = parsePrice(precioText);
      const key   = (brand || precioText || 'item') + '|' + name;
      return {
        key, brand, name,
        img: imgEl ? imgEl.src : '',
        price, precioText
      };
    }

    function addToCart(btn) {
      const card = btn.closest('.product-card');
      const info = readCardInfo(card);
      if (cart.find(i => i.key === info.key)) {
        removeFromCart(info.key);
        btn.textContent = '+ Agregar';
        btn.classList.remove('in-cart');
        return;
      }
      cart.push(info);
      btn.textContent = '✓ Agregado';
      btn.classList.add('in-cart');
      renderCart();
      flashFab();
    }

    function removeFromCart(key) {
      cart = cart.filter(i => i.key !== key);
      // Desmarcar botón en la tarjeta correspondiente
      document.querySelectorAll('.product-btn-cart').forEach(b => {
        const card = b.closest('.product-card');
        if (!card) return;
        if (readCardInfo(card).key === key) {
          b.textContent = '+ Agregar';
          b.classList.remove('in-cart');
        }
      });
      renderCart();
    }

    function clearCart() {
      cart = [];
      document.querySelectorAll('.product-btn-cart.in-cart').forEach(b => {
        b.textContent = '+ Agregar';
        b.classList.remove('in-cart');
      });
      renderCart();
    }

    function renderCart() {
      const list    = document.getElementById('cartItemsList');
      const empty   = document.getElementById('cartEmpty');
      const badge   = document.getElementById('cartBadge');
      const count   = document.getElementById('cartCountLabel');
      const waBtn   = document.getElementById('cartWhatsappBtn');
      const clrBtn  = document.getElementById('cartClearBtn');
      const subWrap = document.getElementById('cartSubtotal');
      const subVal  = document.getElementById('cartSubtotalValue');

      badge.textContent = cart.length;
      badge.classList.toggle('visible', cart.length > 0);
      count.textContent = cart.length;
      waBtn.disabled    = cart.length === 0;
      clrBtn.style.display = cart.length > 0 ? 'block' : 'none';

      // Subtotal (solo si hay al menos 1 item con precio > 0)
      const total = cart.reduce((s, i) => s + (i.price || 0), 0);
      if (total > 0) {
        subVal.textContent = fmtCOP(total);
        subWrap.style.display = 'flex';
      } else {
        subWrap.style.display = 'none';
      }

      // Limpiar items anteriores (preservar empty div)
      list.querySelectorAll('.cart-item').forEach(el => el.remove());

      if (cart.length === 0) {
        empty.style.display = 'flex';
        return;
      }
      empty.style.display = 'none';

      cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML =
          '<img class="cart-item-img" src="' + item.img + '" alt="' + item.name + '">' +
          '<div class="cart-item-info">' +
            (item.brand ? '<p class="cart-item-brand">' + item.brand + '</p>' : '') +
            '<p class="cart-item-name">'  + item.name  + '</p>' +
            (item.precioText ? '<p class="cart-item-price">' + item.precioText + '</p>' : '') +
          '</div>' +
          '<button class="cart-item-remove" aria-label="Quitar ' + item.name + '" onclick="removeFromCart(\'' + item.key.replace(/'/g, "\\'") + '\')">✕</button>';
        list.appendChild(div);
      });
    }

    function sendWhatsApp() {
      if (cart.length === 0) return;
      let total = 0;
      const lines = cart.map(i => {
        let line = '• ';
        if (i.brand) line += i.brand + ' — ';
        line += i.name;
        if (i.price > 0) { line += ' (' + fmtCOP(i.price) + ')'; total += i.price; }
        return line;
      });
      const totalLine = total > 0 ? '\n\n*Total estimado:* ' + fmtCOP(total) : '';
      const msg = '¡Hola! Quiero comprar los siguientes productos de VÉLARO:\n\n'
                + lines.join('\n')
                + totalLine
                + '\n\n¿Me confirman disponibilidad?';
      const url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg);
      window.open(url, '_blank');
    }

    function openCart() {
      document.getElementById('cartDrawer').classList.add('open');
      document.getElementById('cartOverlay').classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeCart() {
      document.getElementById('cartDrawer').classList.remove('open');
      document.getElementById('cartOverlay').classList.remove('open');
      document.body.style.overflow = '';
    }

    function flashFab() {
      const fab = document.getElementById('cartFab');
      fab.style.transform = 'scale(1.2)';
      setTimeout(() => { fab.style.transform = ''; }, 200);
    }

    /* ══ SHOP — Google Sheets integration ══
       Columnas del Sheet (fila 1 = encabezados, ignorados):
       A: Número  B: Marca  C: Nombre  D: ID foto Drive
       E: Familia  F: Salida  G: Corazón  H: Fondo  I: Aroma  J: Duración  K: Ocasión
    */
    // URL publicada del Google Sheet (Archivo → Publicar en la web → CSV)
    const SHEET_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vROLsuakwSU0gISitjJwl3QVI4nbHOgvp62CH24MrMpc8ovJnsCAW_-CYHqYRJw5RPM3Tx89n6guFGw/pub?gid=0&single=true&output=csv';

    function driveImgUrl(id) {
      return 'https://lh3.googleusercontent.com/d/' + id.trim() + '=w600';
    }

    // Si la imagen de Drive falla, reemplaza por placeholder en el mismo slot
    function shopImgFallback(img) {
      var ph = document.createElement('div');
      ph.className = 'shop-no-img';
      ph.textContent = '📷';
      if (img.parentNode) img.parentNode.insertBefore(ph, img);
      img.remove();
    }

    function parseCSV(text) {
      const lines = text.trim().split('\n');
      return lines.slice(1).map(function(line) {
        const cols = []; let cur = '', inQ = false;
        for (var i = 0; i < line.length; i++) {
          var ch = line[i];
          if (ch === '"') { inQ = !inQ; }
          else if (ch === ',' && !inQ) { cols.push(cur.trim()); cur = ''; }
          else { cur += ch; }
        }
        cols.push(cur.trim());
        return cols;
      }).filter(function(r) { return r[1] && r[1].trim(); });
    }

    function buildShopCard(row, index) {
      // Columnas: 0=# 1=Nombre 2=Categoría 3=Precio 4=ID Foto 5=Subcategoría
      var name         = (row[1] || '').trim();
      var categoria    = (row[2] || '').trim();
      var precio       = (row[3] || '').trim();
      var driveId      = (row[4] || '').trim();
      var subcategoria = (row[5] || '').trim();
      if (!name) return null;

      var imgSrc = driveId ? driveImgUrl(driveId) : '';
      var padNum = String(index + 1).padStart(2, '0');

      var card = document.createElement('div');
      card.className = 'product-card';
      card.dataset.categoria = categoria;
      card.dataset.subcategoria = subcategoria;
      var altTxt = name + (categoria ? ' — ' + categoria : '');
      card.innerHTML =
        '<div class="product-img-wrap" onclick="openShopImg(this)" style="cursor:pointer" role="button" tabindex="0" aria-label="Ver imagen de ' + name + '">' +
          '<span class="product-number">' + padNum + '</span>' +
          (imgSrc
            ? '<img src="' + imgSrc + '" alt="' + altTxt + '" loading="lazy" onerror="shopImgFallback(this)">'
            : '<div class="shop-no-img" aria-hidden="true">📷</div>') +
        '</div>' +
        '<div class="product-info">' +
          (precio ? '<span class="product-brand shop-precio">' + precio + '</span>' : '') +
          '<p class="product-name">' + name + '</p>' +
          '<div class="product-separator"></div>' +
        '</div>' +
        '<div class="product-actions">' +
          '<button class="product-btn" onclick="openShopImg(this)" aria-label="Ver imagen de ' + name + '">Ver imagen</button>' +
          '<button class="product-btn-cart" onclick="addToCart(this)" aria-label="Agregar ' + name + ' al carrito">+ Agregar</button>' +
        '</div>';
      return card;
    }

    function buildShopFilters(categorias) {
      var bar  = document.getElementById('shopFilterBar');
      var btns = document.getElementById('shopFilterBtns');
      btns.innerHTML = '';

      var all = document.createElement('button');
      all.className = 'filter-btn active';
      all.textContent = 'Todos';
      all.onclick = function() { shopFilterBy('all', this); };
      btns.appendChild(all);

      categorias.sort().forEach(function(cat) {
        if (!cat) return;
        var btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.textContent = cat;
        btn.onclick = function() { shopFilterBy(cat, this); };
        btns.appendChild(btn);
      });

      bar.style.display = '';
      // Vincula flechas al scroll y actualiza estado inicial
      btns.addEventListener('scroll', updateShopArrows);
      updateShopArrows();
    }

    // ── Scroll de filtros del Shop ──
    function scrollShopFilters(dir) {
      document.getElementById('shopFilterBtns').scrollLeft += dir * 200;
    }
    function scrollShopSubFilters(dir) {
      document.getElementById('shopSubFilterBtns').scrollLeft += dir * 200;
    }
    function updateShopArrows() {
      var el = document.getElementById('shopFilterBtns');
      var l  = document.getElementById('shop-arrow-left');
      var r  = document.getElementById('shop-arrow-right');
      if (!el || !l || !r) return;
      l.disabled = el.scrollLeft <= 0;
      r.disabled = el.scrollLeft >= el.scrollWidth - el.clientWidth - 1;
    }
    function updateShopSubArrows() {
      var el = document.getElementById('shopSubFilterBtns');
      var l  = document.getElementById('shop-sub-arrow-left');
      var r  = document.getElementById('shop-sub-arrow-right');
      if (!el || !l || !r) return;
      l.disabled = el.scrollLeft <= 0;
      r.disabled = el.scrollLeft >= el.scrollWidth - el.clientWidth - 1;
    }
    window.addEventListener('resize', function() { updateShopArrows(); updateShopSubArrows(); });

    // Estado global del Shop
    var shopState = {
      rows: [],          // filas originales del CSV (todas)
      renderedIdx: 0,    // índice hasta el cual se han creado cards
      batchSize: 40,     // tamaño del batch por "Ver más"
      activeCat: 'all',  // categoría activa
      activeSub: 'all',  // subcategoría activa
      searchQ: ''        // búsqueda activa
    };

    function shopFilterBy(cat, btn) {
      document.querySelectorAll('#shopFilterBtns .filter-btn').forEach(function(b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');
      shopState.activeCat = cat;
      shopState.activeSub = 'all';
      buildSubFilters(cat);
      shopApplyFilters();
    }

    // Construye los sub-filtros para la categoría seleccionada (si tiene subcategorías)
    function buildSubFilters(cat) {
      var bar  = document.getElementById('shopSubFilterBar');
      var btns = document.getElementById('shopSubFilterBtns');
      btns.innerHTML = '';

      if (cat === 'all') { bar.style.display = 'none'; return; }

      // Recolecta subcategorías únicas de esa categoría
      var subsSet = {};
      shopState.rows.forEach(function(row) {
        if ((row[2] || '').trim() !== cat) return;
        var s = (row[5] || '').trim();
        if (s) subsSet[s] = true;
      });
      var subList = Object.keys(subsSet);
      if (subList.length === 0) { bar.style.display = 'none'; return; }

      var all = document.createElement('button');
      all.className = 'filter-btn active';
      all.textContent = 'Todos';
      all.onclick = function() { shopSubFilterBy('all', this); };
      btns.appendChild(all);

      subList.sort().forEach(function(s) {
        var b = document.createElement('button');
        b.className = 'filter-btn';
        b.textContent = s;
        b.onclick = function() { shopSubFilterBy(s, this); };
        btns.appendChild(b);
      });

      bar.style.display = '';
      btns.addEventListener('scroll', updateShopSubArrows);
      updateShopSubArrows();
    }

    function shopSubFilterBy(sub, btn) {
      document.querySelectorAll('#shopSubFilterBtns .filter-btn').forEach(function(b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');
      shopState.activeSub = sub;
      shopApplyFilters();
    }

    // Aplica filtro de categoría + subcategoría + búsqueda sobre TODAS las cards
    function shopApplyFilters() {
      var q = (document.getElementById('shopSearchInput').value || '').toLowerCase().trim();
      shopState.searchQ = q;
      var cat = shopState.activeCat;
      var sub = shopState.activeSub;
      var cards = document.querySelectorAll('#shopGrid .product-card');
      var visible = 0;
      cards.forEach(function(card) {
        var name = (card.querySelector('.product-name') || {}).textContent || '';
        var matchesQ = !q || name.toLowerCase().indexOf(q) !== -1;
        var matchesC = cat === 'all' || card.dataset.categoria === cat;
        var matchesS = sub === 'all' || card.dataset.subcategoria === sub;
        var show = matchesQ && matchesC && matchesS;
        card.style.display = show ? '' : 'none';
        if (show) visible++;
      });
      updateShopEmptyState(visible, cards.length);
    }

    function updateShopEmptyState(visible, totalRendered) {
      var grid   = document.getElementById('shopGrid');
      var empty  = document.getElementById('shopEmpty');
      var moreW  = document.getElementById('shopLoadMoreWrap');
      if (totalRendered === 0) {
        grid.style.display = 'none';
        empty.style.display = 'none';
        moreW.style.display = 'none';
        return;
      }
      grid.style.display = visible > 0 ? 'grid' : 'none';
      empty.style.display = visible === 0 ? 'block' : 'none';
      // botón "Ver más" solo si hay más filas por renderizar y NO hay búsqueda/filtro activo
      var hasMore = shopState.renderedIdx < shopState.rows.length;
      var noFilter = shopState.activeCat === 'all' && !shopState.searchQ;
      if (hasMore && noFilter) {
        var remaining = shopState.rows.length - shopState.renderedIdx;
        document.getElementById('shopLoadMoreCount').textContent = '(' + remaining + ')';
        moreW.style.display = 'block';
      } else {
        moreW.style.display = 'none';
      }
    }

    // Renderiza el siguiente batch de cards
    function shopRenderMore() {
      var grid = document.getElementById('shopGrid');
      var end  = Math.min(shopState.renderedIdx + shopState.batchSize, shopState.rows.length);
      for (var i = shopState.renderedIdx; i < end; i++) {
        var card = buildShopCard(shopState.rows[i], i);
        if (card) grid.appendChild(card);
      }
      shopState.renderedIdx = end;
      shopApplyFilters();
    }

    function loadShop() {
      // Cache-bust: evita que el CDN de Google sirva un CSV cacheado
      fetch(SHEET_CSV + '&_=' + Date.now())
        .then(function(r) {
          if (!r.ok) throw new Error('HTTP ' + r.status);
          return r.text();
        })
        .then(function(text) {
          var rows = parseCSV(text).filter(function(r) { return r[1] && r[1].trim(); });
          shopState.rows = rows;
          shopState.renderedIdx = 0;
          shopState.activeCat = 'all';
          shopState.activeSub = 'all';
          shopState.searchQ = '';
          document.getElementById('shopSubFilterBar').style.display = 'none';
          var grid = document.getElementById('shopGrid');
          grid.innerHTML = '';
          var catsSet = {};
          rows.forEach(function(row) { if (row[2]) catsSet[row[2].trim()] = true; });

          document.getElementById('shopLoading').style.display = 'none';
          if (rows.length > 0) {
            buildShopFilters(Object.keys(catsSet));
            shopRenderMore(); // primer batch
          } else {
            document.getElementById('shopErrorMsg').textContent = 'El catálogo está vacío.';
            document.getElementById('shopError').style.display = 'flex';
          }
        })
        .catch(function(err) {
          document.getElementById('shopLoading').style.display = 'none';
          document.getElementById('shopErrorMsg').textContent = 'Error: ' + err.message;
          document.getElementById('shopError').style.display = 'flex';
        });
    }

    // loadShop() se llama desde openShop() al hacer clic en Shop

