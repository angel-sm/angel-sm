const Vue = () => {
  return (
    <div className="icon text-xs flex items-center flex-col gap-3">
      <div className="relative flex items-center justify-center">
        <svg
          className="w-[60px] z-1"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Vue</title>
          <path
            fill="#4FC08D"
            d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"
          />
        </svg>
      </div>
      <span className="icon-title text-stone-300">Vue</span>
    </div>
  );
};

export default Vue;
