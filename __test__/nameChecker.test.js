import  {checkForName} from '../src/client/js/nameChecker'

describe("Test the check for name function", () => {
    test("Test the checkForName() function", () => {
        expect(checkForName).toBeTruthy();
    })
})