'use stricts';

let numberOfAnime;

function start() {
	numberOfAnime = prompt('Сколько аниме вы посмотрели?', '');

	while (numberOfAnime == '' || numberOfAnime == null || isNaN(numberOfAnime)) {
		numberOfAnime = prompt('Сколько аниме вы посмотрели?', '');
	}
}

start();

const personalAnimeDB = {
	count: numberOfAnime,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyAnimes() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренних фильмов?', ''),
			b = +prompt('Насколько его оцените?', '');
	
		if(a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalAnimeDB.movies[a] = b;
		} else {
			i--;
		}
	}

}

rememberMyAnimes();

function detectPersonalLevel() {
	if(personalAnimeDB.count < 10) {
		console.log('просмотренно довольно мало аниме');
	} else if(personalAnimeDB.count > 10 && personalAnimeDB.count < 30) {
		console.log('вы классический зритель');
	} else if(personalAnimeDB.count > 30) {
		console.log('вы киноман');
	} else {
		console.log('ошибка');
	}
}

detectPersonalLevel();

function showMyDB (hidden) {
	if (!hidden) {
		console.log(personalAnimeDB);
	}
}

showMyDB (personalAnimeDB.privat);

function writeYourGenres() {
	for (let i = 1; i < 4; i++) {
		personalAnimeDB.genres[ i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
	}
}

writeYourGenres();

console.log(personalAnimeDB);