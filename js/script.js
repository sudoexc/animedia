'use stricts';

const personalAnimeDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,

	start: () => {
		personalAnimeDB.count = prompt('Сколько аниме вы посмотрели?', '');
	
		while (personalAnimeDB.count == '' || personalAnimeDB.count == null || isNaN(personalAnimeDB.count)) {
			personalAnimeDB.count = prompt('Сколько аниме вы посмотрели?', '');
		}
	},

	rememberMyAnimes: () => {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Один из последних просмотренних фильмов?', '').trim(),
				b = +prompt('Насколько его оцените?', '').trim();
		
			if(a != null && b != null && a != '' && b != '' && a.length < 50) {
				personalAnimeDB.movies[a] = b;
			} else {
				i--;
			}
		}
	},

	detectPersonalLevel: () => {
		if(personalAnimeDB.count < 10) {
			console.log('просмотренно довольно мало аниме');
		} else if(personalAnimeDB.count > 10 && personalAnimeDB.count < 30) {
			console.log('вы классический зритель');
		} else if(personalAnimeDB.count > 30) {
			console.log('вы киноман');
		} else {
			console.log('ошибка');
		}
	},

	showMyDB: function(hidden) {
		if (!hidden) {
			console.log(personalAnimeDB);
		}
	},

	toggleVisibleMyDB: () => {
		if(personalAnimeDB.privat) {
			personalAnimeDB.privat = false;
		} else {
			personalAnimeDB.privat = true;
		}
	},

	writeYourGenres: () => {
		for (let i = 1; i < 4; i++) {
			let genre = prompt(`Ваш любимый жанр под номером ${i}`, '').toLowerCase();
			
			if(genre === null || genre === ''){
				i--;
			} else{
				personalAnimeDB.genres[ i - 1] = genre;
				personalAnimeDB.genres.sort();
			}
		}

		personalAnimeDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${item}`);
		});
	}
};