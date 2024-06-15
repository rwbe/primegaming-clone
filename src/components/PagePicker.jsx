import PropTypes from 'prop-types';

const PagePicker = ({ numPages, currentPage, onPageClick }) => {
  const pages = Array.from({ length: numPages }, (_, index) => index + 1);

  return (
    <div className="flex items-center mt-4 justify-center">
      {pages.map((page) => (
        <div
          key={page}
          className={`w-6 h-2 mx-1 rounded-lg cursor-pointer ${
            page === currentPage ? 'bg-white' : 'bg-gray-700'
          }`}
          onClick={() => onPageClick(page)}
        />
      ))}
    </div>
  );
};

PagePicker.propTypes = {
  numPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageClick: PropTypes.func.isRequired,
};

export default PagePicker;
