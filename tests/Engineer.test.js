const Engineer = require('../lib/Engineer');

describe("Engineer", () => {

    it("Engineer class should be a function", () => {
        expect(typeof(Engineer)).toBe("function");
    });

    it("new Engineer should be an object", () =>{
        const test = new Engineer();
        expect(typeof(test)).toBe("object");
    });

    describe("constructor", () => {
        it("should have a name, id, email, and github", () => {
            const testEngineer = new Engineer("Bob", 25, "bob@job.com", "corgimaman");

            expect(testEngineer.name).toBe("Bob");
            expect(testEngineer.id).toEqual(25);
            expect(testEngineer.email).toBe("bob@job.com");
            expect(testEngineer.github).toBe("corgimaman");
        });
    });

    describe("methods",() => {
        it("getName should return Bob", () => {
            const testEngineer = new Engineer("Bob");

            expect(testEngineer.getName()).toBe("Bob");
        });

        it("getID should return 25", () => {
            const testEngineer = new Engineer("Bob", 25);

            expect(testEngineer.getID()).toBe("25");
        });

        it("getEmail should return bob@job.com", () => {
            const testEngineer = new Engineer("Bob", 25, "bob@job.com");

            expect(testEngineer.getEmail()).toBe("bob@job.com");
        });

        it("getGithub should return corgimaman", () => {
            const testEngineer = new Engineer("Bob", 25, "bob@job.com", "corgimaman");

            expect(testEngineer.getGithub()).toBe("corgimaman");
        })

        it("getRole should return Engineer", () => {
            const testEngineer = new Engineer();

            expect(testEngineer.getRole()).toBe("Engineer");
        });

        it("getRole should not return Employee", () => {
            const testEngineer = new Engineer();

            expect(testEngineer.getRole()).toEqual(expect.not.stringMatching("Employee"));
        });
    });
});