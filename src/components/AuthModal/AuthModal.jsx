import React, { useState } from "react";
import "./AuthModal.css";

const AuthModal = ({ isOpen, onClose, activeTab, onTabChange }) => {
  const [formData, setFormData] = useState({
    signin: { email: "", password: "", remember: false },
    register: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  if (!isOpen) return null;

  const handleInputChange = (formType, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [formType]: { ...prev[formType], [field]: value },
    }));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const { email, password } = formData.signin;
    // Example: simple validation
    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }
    // Perform sign-in logic here (API call)
    alert(`Signed in with email: ${email}`);
    onClose(); // Close modal after successful login
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      phone,
      password,
      confirmPassword,
      acceptTerms,
    } = formData.register;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert("Please fill all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!acceptTerms) {
      alert("You must accept the terms and privacy policy.");
      return;
    }

    // Perform registration logic here (API call)
    alert(`Account created for ${firstName} ${lastName}`);
    onClose(); // Close modal after registration
  };

  return (
    <div className="auth-backdrop">
      <div className="auth-modal professional-modal">
        {/* Header Tabs */}
        <div className="auth-header">
          <div className="auth-tabs">
            <button
              className={`auth-tab ${activeTab === "signin" ? "active" : ""}`}
              onClick={() => onTabChange("signin")}
            >
              Sign In
            </button>
            <button
              className={`auth-tab ${activeTab === "register" ? "active" : ""}`}
              onClick={() => onTabChange("register")}
            >
              Sign Up
            </button>
          </div>
          <button className="auth-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Sign In */}
        {activeTab === "signin" && (
          <div className="auth-body">
            <h2 className="auth-title">Welcome Back</h2>
            <p className="auth-subtitle">Sign in to continue to your account</p>

            <form onSubmit={handleSignIn}>
              <label className="auth-label">Email Address</label>
              <input
                type="email"
                className="auth-input"
                value={formData.signin.email}
                onChange={(e) =>
                  handleInputChange("signin", "email", e.target.value)
                }
              />

              <label className="auth-label">Password</label>
              <input
                type="password"
                className="auth-input"
                value={formData.signin.password}
                onChange={(e) =>
                  handleInputChange("signin", "password", e.target.value)
                }
              />

              <div className="auth-row-between">
                <label className="auth-checkbox-row">
                  <input
                    type="checkbox"
                    checked={formData.signin.remember}
                    onChange={(e) =>
                      handleInputChange("signin", "remember", e.target.checked)
                    }
                  />
                  Remember me
                </label>
                <a className="auth-link" href="#">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="auth-btn">
                Sign In
              </button>
            </form>

            <p className="auth-footer">
              Don't have an account?
              <button
                className="auth-link-btn"
                onClick={() => onTabChange("register")}
              >
                Sign Up
              </button>
            </p>
          </div>
        )}

        {/* Sign Up */}
        {activeTab === "register" && (
          <div className="auth-body auth-scrollable">
            <h2 className="auth-title">Create Account</h2>
            <p className="auth-subtitle">
              Fill the details below to create your account
            </p>

            <form onSubmit={handleRegister}>
              <div className="auth-grid-2">
                <div>
                  <label className="auth-label">First Name</label>
                  <input
                    className="auth-input"
                    type="text"
                    value={formData.register.firstName}
                    onChange={(e) =>
                      handleInputChange("register", "firstName", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="auth-label">Last Name</label>
                  <input
                    className="auth-input"
                    type="text"
                    value={formData.register.lastName}
                    onChange={(e) =>
                      handleInputChange("register", "lastName", e.target.value)
                    }
                  />
                </div>
              </div>

              <label className="auth-label">Email</label>
              <input
                className="auth-input"
                type="email"
                value={formData.register.email}
                onChange={(e) =>
                  handleInputChange("register", "email", e.target.value)
                }
              />

              <label className="auth-label">Phone</label>
              <input
                className="auth-input"
                type="tel"
                value={formData.register.phone}
                onChange={(e) =>
                  handleInputChange("register", "phone", e.target.value)
                }
              />

              <label className="auth-label">Password</label>
              <input
                className="auth-input"
                type="password"
                value={formData.register.password}
                onChange={(e) =>
                  handleInputChange("register", "password", e.target.value)
                }
              />

              <label className="auth-label">Confirm Password</label>
              <input
                className="auth-input"
                type="password"
                value={formData.register.confirmPassword}
                onChange={(e) =>
                  handleInputChange("register", "confirmPassword", e.target.value)
                }
              />

              <label className="auth-checkbox-row">
                <input
                  type="checkbox"
                  checked={formData.register.acceptTerms}
                  onChange={(e) =>
                    handleInputChange("register", "acceptTerms", e.target.checked)
                  }
                />
                I agree to Terms & Privacy Policy
              </label>

              <button type="submit" className="auth-btn">
                Create Account
              </button>
            </form>

            <p className="auth-footer">
              Already have an account?
              <button
                className="auth-link-btn"
                onClick={() => onTabChange("signin")}
              >
                Sign In
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
