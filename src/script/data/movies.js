let listMovies = [];

const images = [
    '../../assets/images/castle_in_the_sky.jpg',
    '../../assets/images/grave_of_the_fireflies.jpg',
    '../../assets/images/my_neighbor_totoro.jpg',
    '../../assets/images/kiki\'s_delivery_service.jpg',
    '../../assets/images/only_yesterday.jpg',
    '../../assets/images/porco_rosso.jpg',
    '../../assets/images/pom_poko.jpg',
    '../../assets/images/whisper_of_the_heart.jpg',
    '../../assets/images/princess_mononoke.jpg',
    '../../assets/images/my_neighbors_the_yamadas.jpg',
    '../../assets/images/spirited_away.jpg',
    '../../assets/images/the_cat_returns.jpg',
    '../../assets/images/howl\'s_moving_castle.jpg',
    '../../assets/images/tales_from_earthsea.jpg',
    '../../assets/images/ponyo.jpg',
    '../../assets/images/the_secret_world_of_arrietty.jpg',
    '../../assets/images/from_up_on_poppy_hill.jpg',
    '../../assets/images/the_wind_rises.jpg',
    '../../assets/images/the_tale_of_princess_kaguya.jpg',
    '../../assets/images/when_marnie_was_there.jpg',
    '../../assets/images/the_red_turtle.jpg'
]

function setListMovies(movies) {
    let i = 0;
    listMovies = movies;
    listMovies.forEach((movies) => {
        movies.img = images[i++];
    });
}

function getListMovies() {
    return listMovies;
}

export { setListMovies, getListMovies };
