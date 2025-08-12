import css from './Modal.module.css';

type ModalProps = {
  isOpen?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
};

export default function Modal({ isOpen = false, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modal} onClick={e => e.stopPropagation()}>
        <button className={css.closeButton} onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}
