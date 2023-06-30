import React, { useState } from 'react'
// import { useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {

  // const navigate = useNavigate();

  const [inpval, setInp] = useState({
    name: "",
    email: "",
    subject: "",
    description: ""
  })


  const setData = (e) => {
    // console.log(e.target.value)
    const { name, value } = e.target
    setInp((preval) => {
      return {
        ...preval,
        [name]: value
      }
    })
  }

  const addInpData = async (e) => {
    e.preventDefault();

    // toast.loading("Please wait!", {
    //   position: "top-center",
    // })

    const { name, email, subject, description } = inpval;

    const response = await fetch('http://localhost:5000/api/contact', {
      // const response = await fetch('https://portfolio-backend-ten-black.vercel.app/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, subject, description
      })
    })

    const data = await response.json();
    console.log(response)

    if (response.status === 404 || !data) {
      toast.warning("Please fill all the fields", {
        position: "top-center",
        autoClose: 5000,
        isLoading: false,
      })
    } else {
      setInp({ ...inpval, name: "", email: "", subject: "", description: "" })
      toast.success("Message send successfully ❤", {
        position: "top-center",
        autoClose: 5000,
        isLoading: false,
      })
    }
  }

  return (
    <>
      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contact Me</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Get In Touch</div>
              <p>
                Here are my details which can help you to connect with me!
              </p>
              <div className="icons">
                <div className="row">
                  <i className="fas fa-user"></i>
                  <div className="info">
                    <div className="head">Name</div>
                    <div className="sub-title">Karan Pal</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">Bilari, Moradabad Up , India</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-envelope"></i>
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">karanpal03040@gmail.com</div>
                  </div>
                </div>
                <div className="row">
                  <a href="https://www.linkedin.com/in/karan-pal-developer/" rel="noreferrer" target='_blank' style={{ marginRight: "25px" }}><i class="fa-brands fa-linkedin"></i></a>
                  <a href="https://github.com/karanpal03040" target='_blank' rel="noreferrer" style={{ marginRight: "25px" }}><i class="fa-brands fa-github"></i></a>
                  <a href="https://www.instagram.com/karan_sanatanii/" target='_blank' rel="noreferrer" style={{ marginRight: "25px" }}><i class="fa-brands fa-instagram"></i></a>
                </div>

              </div>
            </div>
            <div className="column right">
              <div className="text">Message Me</div>
              <form>
                <div className="fields">
                  <div className="field name">
                    <input type="text" value={inpval.name} onChange={setData} placeholder="Name" name="name" />
                  </div>
                  <div className="field email">
                    <input type="email" value={inpval.email} onChange={setData} placeholder="E-mail" name="email" />
                  </div>
                </div>
                <div className="field sub">
                  <input type="text" value={inpval.subject} onChange={setData} placeholder="Subject" name="subject" />
                </div>
                <div className="field textarea">
                  <textarea
                    cols="30"
                    rows="10"
                    placeholder="Description..."
                    name="description"
                    value={inpval.description}
                    required
                    onChange={setData}
                  ></textarea>
                </div>
                <div className="button">
                  <button type="submit" onClick={addInpData}>Send message</button>
                </div>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </section>
    </>
  )
}
