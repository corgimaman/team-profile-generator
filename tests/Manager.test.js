const Manager = require('../lib/Manager');

describe("Manager", () => {
    it("how do i test that it inherits", () => {
        console.log("help me tom!!!")
    });
    it("Manager class should be a function", () => {
        expect(typeof(Manager)).toBe("function");
    });
    it("new Manager should be an object", () =>{
        const test = new Manager();
        expect(typeof(test)).toBe("object");
    });
    describe("constructor", () => {
        it("should have a name, id, email, and officeNumber", () => {
            const testManager = new Manager("Bob", 25, "bob@job.com", 101);

            expect(testManager.name).toBe("Bob");
            expect(testManager.id).toEqual(25);
            expect(testManager.email).toBe("bob@job.com");
            expect(testManager.officeNumber).toEqual(101);
        });
    });
    describe("methods",() => {
        it("getName should return Bob", () => {
            const testManager = new Manager("Bob");

            expect(testManager.getName()).toBe("Bob");
        });

        it("getID should return 25", () => {
            const testManager = new Manager("Bob", 25);

            expect(testManager.getID()).toBe("25");
        });

        it("getEmail should return bob@job.com", () => {
            const testManager = new Manager("Bob", 25, "bob@job.com");

            expect(testManager.getEmail()).toBe("bob@job.com");
        });

        it("getRole should return Manager", () => {
            const testManager = new Manager();

            expect(testManager.getRole()).toBe("Manager");
        });

        it("getRole should not return Employee", () => {
            const testManager = new Manager();

            expect(testManager.getRole()).toEqual(expect.not.stringMatching("Employee"));
        });
    });
});