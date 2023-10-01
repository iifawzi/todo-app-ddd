const isIdentifier = (v: any): v is Identifier<any> => {
  return v instanceof Identifier;
};

export class Identifier<T> {
  constructor(private value: T) {
    this.value = value;
  }

  public equals(id?: Identifier<T>): boolean {
    if (id == null || id == undefined) {
      return false;
    }

    if (!isIdentifier(id)) {
      return false;
    }

    return id.toValue() === this.value;
  }

  public toValue(): T {
    return this.value;
  }

  public toString() {
    return String(this.value);
  }
}
