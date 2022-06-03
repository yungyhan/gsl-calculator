import React from "react";

interface Props {
  value: number;
  onChange: (value: number) => void;
}

export function NumberInput({ value, onChange }: Props): React.ReactElement {
  return <input type="text" value={value} />;
}
