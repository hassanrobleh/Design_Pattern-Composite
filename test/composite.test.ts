import { MenutestDrive } from '../src/classes/MenuTestDrive';

describe('Pattern Iterator test', () => {
    
    it("Should be return diner()", () => {
        
        expect(MenutestDrive.main()).toContain("Vegetarian BLT 2.99 (Fakin) Bacon with lettuce & tomato on whole wheatBLT 2.99 Bacon with lettuce & tomato on whole wheatSoup of the day 3.29 Soup of the day, with a side of potato saladHotdog 3.05 A hot dog, with saurkraut,relish, onions, topped with cheese");
    });

   
})
