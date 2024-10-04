<template>
    <div class="register-container">
      <h2>Create account</h2>
      <form >
        <div class="form-group">
          <label for="email">Your email</label>
          <input
            type="email"
            id="email"
            placeholder="name@company.com"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="confirm-password">Confirm password</label>
          <input
            type="password"
            id="confirm-password"
            required
          />
        </div>
  
        <button type="submit" class="submit-btn">Create an account</button>
      </form>
  
      <p class="login-link">
        Already have an account?
        <a href="/login">Login here</a>
      </p>
    </div>
  </template>
  <script setup>
  
  </script>

  <style scoped>
  .register-container {
    width: 400px;
    margin: 0;
    padding: 2rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  h2 {
    margin-bottom: 1.5rem;
  }
  
  .form-group {
    margin-bottom: 1rem;
    text-align: left;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .form-group input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  .submit-btn {
    width: 100%;
    padding: 0.75rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .submit-btn:hover {
    background-color: #0056b3;
  }
  
  .login-link {
    margin-top: 1rem;
    font-size: 0.875rem;
  }
  
  .login-link a {
    color: #007bff;
    text-decoration: none;
  }
  
  .login-link a:hover {
    text-decoration: underline;
  }
  </style>
  