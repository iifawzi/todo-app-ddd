interface ValueObjectProps {
  [index: string]: any;
}

export abstract class ValueObject<T extends ValueObjectProps> {
  public readonly props: T;
  
  constructor(props: T) {
    let baseProps: any = {
      ...props,
    };

    this.props = baseProps;
  }

  equals(vo: ValueObject<T>): boolean {
    if (vo == null || vo == undefined || vo.props === undefined) {
      return false;
    }

    return JSON.stringify(vo.props) === JSON.stringify(this.props);
  }
}