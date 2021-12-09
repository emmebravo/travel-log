import { GlobeHemisphereWest } from 'phosphor-react';

function Navbar() {
  return (
    <nav>
      <GlobeHemisphereWest size={48} weight='fill' />
      <span className='nav--title'>my travel log</span>
    </nav>
  );
}

export default Navbar;
