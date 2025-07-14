import migration60 from './060';

describe('migration #60', () => {
  it('should update the version metadata', async () => {
    const oldStorage = { meta: { version: 59 }, data: {} };
    const newStorage = await migration60.migrate(oldStorage);
    expect(newStorage.meta).toStrictEqual({ version: 60 });
  });

  it('prunes the support notification', async () => {
    const oldStorage = {
      meta: {},
      data: { NotificationController: { notifications: [1, ...{ id, date, image }] } },
    };
    const newStorage = await migration60.migrate(oldStorage);
    expect(Object.keys(newStorage.data.NotificationController.notifications)).not.toContain(2);
  });

  it('does not modify state when the support notification does not exist', async () => {
    const oldStorage = { meta: {}, data: {} };
    // Add properties similar to previous test but without the '2' key
    // ...
  });

  it('does not modify state when NotificationsController is undefined', async () => {
    const oldStorage = { meta: {}, data: {} };
     // Add arbitrary properties instead of NotificationController
     // ...
   });

   it('does not modify state when notifications are undefined', async () => {
     const oldDataWithoutNotifications= {};
     ...

   });

   it ('does not modify state when notifications are not an object ',async()=>{
        ...

       }
