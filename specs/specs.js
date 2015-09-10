describe('count', function() {
  it("returns an array when given a number counting up to that number", function() {
    expect(count(5, 1)).to.eql([0, 1, 2, 3, 4, 5]);
  });

  it("counts up to first number by the second number given", function() {
    expect(count(10, 2)).to.eql([0, 2, 4, 6, 8, 10]);
  });

});
