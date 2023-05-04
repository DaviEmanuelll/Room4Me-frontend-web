import './styles.css';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div className="checkbox-group">
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="checkbox">{label}</label>
    </div>
  );
};
