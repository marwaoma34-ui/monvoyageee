function afficherVille(ville) {
    let nomVille = document.getElementById("nomVille");
    let description = document.getElementById("description");
    let activites = document.getElementById("activites");
    let imageVille = document.getElementById("imageVille");
    let infosDiv = document.getElementById("infosVille");

    // Afficher la zone
    infosDiv.style.display = "flex";

    if(ville === "marrakech") {
        nomVille.innerHTML = "Marrakech - Jemaa el-Fna";
        description.innerHTML = "Jemaa el-Fna est la célèbre place centrale de Marrakech, connue pour ses marchés animés, conteurs et charmeurs de serpents.";
        activites.innerHTML = "Activités : visiter les souks, goûter la cuisine locale, voir des spectacles de rue, acheter des souvenirs artisanaux.";
        imageVille.src = "https://i.postimg.cc/ncc3RKDn/Jmaalefna2.jpg";
        imageVille.alt = "Jemaa el-Fna";
    }
    else if(ville === "dakhla") {
        nomVille.innerHTML = "Dakhla";
        description.innerHTML = "Dakhela est une ville côtière dans le sud du Maroc, réputée pour ses plages et ses paysages désertiques.";
        activites.innerHTML = "Activités : kitesurf, balade sur la plage, observer les oiseaux, excursions dans le désert.";
        imageVille.src = "https://i.postimg.cc/FssTWbLQ/dakhela2.jpg";
        imageVille.alt = "Dakhla";
    }
    else if(ville === "hoceima") {
        nomVille.innerHTML = "Al Hoceima";
        description.innerHTML = "Al Hoceima est une ville sur la côte méditerranéenne, connue pour ses plages et montagnes magnifiques.";
        activites.innerHTML = "Activités : baignade, randonnée, sports nautiques et découverte de la culture locale.";
        imageVille.src = "https://i.postimg.cc/GhhX7Pyn/hoceima2.jpg";
        imageVille.alt = "Al Hoceima";
    }
    else if(ville === "chefchaouen") {
        nomVille.innerHTML = "Chefchaouen";
        description.innerHTML = "Chefchaouen est célèbre pour ses bâtiments bleus et ses montagnes pittoresques.";
        activites.innerHTML = "Activités : se promener dans la médina, photographie, randonnée et artisanat local.";
        imageVille.src = "https://i.postimg.cc/5NNs75CV/chefchaouen2.jpg";
        imageVille.alt = "Chefchaouen";
    }
    else if(ville === "agadir") {
        nomVille.innerHTML = "Agadir";
        description.innerHTML = "Agadir est une ville balnéaire avec de grandes plages et un climat agréable toute l'année.";
        activites.innerHTML = "Activités : plage, surf, promenade sur la corniche, restaurants de fruits de mer.";
        imageVille.src = "https://i.postimg.cc/L66xCkZc/Agadir2.jpg";
        imageVille.alt = "Agadir";
    }
    else if(ville === "ifrane") {
        nomVille.innerHTML = "Ifrane";
        description.innerHTML = "Ifrane, surnommée la petite Suisse du Maroc, est connue pour son architecture européenne et son climat frais.";
        activites.innerHTML = "Activités : promenade, visiter le parc national d'Ifrane, ski en hiver, découverte des forêts environnantes.";
        imageVille.src = "https://i.postimg.cc/4NNWLv9k/ifrane.jpg";
        imageVille.alt = "Ifrane";
    }
    else if(ville === "saidia") {
        nomVille.innerHTML = "Saïdia";
        description.innerHTML = "Saïdia est une station balnéaire sur la Méditerranée, connue pour sa plage de sable fin.";
        activites.innerHTML = "Activités : baignade, sports nautiques, promenade sur le front de mer et restaurants locaux.";
        imageVille.src = "https://i.postimg.cc/TYYt7jDf/Saidia2.jpg";
        imageVille.alt = "Saïdia";
    }
    else if(ville === "rabat") {
        nomVille.innerHTML = "Rabat";
        description.innerHTML = "Rabat est la capitale du Maroc, connue pour ses monuments historiques, la Kasbah des Oudayas et ses plages.";
        activites.innerHTML = "Activités : visiter la Kasbah des Oudayas, la tour Hassan, se promener le long de la côte et découvrir la médina.";
        imageVille.src = "https://i.postimg.cc/xTT6xGzY/rabat.jpg";
        imageVille.alt = "Rabat";
    }
}





https://i.postimg.cc/xTT6xGzY/rabat.jpg
https://i.postimg.cc/TYYt7jDf/Saidia2.jpg
