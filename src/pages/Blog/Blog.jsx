

const Blog = () => {
    return (
        <div>
            <h2 className="text-5xl border-4 p-3 text-center">Blogs</h2>

            <div className="card card-compact w-full my-6 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p className="text-xl"><strong>State Management in React:</strong></p>
                    <ul>
                        <li><strong>useState:</strong> Basic hook for local component state.</li>
                        <li><strong>useReducer:</strong> For more complex state logic, similar to Redux.</li>
                        <li><strong>Context API:</strong> Provides global state management by passing data through the component tree without props drilling.</li>
                        <li><strong>Redux:</strong> Predictable state container for JavaScript apps, useful for large-scale applications.</li>
                        <li><strong>MobX:</strong> State management library that makes state observable and reacts to changes automatically.</li>
                    </ul>
                </div>
            </div>

            <div className="card card-compact w-full my-6 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">How Prototypical Inheritance Works?</h2>
                    <p className="text-xl"><strong>Prototypical Inheritance:</strong></p>
                    <ul>
                        <li><strong>Definition:</strong> A feature in JavaScript where objects can inherit properties and methods from other objects.</li>
                        <li><strong>Prototype Chain:</strong> Each object has a prototype object, from which it inherits properties and methods. This chain continues until an object with a null prototype is reached.</li>
                        <li><strong>Creating Inheritance:</strong> Objects are linked via the `__proto__` property or `Object.create()` method.</li>
                        <li><strong>Usage:</strong> Used to share functionality between objects, reducing redundancy and memory usage.</li>
                    </ul>
                </div>
            </div>

            <div className="card card-compact w-full my-6 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is a Unit Test? Why Should We Write Unit Tests?</h2>
                    <p className="text-xl"><strong>Unit Testing:</strong></p>
                    <ul>
                        <li><strong>Definition:</strong> Testing individual components or functions in isolation to ensure they work as expected.</li>
                        <li><strong>Purpose:</strong> To catch bugs early, ensure code reliability, and facilitate code refactoring.</li>
                        <li><strong>Benefits:</strong> Improves code quality, enhances maintainability, and provides documentation of the code's behavior.</li>
                    </ul>
                </div>
            </div>

            <div className="card card-compact w-full my-6 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">React vs. Angular vs. Vue</h2>
                    <p className="text-xl"><strong>React:</strong></p>
                    <ul>
                        <li><strong>Developer:</strong> Facebook</li>
                        <li><strong>Type:</strong> Library</li>
                        <li><strong>Features:</strong> JSX syntax, virtual DOM, component-based architecture, unidirectional data flow.</li>
                        <li><strong>Use Case:</strong> Suitable for building complex, interactive UIs with a flexible structure.</li>
                    </ul>
                    <p className="text-xl"><strong>Angular:</strong></p>
                    <ul>
                        <li><strong>Developer:</strong> Google</li>
                        <li><strong>Type:</strong> Framework</li>
                        <li><strong>Features:</strong> Two-way data binding, dependency injection, TypeScript, comprehensive tooling.</li>
                        <li><strong>Use Case:</strong> Ideal for enterprise-level applications with a comprehensive set of features and out-of-the-box functionality.</li>
                    </ul>
                    <p className="text-xl"><strong>Vue:</strong></p>
                    <ul>
                        <li><strong>Developer:</strong> Evan You</li>
                        <li><strong>Type:</strong> Framework</li>
                        <li><strong>Features:</strong> Reactive data binding, component-based structure, simplicity and flexibility.</li>
                        <li><strong>Use Case:</strong> Great for small to medium-sized applications and those needing quick integration and ease of use.</li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Blog;