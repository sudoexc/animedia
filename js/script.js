'use stricts';

const NumberOfAnime = +prompt('Сколько аниме вы посмотрели?', '99');

const personalAnimeDB = {
	count: NumberOfAnime,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Один из последних просмотренних фильмов?', 'Onepiece'),
	  b = +prompt('Насколько его оцените?', ''),
	  d = prompt('Один из последних просмотренних фильмов?', 'Onepiece'),
	  e = +prompt('Насколько его оцените?', '');

personalAnimeDB.movies[a] = b;

console.log(personalAnimeDB);