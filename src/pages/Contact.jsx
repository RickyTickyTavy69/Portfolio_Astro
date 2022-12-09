import styles from "./contact.module.css";

import axios from "axios";

//formik
import { useFormik } from "formik";

const Contact = ({ page }) => {
  //validation function for Formik

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "The name is required";
    } else if (values.name.length < 4) {
      errors.name = "Name must be more then 4 characters";
    }

    if (!values.email) {
      errors.email = "The email is required";
    } else if (values.email.length < 4) {
      errors.email = "Email must be more then 4 characters";
    } else if (values.email.indexOf("@") === -1) {
      errors.email = "Email must contain an @ sign";
    } else if (!values.email.split("@")[1]) {
      errors.email =
        "Email seem to be invalid. Please check the email you entered";
    } else if (values.email.split("@")[1].indexOf(".") === -1) {
      errors.email =
        "Email seem to be invalid. Please check the email you entered";
    }

    if (!values.message) {
      errors.message = "The message is required";
    } else if (values.message.length < 4) {
      errors.message = "Message must be more then 4 characters";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "https://portfolioback.up.railway.app/messages/send",
          { name: values.name, email: values.email, message: values.message },
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        console.log("resp", response);
      } catch (error) {
        console.error("error", error.response);
      }
    },
  });

  return (
    <main
      className={
        page === "About" ? `${styles.main} ${styles.active}` : styles.main
      }
    >
      <div className={styles.mainContent}>
        <div>
          <h1 className={styles.title}>
            <span className={styles.titleGrey}>My </span> Contacts
          </h1>
          <p className={styles.subtitle}>
            If you want to employ me or have some project or idea or anything
            else, feel free to contact me.
          </p>
        </div>

        <div className={styles.contactSection}>
          <div className={styles.contactContainer}>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
              <div className={styles.formHeader}>
                <div className={styles.inputField}>
                  <input
                    onBlur={formik.handleBlur}
                    placeholder="please enter your name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    type="text"
                    name="name"
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className={styles.errorMessage}>
                      {formik.errors.name}
                    </div>
                  ) : null}
                </div>
                <div className={styles.inputField}>
                  <input
                    onBlur={formik.handleBlur}
                    placeholder="please, enter your email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    type="text"
                    name="email"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className={styles.errorMessage}>
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className={styles.formFooter}>
                <div className={styles.inputField}>
                  <textarea
                    onBlur={formik.handleBlur}
                    placeholder="please, enter your message"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    name="message"
                  ></textarea>
                  {formik.touched.message && formik.errors.message ? (
                    <div className={styles.errorMessage}>
                      {formik.errors.message}
                    </div>
                  ) : null}
                </div>
                <button className={styles.button} type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
