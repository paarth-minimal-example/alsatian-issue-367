import {Test, TestCase, Expect} from 'alsatian'
import {add} from 'src/add'

export class AddTests {
	@TestCase(1,1,2)
	@Test()
	public testAdd(a:number, b:number, sum:Number){
		Expect(add(a,b)).toBe(sum);
	}
}