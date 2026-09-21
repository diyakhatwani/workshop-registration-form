  import { useState } from "react";
   
  export default function Assi3({ addnewinfo }) {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      text: "",
      tech: "",
    });

    const [isvalid, setvalid] = useState(true);
    const [val, setVal] = useState(true);
    const [Eval, setEval] = useState(true);

    const handel = (event) => {
      setFormData((data) => {
        return {
          ...data,
          [event.target.name]: event.target.value,
        };
      });
    };

    const def = (event) => {
       
    event.preventDefault();
    

    // Nme Val
    if (!formData.name) {
      console.log("Name Error");
      setvalid(false);
     
    } else {
      setvalid(true);
    }

    // Email Val
    if (!formData.email) {
        console.log("Email Error");
      setEval(false);
    
    } else {
      setEval(true);
    }

    // Phone Val
    if (formData.phone.length !== 10 && !formData.phone) {
        console.log("Phone Error");
      setVal(false);
   
    } else {
      setVal(true);
    }

    // if ( !formData.name ||!formData.email ||
    //   formData.phone.length !== 10
    // ) {
    //   return;
    // }
    addnewinfo(formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      text: "",
      tech: "",
    });
  };
    return (
      <>
     
        { <form onSubmit={def} >
          

          <label>Name :</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full Name"
            value={formData.name}
            onChange={handel}
          />
          {!isvalid && (
            <p style={{ color: "red" }}>This Field cannot be empty</p>
          )}

          <br />
          <br />

          <label>Email :</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handel}
          />

          {!Eval && (
            <p style={{ color: "red" }}>Please Enter the Email</p>
          )}

          <br />
          <br />

          <label>Phone :</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Phone No"
            value={formData.phone}
            onChange={handel}
          />

          {!val && (
            <p style={{ color: "red" }}>Phone Number must be 10 digits</p>
          )}
          <br></br><br></br>
          <h3>Select Tech Stack</h3>

          <input
            type="radio"
            id="mern"
            name="tech"
            value="MERN Stack"
            checked={formData.tech === "MERN Stack"}
            onChange={handel}
          />
          <label htmlFor="mern">MERN Stack</label>

          <br />

          <input
            type="radio"
            id="data"
            name="tech"
            value="Data Analytics"
            checked={formData.tech === "Data Analytics"}
            onChange={handel}
          />
          <label htmlFor="data">Data Analytics</label>

          <br />

          <input
            type="radio"
            id="ai"
            name="tech"
            value="AI/ML"
            checked={formData.tech === "AI/ML"}
            onChange={handel}
          />
          <label htmlFor="ai">AI/ML</label>

          <br />
          <br />

          <label>Message :</label>
          <br />

          <textarea
            name="text"
            rows="4"
            cols="40"
            placeholder="Enter Your Message"
            value={formData.text}
            onChange={handel}
          ></textarea>

          <br />
          <br />

          <button type="submit">Register</button>
        </form> }
      </>
    );
  }
