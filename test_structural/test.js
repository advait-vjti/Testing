const describe = require('@jest/globals').describe;
const test = require('@jest/globals').test;
const expect = require('@jest/globals').expect;

const Sort = require('../sort').Sort;

describe('Structural Tests',function(){
	describe('Sort', function() {
		describe('#swap', function() {
			test('should swap the elements at the given indices', function(){
				let arr = [1,2,3,4,5];
				let i = 2, j = 4;
			
				Sort.swap(arr,i,j);
				//expect(arr).to.eql([1,2,5,4,3]);
				expect(arr).toMatchObject([1,2,5,4,3]);
			});	
		});

		describe('#isMore',function(){
			test('should return true if the value at first index is more than the value at second index', function(){
				let arr = [1,2,3,4,5];
				let i = 2, j = 4;
			
				const res = Sort.isMore(arr,i,j);
				expect(res).toBe(false);
			});
		});
	});
	describe('Sort',function(){
		describe('#selectionSort', function(){
			test('This function should sort the provided unordered array',function(){
				let arr = [5,4,3,2,1];
				(new Sort()).selectionSort(arr);
				expect(arr).toMatchObject([1,2,3,4,5]);
			});
		});
	});
});


