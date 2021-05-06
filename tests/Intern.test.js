const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe("Intern", () => {
    it("how do i test that it inherits", () => {
        console.log("help me tom!!!")
    });
    it("Intern class should be a function", () => {
        expect(typeof(Intern)).toBe("function");
    });
    it("new Intern should be an object", () =>{
        const test = new Intern();
        expect(typeof(test)).toBe("object");
    });
    describe("constructor", () => {
        it("should have a name, id, email, and school", () => {
            const testIntern = new Intern("Bob", 25, "bob@job.com", "University of Guam");

            expect(testIntern.name).toBe("Bob");
            expect(testIntern.id).toEqual(25);
            expect(testIntern.email).toBe("bob@job.com");
            expect(testIntern.school).toBe("University of Guam");
        });
    });
    describe("methods",() => {
        it("getName should return Bob", () => {
            const testIntern = new Intern("Bob");

            expect(testIntern.getName()).toBe("Bob");
        });

        it("getID should return 25", () => {
            const testIntern = new Intern("Bob", 25);

            expect(testIntern.getID()).toBe("25");
        });

        it("getEmail should return bob@job.com", () => {
            const testIntern = new Intern("Bob", 25, "bob@job.com");

            expect(testIntern.getEmail()).toBe("bob@job.com");
        });

        it("getSchool should return University of Guam", () => {
            const testIntern = new Intern("Bob", 25, "bob@job.com", "University of Guam");

            expect(testIntern.getSchool()).toBe("University of Guam");
        })

        it("getRole should return Employee", () => {
            const testIntern = new Intern();

            expect(testIntern.getRole()).toBe("Intern");
        });
    })
})