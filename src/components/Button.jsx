const Button = ({ text, className, onClick }) => (
    <button className={`px-4 py-2 rounded-full ${className}`} onClick={onClick}>
      {text}
    </button>
  );

  export default Button;