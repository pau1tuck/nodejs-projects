function AddTimestamp<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        timestamp = new Date();
    };
}

@AddTimestamp
class ClassClass {
    constructor(public name: string) {}
}

const instance = new ClassClass('MyClass');
console.log(instance.timestamp);  // This will log the timestamp
