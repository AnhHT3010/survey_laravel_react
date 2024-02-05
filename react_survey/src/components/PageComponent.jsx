import PropTypes from "prop-types";
function PageComponent({ title, buttons, children }) {
  return (
    <div className="bg-white shadow">
      <div className="flex justify-between mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {title}
        </h1>
        {buttons}
      </div>
      <main>
        <div className="mx-auto py-6 sm:px-6 lg:px-8 min-h-screen">
          {children}
        </div>
      </main>
    </div>
  );
}
PageComponent.propTypes = {
  title: PropTypes.string.isRequired,
  buttons: PropTypes.node,
  children: PropTypes.node.isRequired,
};
export default PageComponent;
