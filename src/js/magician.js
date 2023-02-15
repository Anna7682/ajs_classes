import Character from './js/character';

export default class Magician extends Character {
	constructor(level, health) {
		super(level, health);

		this.attack = 10;

		this.defence = 40;
	}
}
