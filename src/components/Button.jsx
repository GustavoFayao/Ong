import { useNavigate } from 'react-router-dom';

export const Button = ({ title, id, to = '/', scrollTarget, rightIcon, leftIcon, containerClass }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (window.location.pathname === '/' && scrollTarget) {
      const section = document.querySelector(scrollTarget);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(to);
      if (scrollTarget) {
        setTimeout(() => {
          const section = document.querySelector(scrollTarget);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300); // espera o React redirecionar antes de buscar o elemento
      }
    }
  };

  return (
    <button
      id={id}
      onClick={handleClick}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};
