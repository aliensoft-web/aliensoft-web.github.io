import React from 'react'
import Fade from 'react-reveal/Fade';
import './privacy-block.css';

const PrivacyBlock = () => (
    <div className="privacy-block">
        <Fade bottom>
            <p className="title-text">This Application collects some Personal Data from its Users.</p>
            <h2>Data Controller and Owner</h2>
            <p>Ramotion, Inc., 851 Burlway Rd, Suite 216, Burlingame, CA 94010, USA</p>
            <p>Owner contact email:
            <a href="mailto:oripovd1@gmail.com">info@aliensoft.com</a>
            </p>
            <h2>Types of Data collected</h2>
            <p>Among the types of Personal Data that this Application collects, by itself or through third parties, there
                are: Cookies, Usage Data, first name, last name, phone number, company name, profession, country, state,
            email address, ZIP/Postal code, city, field of activity and website.</p>
            <p>Other Personal Data collected may be described in other sections of this privacy policy or by dedicated
            explanation text contextually with the Data collection.</p>
            <p>The Personal Data may be freely provided by the User, or collected automatically when using this
            Application.</p>
            <p>Any use of Cookies - or of other tracking tools - by this Application or by the owners of third party
                services used by this Application, unless stated otherwise, serves to identify Users and remember their
            preferences, for the sole purpose of providing the service required by the User.</p>
            <p>Failure to provide certain Personal Data may make it impossible for this Application to provide its
            services.</p>
            <p>Users are responsible for any Personal Data of third parties obtained, published or shared through this
            Application and confirm that they have the third party's consent to provide the Data to the Owner.</p>
            <h2>Mode and place of processing the Data</h2>
            <h3>Methods of processing</h3>
            <p>The Data Controller processes the Data of Users in a proper manner and shall take appropriate security
                measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the
            Data.</p>
            <p>The Data processing is carried out using computers and/or IT enabled tools, following organizational
                procedures and modes strictly related to the purposes indicated. In addition to the Data Controller, in some
                cases, the Data may be accessible to certain types of persons in charge, involved with the operation of the
                site (administration, sales, marketing, legal, system administration) or external parties (such as third
                party technical service providers, mail carriers, hosting providers, IT companies, communications agencies)
                appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested
            from the Data Controller at any time.</p>
            <h3>Place</h3>
            <p>The Data is processed at the Data Controller's operating offices and in any other places where the parties
            involved with the processing are located. For further information, please contact the Data Controller.</p>
            <h3>Retention time</h3>
            <p>The Data is kept for the time necessary to provide the service requested by the User, or stated by the
                purposes outlined in this document, and the User can always request that the Data Controller suspend or
            remove the data.</p>
            <h2>The use of the collected Data</h2>
            <p>The Data concerning the User is collected to allow the Owner to provide its services, as well as for the
                following purposes: Analytics, Registration and authentication, Contacting the User and Remarketing and
                behavioral targeting. The Personal Data used for each purpose is outlined in the specific sections of this
            document.</p>
        </Fade>
    </div>
);

export default PrivacyBlock;