import './ButtonLink.scss';

interface ButtonLinkProps {
  linked: string;
  label: string;
  color?: colorBtn;
}

export enum colorBtn {
  primary="primary",
  secondary="secondary"
}

function ButtonLink ({linked, label, color = colorBtn.primary}:ButtonLinkProps) {

  const buttonClassName = `button-link ${color}`;

  const handleClick = () => {
    if(!linked) return;
    window.open(linked, '_blank');
  };

  return (
    <button onClick={handleClick}
    className={buttonClassName}>
      {label}
    </button>
  );
};

export default ButtonLink;
