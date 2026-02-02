

interface HeaderProps{
    title: string;
    year: number;
    slogan: string;
    services: string[];
}

function Header(props: HeaderProps) {
  return (
    <header>
        <h1>{props.title}</h1>
        <h2>{"Founded in " + props.year}</h2>
        <h3>{props.slogan}</h3>
        <ul>
            {props.services.map(
                service => 
                    <li key={service}>{service}</li>
            )}
        </ul>
    </header>
  );
}

export default Header;