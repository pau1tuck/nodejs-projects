function LogInvocation(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        console.log(`Method ${propertyKey} is being called...`);
        return originalMethod.apply(this, args);
    };

    return descriptor;
}

class MyClass {
    @LogInvocation
    public myMethod(a: number, b: number): number {
        return a + b;
    }
}
