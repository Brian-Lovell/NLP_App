import {handleSubmit} from '../src/client/js/formHandler'

describe("Test the submit function", () => {
    test("Test the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
    })
})