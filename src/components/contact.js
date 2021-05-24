import React from 'react'

const Contact = () =>{
    return (
        <>
        <div className="contact-head">
           <h3>Stay in the Know</h3> 
           <p>Lorem ipsum dolor sit amet, curabitur consectetuer et sociis, conubia accumsan gravida nam, commodo metus turpis et vitae enim, fusce integer. Interdum a justo magna. In est tincidunt </p>
        </div>

        <form data-netlify="true" name="newsletter" method="post" className="contact-news" >
          <input type="hidden" name="form-name" value="pizzaOrder" />
          <label className="label-wrap"><span className="email-label">YOUR EMAIL ADDRESS</span>
            <input name="email" type="email" />
          </label>
          <input type="submit"/>
        </form>
        </>
      )
}
export default Contact;