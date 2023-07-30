function ReadOnly(target: any, key: string): void {
    let value = target[key];

    const getter = () => value;
    const setter = (newVal: any) => {
        console.log(`Cannot set ${key} to ${newVal}. This property is read-only.`);
    };

    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

class PropertyClass {
    @ReadOnly
    readonlyProperty = 'This is read-only';
}

let myClass = new PropertyClass();
myClass.readonlyProperty = 'Try to change this';  // This will log the error message and the property value will not change
