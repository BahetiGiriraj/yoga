function LeftAsana({ imageURL, asanaName, description }) {
  return (
    <div className="max-w-6xl mx-auto my-10 px-4 flex flex-col md:flex-row items-center gap-10">
      <div className="w-full md:w-1/2">
        <img src={imageURL} alt={asanaName} className="w-full rounded-xl shadow-md" />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-2xl font-semibold italic text-gray-800 mb-3">{asanaName}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default LeftAsana;
