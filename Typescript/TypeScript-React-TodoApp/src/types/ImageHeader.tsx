function ImageHeader() {
  return (
    <div className="flex items-center mb-8">
      <img
        className="h-28 w-28 object-contain"
        src="https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png"
        alt="react logo"
      />

      <span className="mx-4">+</span>
      <img
        className="h-28 w-28 object-contain"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"
        alt="ts logo"
      />
    </div>
  );
}

export default ImageHeader;
