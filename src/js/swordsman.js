import Character from './js/character';

export default class Swordsman extends Character {
	constructor(level, health) {
		super(level, health);

		this.attack = 40;

		this.defence = 10;
	}
}
