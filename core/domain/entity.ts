import { UniqueID } from "./unique.identifier";

const isEntity = (entity: any): entity is Entity<any> => {
    return entity instanceof Entity; 
}

export abstract class Entity<T> {
    protected readonly id: UniqueID
    public readonly props: T

    constructor(props: T, id?: UniqueID) {
        this.id = id ? id : new UniqueID();
        this.props = props;
    }

    equals(entity: Entity<T>): boolean {
        if (entity == null || entity == undefined) {
            return false;
        }

        if (!isEntity(entity)) {
            return false;
        }

        return this.id.equals(entity.id);
    }
}