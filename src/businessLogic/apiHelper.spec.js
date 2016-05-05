import chai, {should} from 'chai';
import ApiHelper from './apiHelper';

describe('ApiHelper', () => {
  describe('createPromiseThatResolvesTo', () => {
    it('returns a promise that has been resolved with the given value ', () => {
      //arrange
      let resolveValue = "hello world";

      //assert
      ApiHelper.createPromiseThatResolvesTo(resolveValue).then(function(response) {
          response.should.equal(resolveValue);
      });
    });
  });
  
  describe('createPromiseRejectsTo', () => {
    it('returns a promise that has been rejected with the given value ', () => {
      //arrange
      let rejectValue = "hello world";

      //assert
      ApiHelper.createPromiseThatRejectsTo(rejectValue).catch(function(error) {
          error.should.equal(rejectValue);
      });
    });
  });

  describe("makeLoginRequest", () => {
    it("returns a resolved promise if the email and password are correct", () => {
      //arrange
      let email = "jeff_aramini@ihealthsolutions.net";
      let password = "password";

      //assert
      ApiHelper.makeLoginRequest(email, password).should.be.fulfilled;
    });

    it("returns a rejected promise if the email is incorrect", () => {
      //arrange
      let email = "bad_email@ihealthsolutions.net";
      let password = "password";

      //assert
      ApiHelper.makeLoginRequest(email, password).should.be.rejected;
    });
    
    it("returns a rejected promise if the password is incorrect", () => {
      //arrange
      let email = "jeff_aramini@ihealthsolutions.net";
      let password = "bad_password";

      //assert
      ApiHelper.makeLoginRequest(email, password).should.be.rejected;
    });
  });
  
  describe("getUserApps", () => {
    it("returns a promise that resolves to an array of length 9", () => {
      //assert
      ApiHelper.getUserApps().then(function(response) {
          response.length.should.equal(9);
      });
    });
  });

  describe("verifyEmail", () => {
    it("returns a resolved promise if the email is right", () => {
      //arrange
      let email = "jeff_aramini@ihealthsolutions.net";

      //assert
      ApiHelper.verifyEmail(email).should.be.fulfilled;
    });

    it("returns a rejected promise if the email is incorrect", () => {
      //arrange
      let email = "bad_email@ihealthsolutions.net";

      //assert
      ApiHelper.verifyEmail(email).should.be.rejected;
    });
  });
});
