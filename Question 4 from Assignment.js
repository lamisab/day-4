const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

function question(query) {
	return new Promise((resolve) => {
		readline.question(query, resolve);
	});
}

/// 1- Solve real example

/// Create an X-O game
/// X | X | X
/// X | X | X
/// X | X | X
/// Use 2d array to hold all values
const game = [
	[' ', ' ', ' '],
	[' ', ' ', ' '],
	[' ', ' ', ' '],
];
let places = [
	{ row: 0, column: 0, string: '0-0' },
	{ row: 0, column: 1, string: '0-1' },
	{ row: 0, column: 2, string: '0-2' },
	{ row: 1, column: 0, string: '1-0' },
	{ row: 1, column: 1, string: '1-1' },
	{ row: 1, column: 2, string: '1-2' },
	{ row: 2, column: 0, string: '2-0' },
	{ row: 2, column: 1, string: '2-1' },
	{ row: 2, column: 2, string: '2-2' },
];
//if the plase == column and rows 
function allEqual(item, ...array) {
	return array.every((l) => l === item);
}

/// Checks if any row has the same letter in all columns
function didWinAnyRow(letter) {
	return [0, 1, 2].some((row) => game[row].every((l) => l === letter));
}

// Checks if any column has the same letter in all rows
function didWinAnyColumn(letter) {
	return [0, 1, 2].some((column) => {
		return allEqual(
			letter,
			game[0][column],
			game[1][column],
			game[2][column]
		);
	});
}
// if any one can win any shape in game 
function didSomeoneWin(letter) {
	const fromAnyRow = didWinAnyRow(letter);
	const fromAnyCol = didWinAnyColumn(letter);

	const fromCross1 = allEqual(letter, game[0][0], game[1][1], game[2][2]);
	const fromCross2 = allEqual(letter, game[2][0], game[1][1], game[0][2]);

	return fromAnyRow || fromAnyCol || fromCross1 || fromCross2;
}
// re-decoration
function printGame() {
	for (const row of game) {
		const line = row.join(' | ');
		console.log(line);
		console.log('---------');
	}
}
// choose any random plase
function getRandomInt(min, max) {
	return Math.round(Math.random() * (max - min)) + min;
}
//avoide any same plase can anyone play for cmputer
function getRandomPlace() {
	const randomIndex = getRandomInt(0, places.length - 1);
	const randomPlace = places[randomIndex];

	places = places.filter((place, i) => i !== randomIndex);

	return randomPlace;
}
//plase can the user play anywhere 
function playRandomly(letter) {
	const place = getRandomPlace();
	game[place.row][place.column] = letter;
}
//print anyone who win in the game 
function printIfSomeoneWin() {
	return ['X', 'O'].some((letter) => {
		if (didSomeoneWin(letter)) {
			console.log(letter + ' won');
			return true;
		}
		return false;
	});
}
//chick if the plase in array Available 
function isThisPlaceAvailable(place) {
	return places.some((p) => p.row === place.row && p.column === place.column);
}
//ask user where do you want to play ???
async function playUserOrBot(letter, userChoice) {
	if (letter === userChoice) {
		printGame();
		const userPlace = await question(
			'Where do you want to play? e.g. row-column '
		);
		const arr = userPlace.split('-');
		const place = { row: +arr[0], column: +arr[1] };
		if (isThisPlaceAvailable(place)) {
			places = places.filter(
				(p) => !(p.row === place.row && p.column === place.column)
			);

			game[place.row][place.column] = letter;
		} else {
			console.error(
				'Please be polite and enter correct place next time!'
			);
			process.exit();
		}
	} else {
		playRandomly(letter);
	}
}
//chick if every plase is filled and noe one win or some of x,o win
async function startGame(userChoice) {
	let howManyTime = 0;
	while (howManyTime < 9) {
		const letter = howManyTime % 2 === 0 ? 'X' : 'O';

		await playUserOrBot(letter, userChoice);

		howManyTime++;
		if (howManyTime >= 6 && printIfSomeoneWin()) {
			break;
		} else if (howManyTime === 9) {
			console.log('No one won');
		}
	}
}
//the actual play like main in any programmm
async function play() {
	let letter = await question('Please, enter X or O? ');

	letter = letter.toUpperCase();
	if (letter !== 'X' && letter !== 'O') {
		console.error('Please be polite and enter correct answer next time!');
		process.exit();
	} else {
		console.log(`You are ${letter}!`);
	}

	await startGame(letter);

	readline.close();
}

play();