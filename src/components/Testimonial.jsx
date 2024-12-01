const TestimonialCard = ({ title, content, author }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg my-10 p-6">
      {/* Title Section */}
      <h2 className="text-gray-800 text-3xl font-semibold">{title}</h2>
      {/* Content Section */}
      <p className="mt-4 text-gray-600">{content}</p>
      {/* Author Section */}
      {author && (
        <div className="mt-6 text-right text-indigo-500 font-medium">
          - {author}
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
