const directors =  require('./directors');

module.exports = [
    {
        id: 1,
        title: 'NOCTURNAL ANIMALS',
        year: 2017,
        lang: 'Anglais',
        director: directors[0],
        synopsis: 'Susan Morrow, une galeriste d’art de Los Angeles, s’ennuie dans l’opulence de son existence, délaissée par son riche mari Hutton. Alors que ce dernier s’absente, encore une fois, en voyage d’affaires, Susan reçoit un colis inattendu : un manuscrit signé de son ex-mari Edward Sheffield dont elle est sans nouvelles depuis des années. Une note l’accompagne, enjoignant la jeune femme à le lire puis à le contacter lors de son passage en ville. Seule dans sa maison vide, elle entame la lecture de l’oeuvre qui lui est dédicacée.',
        genre: 'Drame, Thriller',
        posterPath: '/uploads/nocturnal_animals.jpg',
        grade: 1.5
    },
    {
        id: 2,
        title: '3 BILLBOARDS, LES PANNEAUX DE LA VENGEANCE',
        year: 2018,
        lang: 'Anglais',
        director: directors[1],
        synopsis: `Après des mois sans que l'enquête sur la mort de sa fille ait avancé, Mildred Hayes prend les choses en main, affichant un message controversé visant le très respecté chef de la police sur trois grands panneaux à l'entrée de leur ville.`,
        genre: 'Drame',
        posterPath: '/uploads/3_bilboards.jpg',
        grade: 2.5
    },
    {
        id: 3,
        title: 'Wonder Woman',
        year: 2017,
        lang: 'Américain',
        director: directors[2],
        synopsis: `C'était avant qu'elle ne devienne Wonder Woman, à l'époque où elle était encore Diana, princesse des Amazones et combattante invincible. Un jour, un pilote américain s'écrase sur l'île paradisiaque où elle vit, à l'abri des fracas du monde. Lorsqu'il lui raconte qu'une guerre terrible fait rage à l'autre bout de la planète, Diana quitte son havre de paix, convaincue qu'elle doit enrayer la menace. En s'alliant aux hommes dans un combat destiné à mettre fin à la guerre, Diana découvrira toute l'étendue de ses pouvoirs… et son véritable destin.`,
        genre: 'Action, Aventure, Fantastique',
        posterPath: '/uploads/wonderwoman.jpg',
        grade: 4
    },
    {
        id: 4,
        title: 'MOI, MOCHE ET MÉCHANT',
        year: 2010,
        lang: 'français',
        director: directors[3],
        synopsis: `Le plus grand vilain de tous les temps se retrouve confronté à sa plus dure épreuve : trois fillettes prénommées Margo, Edith et Agnes.`,
        genre: 'Animation',
        posterPath: '/uploads/despicable.jpg',
        grade: 4.5
    },
    {
        id: 5,
        title: 'Le Parrain',
        year: 1972,
        lang: 'Français',
        director: directors[5],
        synopsis: `En 1945, à New York, les Corleone sont une des cinq familles de la mafia. Don Vito Corleone marie sa fille à un bookmaker. Sollozzo, "parrain" de la famille Tattaglia, propose à Don Vito une association dans le trafic de drogue...`,
        genre: 'Policier, Drame',
        posterPath: '/uploads/parrain.jpg',
        grade: 5
    },
    {
        id: 6,
        title: 'Dragons 3 : Le monde caché',
        year: 2019,
        lang: 'Français',
        director: directors[4],
        synopsis: `Harold est maintenant le chef de Berk au côté d’Astrid et Krokmou, en tant que dragon, est devenu le leader de son espèce. Ils réalisent enfin leurs rêves de vivre en paix entre vikings et dragons. Mais lorsque l’apparition soudaine d’une Furie Eclair coïncide avec la plus grande menace que le village n’ait jamais connue, Harold et Krokmou sont forcés de quitter leur village pour un voyage dans un monde caché...`,
        genre: 'Animation, Aventure',
        posterPath: '/uploads/dragon3.jpg',
        grade: 4.5
    },
    {
        id: 7,
        title: 'Le Seigneur des anneaux : le retour du roi',
        year: 2003,
        lang: 'Français',
        director: directors[6],
        synopsis: `Tandis que les ténèbres se répandent sur la Terre du Milieu, Aragorn se révèle être l'héritier caché des rois antiques. Quant à Frodon, toujours tenté par l'Anneau, il voyage à travers les contrées ennemies, se reposant sur Sam et Gollum.`,
        genre: 'Aventure, Fantastique',
        posterPath: '/uploads/seigneur.jpg',
        grade: 4
    },
    {
        id: 8,
        title: 'Le grand bain',
        year: 2018,
        lang: 'Français',
        director: directors[7],
        synopsis: `C’est dans les couloirs de leur piscine municipale que Bertrand, Marcus, Simon, Laurent, Thierry et les autres s’entraînent sous l’autorité toute relative de Delphine, ancienne gloire des bassins. Ensemble, ils se sentent libres et utiles. Ils vont mettre toute leur énergie dans une discipline jusque-là propriété de la gent féminine : la natation synchronisée. Alors, oui c’est une idée plutôt bizarre, mais ce défi leur permettra de trouver un sens à leur vie...`,
        genre: 'Drame, Comédie',
        posterPath: '/uploads/grandbain.jpg',
        grade: 4
    },
    {
        id: 9,
        title: 'Le roi lion',
        year: 1994,
        lang: 'Américain',
        director: directors[8],
        synopsis: `Avec Emmanuel Curtil, Dimitri Rougeul, Jean Reno
        Le long combat de Simba le lionceau pour accéder à son rang de roi des animaux, après que le fourbe Scar, son oncle, a tué son père et pris sa place.`,
        genre: 'Animation, Aventure',
        posterPath: '/uploads/roilion.jpg',
        grade: 5
    },
    {
        id: 10,
        title: 'Oscar',
        year: 1967,
        lang: 'Français',
        director: directors[9],
        synopsis: `Bertrand, un riche promoteur, mène une vie paisible. Jusqu'au jour où son homme de confiance, Christian, le fait chanter pour doubler son salaire et obtenir la main de sa fille, dont il est l'amant. Il lui avoue également qu'il le vole depuis de nombreuses années. Les choses se compliquent encore quand la maîtresse de Christian se révèle finalement ne pas être Colette, la fille de Bertrand, mais qu'en revanche, Colette s'avère être enceinte d'Oscar, le chauffeur.`,
        genre: 'Comédie',
        posterPath: '/uploads/oscar.jpg',
        grade: 4
    },
    {
        id: 11,
        title: 'Le Voyage de Chihiro',
        year: 2002,
        lang: 'Français',
        director: directors[10],
        synopsis: `Chihiro, une fillette capricieuse, s'apprête à emménager avec ses parents dans une nouvelle demeure. La petite famille se retrouve bientôt dans une ville fantôme et les parents se transforment en cochons. Chihiro va tenter de leur porter secours.`,
        genre: 'Aventure, Animation',
        posterPath: '/uploads/chihiro.jpg',
        grade: 4.5
    },
    {
        id: 12,
        title: 'Avengers: Infinity War',
        year: 2018,
        lang: 'Français',
        director: directors[11],
        synopsis: `Les Avengers et leurs alliés devront être prêts à tout sacrifier pour neutraliser le redoutable Thanos avant que son attaque éclair ne conduise à la destruction complète de l’univers.`,
        genre: 'Action, Aventure',
        posterPath: '/uploads/avengers.jpg',
        grade: 4
    },
    {
        id: 13,
        title: 'Inception',
        year: 2010,
        lang: 'Français',
        director: directors[12],
        synopsis: `Au lieu de subtiliser un rêve, un voleur expérimenté et son équipe doivent faire l'inverse : implanter une idée dans l'esprit d'un individu. S'ils y parviennent, il pourrait s'agir du crime parfait ...`,
        genre: 'Science Fiction, Thriller',
        posterPath: '/uploads/inception.jpg',
        grade: 2.5
    },
    {
        id: 14,
        title: 'Les Affranchis',
        year: 1990,
        lang: 'Français',
        director: directors[13],
        synopsis: `Depuis sa plus tendre enfance, Henry Hill, né d'un père irlandais et d'une mère sicilienne, veut devenir gangster et appartenir à la Mafia. Adolescent dans les années cinquante, il commence par travailler pour le compte de Paul Cicero...`,
        genre: 'Policier, Judiciaire',
        posterPath: '/uploads/affranchis.jpg',
        grade: 5
    },
    {
        id: 15,
        title: 'CAPTAIN AMERICA: CIVIL WAR',
        year: 2016,
        lang: 'Français',
        director: directors[11],
        synopsis: `Steve Rogers est désormais à la tête des Avengers, dont la mission est de protéger l'humanité. À la suite d'une de leurs interventions qui a causé d'importants dégâts collatéraux, le gouvernement décide de mettre en place un organisme de commandement et de supervision. 
        Cette nouvelle donne provoque une scission au sein de l'équipe : Steve Rogers reste attaché à sa liberté de s'engager sans ingérence gouvernementale, tandis que d'autres se rangent derrière Tony Stark, qui contre toute attente, décide de se soumettre au gouvernement...`,
        genre: 'Action, Fantastique',
        posterPath: '/uploads/captain.jpg',
        grade: 3
    },
]