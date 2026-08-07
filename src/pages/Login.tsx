import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
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
      email: "",
      password: "",
    };


    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } 
    else if (!emailRegex.test(form.email)) {
      newErrors.email = "Enter a valid email";
      valid = false;
    }


    if (!form.password.trim()) {
      newErrors.password = "Password is required";
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
      "🎉 Login successful!"
    );


    setTimeout(() => {
      navigate("/");
    }, 1500);
  };


  return (
    <section className="flex min-h-screen items-center justify-center bg-[var(--color-bg)] px-6">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

        <h1 className="mb-2 text-3xl font-bold text-white">
          Welcome back
        </h1>

        <p className="mb-8 text-white/60">
          Login to your account
        </p>


        {success && (
          <p className="mb-5 rounded-xl bg-green-500/20 p-3 text-green-300">
            {success}
          </p>
        )}


        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >


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



          <button
            type="submit"
            className="w-full rounded-xl bg-[var(--color-accent-lime)] py-3 font-semibold text-black transition hover:scale-[1.02]"
          >
            Login
          </button>


        </form>


        <p className="mt-6 text-center text-sm text-white/60">

          Don't have an account?

          <Link
            to="/register"
            className="ml-2 text-[var(--color-accent-lime)]"
          >
            Register
          </Link>

        </p>


      </div>

    </section>
  );
}