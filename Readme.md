
1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
    - getElementById selects a single element by its unique id.
    - getElementsByClassName selects all elements with a specific class name.
    - querySelector selects the first element matching a CSS selector.
    - querySelectorAll selects all elements matching a CSS selector.

2. Create and insert a new element into the DOM
    - Create new elements: 
        const newElement = document.createElement('div');
    - Set content:
        newElement.textContent = 'Hello, World!';
    - Insert the element:
        document.body.appendChild(newElement);

3. Event Bubbling is when an event occurs on an element, it first runs the handlers on it, then on its parent, then all the way up to the document and window.

4. Event Delegation is adding a single event listener to a parent element to manage events for multiple child elements. It's useful for improve performance and good for dynamic elements works for elements that added after the page loads.

5. preventDefault() is use to prevents the default action of the event (e.g., stopping a link from navigating). stopPropagation() is use to stops the event from bubbling up or capturing down the DOM tree.