export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>Movie</li>
        <li>TV</li>
      </ul>
      <form>
        <input type="text" placeholder="Search" className="search" />
      </form>
    </nav>
  );
};
