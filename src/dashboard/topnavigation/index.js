import { useToggle } from '../provider/context';

export default function TopNavigation() {
  const { toggle } = useToggle();
  return (
    <header className="relative z-10 items-center w-full h-16 bg-white shadow md:h-20">
      <div className="relative flex flex-col justify-center h-full px-3 mx-auto flex-center">
        <div className="relative flex items-center w-full pl-1 sm:ml-0 sm:pr-2 lg:max-w-68">
          <div className="relative left-0 flex w-3/4">
            <div className="relative flex items-center w-12 h-full group">
              <button
                type="button"
                aria-expanded="false"
                aria-label="Toggle sidenav"
                onClick={toggle}
                className="text-4xl text-black focus:outline-none"
              >
                &#8801;
              </button>
            </div>
          </div>
          <div className="relative flex items-center justify-end w-full p-1 ml-5 sm:mr-0 sm:right-auto">
            <a href="#" className="relative block">
              <img
                alt="profile"
                src="/images/1.png"
                className="object-cover w-10 h-10 mx-auto rounded-full"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
