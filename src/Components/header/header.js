function Header() {
  return (
    <div className="p-4">
      <div className="d-flex justify-content-between align-items-lg-center gap-4">
        <h4 className="mb-0">Restaurant Landing Page</h4>
        <div className="d-flex flex-column align-items-end flex-md-row flex-wrap align-items-md-center gap-1 gap-md-3">
          <div>Landing</div>
          <div>Home</div>
          <div>Gallery</div>
          <div>Shop</div>
          <div>Blog</div>
          <div>About</div>
          <div>Team</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
