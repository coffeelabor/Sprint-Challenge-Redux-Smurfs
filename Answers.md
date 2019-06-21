1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    With arrays, .map .filter .reduce and .concat all keep the code thats being run through them immutable. They output a new array in instead of mutate the array all together. For objects, .assign works the same way, in that it returns a new object with the same values of the input object or new key value pairs. The original object is not mutated

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are just containers that carry the type, or explanations of what happened, and a payload which is optional. Action Creator is the function that creates the Action. The Reducer creates a new object without updating state directly. The new object is based on the action type, which are the instructions for the reducer, and the payload, which is what the reducer needs to update on state. The store is the js object that where all the changes in state are kept

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is global for the entire application. Component state only exists within the component. The problem is that components can only pass state to children. Redux lets you pass state through the entire application by using the store to create a clone of application state. If you need to pass state anywhere besides down to children, then its better to use application state

1.  What is middleware?

    Middleware is inserted between the Action and the Reducer to intercept a data flow, run a function, and then continue with the data flow. Middleware in Redux can stop actions, forward an action, dispatch a different action, change an action, or dispatch multiple actions

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux on its own only runs synchronously, but with the thunk middleware redux can run asynchronously. Thunk can change the action-creator and therefor creating a new action

1.  Which `react-redux` method links up our `components` with our `redux store`?

    connect() will link react components to the redux store. Connect need to be invoked twice. The first time to pass in a function and an objec and the second time to pass in the component your connecting
