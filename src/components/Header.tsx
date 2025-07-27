import foto from '../assets/daniel.jpeg';

const Header = () => {
  return (
    <header className="bg-primary text-white text-center p-4">
      <img src={foto} alt="Daniel Ojeda" width="150" className="rounded-circle mb-3" />
      <h1>Daniel Antonio Ojeda Martinez</h1>
    </header>
  );
};

export default Header;