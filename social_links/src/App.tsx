import './App.css';
import jessicaImg from './assets/avatar-jessica.jpeg';

const socialLinks = [
  {
    href: 'github',
    title: 'Github',
  },
  {
    href: 'frontend mentor',
    title: 'Frontend Mentor',
  },
  {
    href: 'LinkedIn',
    title: 'LinkedIn',
  },
  {
    href: 'Twitter',
    title: 'Twitter',
  },
  {
    href: 'Instagram',
    title: 'Instagram',
  },
];

function App() {
  return (
    <section>
      <div className="flex justify-center items-center min-h-screen w-full bg-dark">
        <div className="bg-darker flex flex-col p-6 lg:p-8 items-center justify-center gap-4 rounded-xl shadow-lg">
          <div className="py-2">
            <img
              src={jessicaImg}
              alt="Jessica Image"
              className="size-24 rounded-full"
            />
          </div>

          <span className="text-white font-inter text-xl">Jessica Randall</span>
          <span className="text-accent text-md">London, United Kingdom</span>
          <span className="text-white/80 text-center">
            "Front-end developer and avid reader."
          </span>
          <div className="flex flex-col w-full gap-2">
            {socialLinks.map((link) => (
              <button
                key={link.title}
                className="bg-lighter w-full p-3 rounded-md text-white text-center hover:bg-accent transition-colors"
              >
                {link.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
