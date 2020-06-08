import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Contact" />
    <section className="headerSection justify-center"><h1 className="mb-0">Contact me</h1></section>
    <section className="textSection text-center">
    
    
    <div className="contactFormWrapper">
      
    <form name="contact" method="post" data-netlify="true" netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact" />
    <p className="d-none">
    <label>This field is not for humans <input name="bot-field" /></label>
  </p>
  <div class="form-group">
    <input type="name" class="form-control" id="exampleInputPassword1" placeholder="Your name" />
  </div>
  <div class="form-group">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail address" />
  </div>
  <div class="form-group">
    <input type="name" class="form-control" id="exampleInputPassword1" placeholder="Subject" />
  </div>
  <div class="form-group">
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
  </div>
  <div className="text-center"><button type="submit">Submit</button></div>
  </form>
  </div>
    
  </section>
  </Layout>
)

export default NotFoundPage
