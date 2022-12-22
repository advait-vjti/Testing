const mocha = require('mocha');
const chai = require('chai');

const describe = mocha.describe;
const it = mocha.it;
const expect = chai.expect;

const Sort = require('../sort.js').Sort;

describe('Unit Tests',function(){
	describe('Sort', function() {
		describe('#swap', function() {
			it('should swap the elements at the given indices', function(){
				let arr = [1,2,3,4,5];
				let i = 2, j = 4;
			
				Sort.swap(arr,i,j);
				expect(arr).to.eql([1,2,5,4,3]);
			});	
		});

		describe('#isMore',function(){
			it('should return true if the value at first index is more than the value at second index', function(){
				let arr = [1,2,3,4,5];
				let i = 2, j = 4;
			
				const res = Sort.isMore(arr,i,j);
				expect(res).to.equal(false);
			});
		});
	});

});

describe('Functional Test', function(){
	describe('Sort',function(){
		describe('#selectionSort', function(){
			it('This function should sort the provided unordered array',function(){
				let arr = [5,4,3,2,1];
				(new Sort()).selectionSort(arr);
				expect(arr).to.eql([1,2,3,4,5]);
			});
		});
	});
});



