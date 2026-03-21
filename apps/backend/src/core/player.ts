export class Player {
  public hand: string[] = [];
  public readonly id: string;
  public readonly name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  addCards(cards: string[]) {
    this.hand.push(...cards);
  }

  removeCards(cards: string[]) {
    this.hand = this.hand.filter((c) => !cards.includes(c));
  }

  toPublicState() {
    return {
      id: this.id,
      name: this.name,
      cardCount: this.hand.length,
    };
  }
}
