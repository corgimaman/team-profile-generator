const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("constructor", () => {
        it("Employee class should be function and new Employee should be an object", () => {
            const test = new Employee();

            expect(typeof(Employee)).toBe("function");
            expect(typeof(test)).toBe("object");
        });

        it("should have a name, id, and email", () => {
            const testEmployee = new Employee("Bob", 25, "bob@job.com");

            expect(testEmployee.name).toBe("Bob");
            expect(testEmployee.id).toEqual(25);
            expect(testEmployee.email).toBe("bob@job.com");
        });

        it("getName should return Bob", () => {
            const testEmployee = new Employee("Bob");

            expect(testEmployee.getName()).toBe("Bob");
        });

        it("getID should return 25", () => {
            const testEmployee = new Employee("Bob", 25);

            expect(testEmployee.getID()).toBe("25");
        });

        it("getEmail should return bob@job.com", () => {
            const testEmployee = new Employee("Bob", 25, "bob@job.com");

            expect(testEmployee.getEmail()).toBe("bob@job.com");
        });

        it("getRole should return Employee", () => {
            const testEmployee = new Employee();

            expect(testEmployee.getRole()).toBe("Employee");
        })
    });
})