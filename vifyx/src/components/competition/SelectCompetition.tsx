export interface Option {
  value: number;
  label: string;
}

interface Props {
  options: Option[];
}

export default function SelectCompetition({ options }: Props) {
  return (
    <select className="w-full max-w-[1000px] rounded-lg border border-black bg-white px-4 py-3">
      {options.map(option => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}
