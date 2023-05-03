'use stricts';

const NumberOfAnime = +prompt('Сколько аниме вы посмотрели?', '');

const personalAnimeDB = {
	count: NumberOfAnime,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for (let i = 0; i < 2; i++) {
	const a = prompt('Один из последних просмотренних фильмов?', ''),
	 	  b = +prompt('Насколько его оцените?', '');

	if(a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalAnimeDB.movies[a] = b;
	} else {
		i--;
	}

	if(personalAnimeDB.count < 10) {
		console.log('просмотренно довольно мало аниме')
	} else if(personalAnimeDB.count > 10 && personalAnimeDB.count < 30) {
		console.log('вы классический зритель')
	} else if(personalAnimeDB.count > 30) {
		console.log('вы киноман')
	} else {
		console.log('ошибка')
	}

}


console.log(personalAnimeDB);