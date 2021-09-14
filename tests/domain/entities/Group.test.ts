import { Group } from "@/domain/entities/Group";
import { Events } from "@/domain/domain-events/Events";

describe('Group', () => {
    describe('addUser()', () => {
        test('Should add domain event userAddedToGroup when execution is ok', async () => {
            let sut: Group = new Group();
            sut.id = 1;
            sut.active = true;
            sut.addUser({ id: 1, name: 'Scartezini' });

            expect(sut.domainEvents.length).toBe(1);
            expect(sut.domainEvents[0].name).toBe(Events.userAddedToGroup);
        })
    })

    describe('addUser()', () => {
        test('Should throw exception when group is no longer active', async () => {
            let sut: Group = new Group();
            sut.id = 1;
            expect(() => { sut.addUser({ id: 1, name: 'Scartezini' }) }).toThrowError();
        })
    })
});
