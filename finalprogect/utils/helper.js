export const getvalue = (id) => document.getElementById(id).value;

export const isLoggedIn = () => {
    let logged = localStorage.getItem("isLoggedIn") || false;
    if (!logged) {
      window.location.href = "/pages/login.html";
    }
  };