import React from 'react';
import Fade from 'react-reveal/Fade';
import './category-content.css';

const CategoryContent = () => (
    <section className="container category-content">
        <div className="column">
            <Fade bottom>
                <h2>Approach</h2>
                <p>We act as an extension of product development departments within tech companies by providing remote staff augmentation. Our multidisciplinary development teams are in constant collaboration with the in-house departments and undergo many iterative improvements and full process transparency.</p>
                <h2>Process</h2>
                <p>We are big fans of Agile, but we also believe in order to be successful you need adequate preparation in order to deliver authentic products. This is why we dedicate significant attention to architecture and prototyping.</p>
                <br />
                <p>
                    <b>1. Gathering requirements and creating a concept</b>
                </p>
                <p>Likewise to any other process, ours starts with information and requirement gathering. In order to gain a clear vision of the required functionality and visual aesthetic, we build a high-level concept. You can imagine it as a prototype for a car; it’s far from driveable, but the model helps engineers to visualize and analyze all of the parts.</p>
                <p>
                    <br />
                    <b>2. Define MVP and roadmap</b>
                </p>
                <p>Once we have a solid vision of the ideal end product, we begin strategizing and defining our roadmap for how to reach a proof-of-concept design. We prioritize the main features into the MVP and create a plan for secondary features.</p>
                <br />
                <p>
                    <b>3. Design data structure and API</b>
                </p>
                <p>
                    Most modern apps offer a simple interface for back-end functionality. Whether it's a mobile or a web app, it essentially gets data from a server, shows it to the user, and sends input back as new data.
                <br />
                    As such, the success of an app depends on how good the back-end is. Consequently, when building systems, we usually start by developing the back-end. If you have an existing back-end, we will try our best to work with it.
            </p>
                <br />
                <p>
                    <b>4. Proof of concept</b>
                </p>
                <p>Next comes the very important step of building proof of concept prototypes, which allows us to verify our assumptions to avoid potential pitfalls.</p>
                <br />
                <p>
                    <b>5. Building a foundation</b>
                </p>
                <p>Once we know it’s possible to build all of the intended features, we start creating a foundation that includes a design system, UI/UX design, interactions, widgets and other tools and utilities.</p>
                <br />
                <p>
                    <b>6. Develop the app</b>
                </p>
                <p>On this foundation, we build app functionality iteratively, ensuring we are moving fast while maintaining a solid architecture throughout.</p>
            </Fade>
        </div>
    </section>
);

export default CategoryContent