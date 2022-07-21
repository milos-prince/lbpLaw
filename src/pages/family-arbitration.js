import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import resolution from "../../static/early-dispute-resolution.pdf"

const IndexPage = () => (
  <Layout>
    <SEO title="Family arbitration" />
    <section className="headerSection shortHeader">
      <h1>Family arbitration</h1>
    </section>
    <section className="textSection bg-light-green">
      <div className="labourTextbox">
      <p>On March 1, 2021 significant changes to <span className="ital">The Divorce Act</span> (which applies throughout Canada) came into effect. These changes were designed, in part, to make it easier for people to resolve family law issues outside the courtroom. Amendments to Saskatchewan’s legislation, including the Children’s Law Act have been implemented to align with federal law and provide provisions regarding arbitration, among other changes.</p>
      <p>Effective July 1, 2022, Saskatchewan’s Early Family Dispute Resolution (EDR) process became mandatory in all judicial centers in the province after a successful pilot project in Prince Albert.</p>
      </div>
      <div className="indentLeft">
      <p className="bold">These links below explain how family arbitration fits into the EDR:</p>
      <p><a href="https://www.saskatchewan.ca/residents/births-deaths-marriages-and-divorces/separation-or-divorce/early-family-dispute-resolution/family-arbitration">Family Arbitration</a></p>
      <p><a href={resolution}>Mandatory Early Dispute Resolution</a></p>
      </div>
      <div className="quoteblock"><h1 className="leftQuote mb-0">“</h1>
      <p>People whose family structure is changing often need legal help, but they do not always need to go to court. Family arbitration is one option to resolve issues where people cannot mediate and agree - Sometimes it is necessary to present the problem to an independent objective decision-maker.</p>
      <h1 className="rightQuote mb-0">”</h1>
      </div>
      </section>
      <section className="textSection familyBg">
      <div>
        <h2>Benefits of family arbitration</h2>  
        <ul className="serrat benefitsOfArbitration">
          <li>Private and confidential process</li>
          <li>Faster, cheaper, less intimidating than court</li>
          <li>Hearings can be conducted with lawyers or with self-represented people</li>
          <li>Final and binding decision</li>
        </ul>
      </div>
    </section>
    <section className="bg-pink textSection tb-pad-increase">
    <h2>How the process would work with me</h2>
    <ol className="myProcess">
      <li>We would discuss the “rules” and process in advance</li>
      <li>We would be sure about the issue or issues in dispute which require a decision</li>
      <li>We would set clear timelines and the cost for the arbitration would be confirmed in advance</li>
      <li>I will commit to a deadline for delivering a decision, which would be established according to the complexity of the case</li>
    </ol>
    </section>
    <section className="textSection text-center tb-pad-increase">
      <h2>I am uniquely qualified to deliver family arbitration services in Saskatchewan</h2>
      <div className="max500">
        <p>There are many experienced family law lawyers who may seek to become arbitrators due to the changes in the law noted above, and there are many commercial/labor arbitrators who are already experienced in conducting hearings, but these two areas of legal practice do not often intersect.</p>
        <p className="mb-0">Due to my somewhat unique professional experience as a lawyer who practiced a substantial amount of family law for nearly 25 years and who has also been working almost full-time as a decision maker from 2008 onward, I have the skills and experience necessary to conduct family arbitration hearings with considerable knowledge of family law and insight into the challenges faced by people dealing with family breakdown.</p>
      </div>
    </section>
    <section className="bg-light-green textSection">
      <h3 className="bold" id="note-to-lawyers">Note to lawyers</h3>
      <p>Contact me to discuss arbitration of discrete issues within ongoing litigation or mediation, limited scope hearings, or opportunities to expedite urgent matters.</p>
      <p>You could appear with clients at an arbitration or send them to arbitration on their own with a view to continuing with cases after a decision is made on one or more issues.</p>
    </section>
  </Layout>
)

export default IndexPage
