const Content = ({ title, children }) => (
  <div className="flex flex-col flex-wrap sm:flex-row">
    <div className="bg-gray-100 min-h-screen w-full">
      <h1 className="text-4xl font-bold text-center mb-6">{title}</h1>
      {children}
    </div>
  </div>
);

export default Content;
