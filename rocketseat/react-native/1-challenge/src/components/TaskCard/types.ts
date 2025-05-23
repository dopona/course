export type TaskCardProps = {
  isChecked: boolean;
  description: string;
  onCheck: () => void;
  onDelete: () => void;
};
