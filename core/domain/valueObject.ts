export abstract class ValueObject<T> {
    constructor(public readonly value: T) {
        this.value = value;
    }

    equals(value: ValueObject<T>): boolean {
        if (value == null || value == undefined) {
            return false;
        }

        return value === this.value;
    }
}