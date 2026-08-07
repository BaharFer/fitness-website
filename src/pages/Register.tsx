import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export function Register() {

  const navigate = useNavigate();


  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  const [success, setSuccess] = useState("");



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };




  const validate = () => {

    let valid = true;


    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };


    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    if (!form.firstName.trim()) {

      newErrors.firstName =
        "First name is required";

      valid = false;
    }



    if (!form.lastName.trim()) {

      newErrors.lastName =
        "Last name is required";

      valid = false;
    }



    if (!form.email.trim()) {

      newErrors.email =
        "Email is required";

      valid = false;

    } else if (!emailRegex.test(form.email)) {

      newErrors.email =
        "Enter a valid email";

      valid = false;
    }




    if (!form.password) {

      newErrors.password =
        "Password is required";

      valid = false;


    } else if (form.password.length < 6) {

      newErrors.password =
        "Password must be at least 6 characters";

      valid = false;
    }




    if (!form.confirmPassword) {

      newErrors.confirmPassword =
        "Please confirm your password";

      valid = false;


    } else if (
      form.password !== form.confirmPassword
    ) {

      newErrors.confirmPassword =
        "Passwords do not match";

      valid = false;
    }




    setErrors(newErrors);

    return valid;

  };






  const handleSubmit = (
    e: React.FormEvent
  ) => {

    e.preventDefault();


    if (!validate()) return;



    setSuccess(
      "🎉 Account created successfully!"
    );



    setTimeout(() => {

      navigate("/");

    }, 1500);


  };





  return (

    <section className="flex min-h-screen items-center justify-center bg-[var(--color-bg)] px-6 py-10">


      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">


        <h1 className="mb-2 text-3xl font-bold text-white">
          Create account
        </h1>


        <p className="mb-8 text-white/60">
          Join Pulse and start your fitness journey
        </p>



        {success && (

          <p className="mb-5 rounded-xl bg-green-500/20 p-3 text-green-300">

            {success}

          </p>

        )}




        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >



          <div>

            <input

              type="text"

              name="firstName"

              placeholder="First name"

              value={form.firstName}

              onChange={handleChange}

              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-[var(--color-accent-lime)]"

            />


            {errors.firstName && (

              <p className="mt-2 text-sm text-red-400">

                {errors.firstName}

              </p>

            )}

          </div>





          <div>

            <input

              type="text"

              name="lastName"

              placeholder="Last name"

              value={form.lastName}

              onChange={handleChange}

              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-[var(--color-accent-lime)]"

            />


            {errors.lastName && (

              <p className="mt-2 text-sm text-red-400">

                {errors.lastName}

              </p>

            )}

          </div>





          <div>

            <input

              type="email"

              name="email"

              placeholder="Email"

              value={form.email}

              onChange={handleChange}

              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-[var(--color-accent-lime)]"

            />


            {errors.email && (

              <p className="mt-2 text-sm text-red-400">

                {errors.email}

              </p>

            )}

          </div>





          <div>

            <input

              type="password"

              name="password"

              placeholder="Password"

              value={form.password}

              onChange={handleChange}

              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-[var(--color-accent-lime)]"

            />


            {errors.password && (

              <p className="mt-2 text-sm text-red-400">

                {errors.password}

              </p>

            )}

          </div>





          <div>

            <input

              type="password"

              name="confirmPassword"

              placeholder="Confirm password"

              value={form.confirmPassword}

              onChange={handleChange}

              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-[var(--color-accent-lime)]"

            />


            {errors.confirmPassword && (

              <p className="mt-2 text-sm text-red-400">

                {errors.confirmPassword}

              </p>

            )}

          </div>






          <button

            type="submit"

            className="mt-3 w-full rounded-xl bg-[var(--color-accent-lime)] py-3 font-semibold text-black transition hover:scale-[1.02]"

          >

            Create account

          </button>




        </form>




        <p className="mt-6 text-center text-sm text-white/60">


          Already have an account?


          <Link

            to="/login"

            className="ml-2 text-[var(--color-accent-lime)]"

          >

            Login

          </Link>


        </p>




      </div>


    </section>

  );

}