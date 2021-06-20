
function Header() {
  return (
    <header class="page-header">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div class="container">
      <a href=""><img class="logo"src="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png" alt="logo"/></a>
      <nav class="header-nav">
        <ul class="nav-list">
          <li class="nav-item"><a href="#">Home</a></li>
          <li class="nav-item"><a href="#">Education</a></li>
          <li class="nav-item"><a href="#">Contact Us</a></li>
        </ul>
      </nav>
      <div class="header-actions">
        <ul class="social-list">
          <li class="social-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
          <li class="social-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
          <li class="social-item"><a href="#"><i class="fa fa-linkedin-in"></i></a></li>
        </ul>
      </div>
    </div>
  </header>
  );
}

export default Header;