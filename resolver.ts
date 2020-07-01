/* resolvers are our functions that will perform an appropiate action
 * here, we can see that our hello property simply returns "Hello world!"
 * 
 */

const root = {
    hello: () => {
        return 'Hello world!';
    },
};

export default root; 