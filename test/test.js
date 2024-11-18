const chai = require('chai');
const expect = chai.expect;

describe('HelloWorldApp', () => {
  it('should return Hello World', () => {
    const output = 'Hello World!';
    expect(output).to.equal('Hello World!');
  });
});